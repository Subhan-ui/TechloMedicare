import prisma from "../../../../../prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  try {
    if (!email) {
      return NextResponse.json({ message: "You need to Login" });
    }
    const messages = await prisma.message.findMany({
      where: {
        email: email,
      },
    });
    return NextResponse.json(messages, { status: 200 });
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
