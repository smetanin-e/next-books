import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
    const subcategories = await prisma.subCategory.findMany()
    return NextResponse.json(subcategories)
}