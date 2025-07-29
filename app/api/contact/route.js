import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    const {name, email, message} = data;

    

    return NextResponse.json({message: "Message received!"})
}