import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { name, email, password, companyName, industry, eNumber } = await req.json();
    if (!name || !email || !password || !companyName || !industry || !eNumber) {
      return NextResponse.json({ message: "Missing Data" }, { status: 422 });
    }
    const existedUser = await prisma.user.findFirst({
      where: { email: email },
    });
    if (existedUser?.id) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        companyName,
        industry,
        eNumber,
        hashedPassword,
      },
    });
    return NextResponse.json({ newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
