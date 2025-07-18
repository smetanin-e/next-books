
import { PaymentCallbackData } from "@/@types/yookassa";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { CartItemDTO } from "../../../../../services/dto/cart.dto";
import { sendEmail } from "@/lib";
import { CompliteOrderTemplate } from "@/app/components";
import { OrderStatus } from "@prisma/client";

export async function POST(req: NextRequest) {
    try{
        const body = (await req.json()) as PaymentCallbackData
        const order = await prisma.order.findFirst({
            where: {
                id: Number(body.object.metadata.order_id)
            }
        })

        if (!order) {
            return NextResponse.json({error: 'Order not found'})
        }

        const isSucceeded = body.object.status === 'succeeded'

        await prisma.order.update({
            where: {
                id: order.id
            },
            data: {
                status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELED
            }
        })

        const items = JSON.parse(order?.items as string) as CartItemDTO[]
        

        if (isSucceeded) {
            const template = await CompliteOrderTemplate({
            orderId: order.id,
            items: items 
          });
            await sendEmail(order.email, 'Next Books | Успешный заказ №' + order.id, template)
        } else {
            //письмо о неуспешной оплате
        } 

        
    } catch (error){
        console.log('[Checkout Callback]',error)
        return NextResponse.json({error: 'Server error'})
    }
}