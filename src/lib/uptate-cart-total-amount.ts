import { prisma } from "../../prisma/prisma-client"

export const updateCartTotlaAmount = async (token: string) => {
    const userCart = await prisma.cart.findFirst({
        where: {
            token
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

    if (!userCart) {
        return
    }

 const totalAmount = userCart.cartItems.reduce((acc, item) => {return acc + (item.quantity * item.book!.price)},0)
 const totalQuantity = userCart.cartItems.reduce((acc, item) => {return acc + item.quantity},0)

 return await prisma.cart.update({
    where: {
        id: userCart.id
    },
    data: {
        totalAmount,
        totalQuantity
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
}