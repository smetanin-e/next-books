'use server'

import { OrderStatus } from "@prisma/client";
import { prisma } from "../../prisma/prisma-client";
import { FormValues } from "./checkout/page";
import { cookies } from "next/headers";
import { createPayment, sendEmail } from "@/lib";
import { PayOrderTemplate } from "./components";

export async function createOrder(data: FormValues) {
    try {
      const cookiesStore = cookies();
      const cartToken = (await cookiesStore).get('cartToken')?.value

      if (!cartToken) {
        throw new Error('Cart token not found')
      }
//находим корзину по токену
      const userCart = await prisma.cart.findFirst({
        where: {
            token: cartToken
        },
        include: {
            cartItems: {
                include: {
                    book: true
                }
            }
        }
      })

      if (!userCart) {
        throw new Error('Cart not found')
      }

      if (userCart?.totalAmount === 0) {
        throw new Error('Cart is empty')
      }
//создаем заказ
     const order = await prisma.order.create({
        data: {
            token: cartToken,
            fullname: data.name,
            email: data.email,
            phone: data.phone,
            address: data.adress,
            comment: data.comment,

            totalAmount: userCart.totalAmount,
            status: OrderStatus.PENDING,
            items: JSON.stringify(userCart.cartItems)
        }
    })
//Очищаем корзину
        await prisma.cart.update({
            where: {
                id: userCart.id
            }, 
                data: {
                    totalAmount: 0,
                    totalQuantity: 0
                } 
        })

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id
            }
        })

//Создаем платеж
const paymentData = await createPayment({
    amount: order.totalAmount,
    orderId: order.id,
    description: 'Оплата заказа №' + order.id
})

if (!paymentData) {
    throw new Error('Не удалось создать платеж')
}

// по конкретному order id обновляем заказ в БД
await prisma.order.update({
    where: {
        id: order.id
    },
    data: {
        paymentId: paymentData.id // обновляем информацию о paymentId который есть у юкассы
    }
})

//Отправка писем на почту
//PayOrderTemplate - шаблон письма

const paymentUrl = paymentData.confirmation.confirmation_url //ссылка которая перенаправляет нас на платеж

const template = await PayOrderTemplate({
    orderId: order.id,
    totalAmount: userCart.totalAmount,
    paymentUrl,
  });

  // отправляем письмо пользователю
await sendEmail(data.email, 'Оплатите заказ №' + order.id, template )

return paymentUrl
    } catch (e) {
        console.log('[CreateOrder] Server error',e)
    }
}