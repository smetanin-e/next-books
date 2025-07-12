import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
    try {
         const query = req.nextUrl.searchParams.get('query');
    if (query) {
        const products = await prisma.book.findMany({
        where: {
            OR: [
                { title: { contains: query, mode: 'insensitive' } },
                { description: { contains: query, mode: 'insensitive' } },
                { author: { contains: query, mode: 'insensitive' } }
                ]
        }
    })
    return NextResponse.json(products)
    }
    } catch (e) {
        console.log(e)
    }
   
    return NextResponse.json({})
}