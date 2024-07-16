import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../../../prisma";

export const PATCH = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    if (!email) {
      return NextResponse.json(
        { message: "Enter your email address" },
        { status: 422 }
      );
    } else if (!password) {
      return NextResponse.json(
        { message: "Enter your new Password" },
        { status: 422 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 404 }
      );
    }

    const matchedPassword = await bcrypt.compare(password, user.hashedPassword);
    if (matchedPassword) {
      return NextResponse.json(
        { message: "You just typed your old password" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { hashedPassword: hashedPassword },
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({message: error.message},{status: 400})
  } finally {
    await prisma.$disconnect();
  }
};
