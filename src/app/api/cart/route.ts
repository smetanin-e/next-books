import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

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
    } catch (e) {
        console.error(e)
    }
    
}