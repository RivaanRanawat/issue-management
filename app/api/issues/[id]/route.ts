import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: any) {
    try {

        const issue = await prisma.issue.findFirst({where: {id: parseInt(params.id),},},);
        return NextResponse.json(issue, {status: 200});
    } catch (e) {
        return NextResponse.json('An error occurred!', {status: 400});
    }
}