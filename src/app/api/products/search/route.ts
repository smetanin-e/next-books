import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.book.findMany({
        where: {
            title: {
                contains: query,
                mode: 'insensitive'
            }
        }
    })
    return NextResponse.json(products)
}