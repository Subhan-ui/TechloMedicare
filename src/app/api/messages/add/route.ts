import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const POST = async (
  req: Request,
) => {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    const { message } = await req.json();
    const time = new Date().toISOString();
    console.log(message, email, time)
  try {
    if (!message) {
      return NextResponse.json({ message: "no message" }, { status: 400 });
    }
    if(!email){
        return NextResponse.json({message: 'You need to login '})
    }
   
    const newMessage = await prisma.message.create({
      data: {
        time,
        message,
        email,
      },
    });
    return NextResponse.json({ newMessage }, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
