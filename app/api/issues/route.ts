import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { createNewIssueSchema } from "../../createNewIssueSchema";
import { Status } from "@prisma/client";

export async function POST(req: NextRequest) {
    const body = await req.json();
    const validation = createNewIssueSchema.safeParse(body);

    if(!validation.success) {
        return NextResponse.json(validation.error.format(), {status: 400});
    }
    
    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description,
        },
    });

    return NextResponse.json(newIssue, {status: 201});
}

export async function GET(req: NextRequest) {
    const url1stPart: any = req.url.split('?')[1];
    const status = Object.values(Status).includes(url1stPart) ? url1stPart : undefined;

    const issues = await prisma.issue.findMany({where: { status }});
    return NextResponse.json(issues, {status: 200});
}