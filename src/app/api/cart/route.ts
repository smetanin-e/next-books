import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import crypto from 'crypto'
import { findOrCreateCart } from "@/lib/find-or-create-cart";
import { CreateCartItemValue } from "../../../../services/dto/cart.dto";
import { updateCartTotlaAmount } from "@/lib";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value

        if (!token) {
            return NextResponse.json({})
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                token,
            },
            include: {
                cartItems: {
                    orderBy: {
                        createAt: 'desc'
                    },
                    include: {
                        book: true
                    }
                }
            }
        })

        return NextResponse.json(userCart)
    } catch (error) {
       console.log('[CART_GET] Server error', error)
        return NextResponse.json({message: 'Не удалось получить корзину'}, {status: 500}) 
    }
    
}

export async function POST(req: NextRequest) {
    try{
        //берем токен из cookies
        let token = req.cookies.get('cartToken')?.value

        //если его нет, создаем 
        if (!token) {
            token = crypto.randomUUID()
        }

        //ищем корзину по токену. Если такой нет, то создаем ее 
        const userCart = await findOrCreateCart(token)
        const data = (await req.json()) as CreateCartItemValue;

        
        const findCartItem = await prisma.cartItem.findFirst({
            where: {
                cartId: userCart.id,
                bookId: data.bookId
            }
        })
        //проверяем был ли ранее товар добавлен в корзину, чтобы избежать дубликатов
        if (!findCartItem) {
            await prisma.cartItem.create({
                data:{
                    cartId: userCart.id,
                    bookId:data.bookId,

                }
            })
        
        } else {
            await prisma.cartItem.update({
                where: {
                   id: findCartItem.id
                },
                data: {
                    quantity: findCartItem.quantity + 1
                }
            })
        
        }

       const updateUserCart = await updateCartTotlaAmount(token)
        const resp = NextResponse.json(updateUserCart)
        resp.cookies.set('cartToken', token)
        return resp 
    
    } catch (error) {
       console.log('[CART_POST] Server error', error)
        return NextResponse.json({message: 'Не удалось создать корзину'}, {status: 500}) 
    }
}