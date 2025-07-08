import { NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
    const tags = await prisma.tag.findMany()
    return NextResponse.json(tags)
}