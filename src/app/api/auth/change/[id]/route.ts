import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";
import bcrypt from "bcrypt";

type Params = {
  id: string;
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  try {
    const { id } = params;
    const { password } = await req.json();
    if (!id) {
      return NextResponse.json(
        { message: "No id specified." },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }
    const matchedPassword = await bcrypt.compare(password, user.hashedPassword);
    if (matchedPassword) {
      return NextResponse.json(
        { message: "You just typed your old password." },
        { status: 422 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const updateUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        hashedPassword,
      },
    });
    return NextResponse.json(
      { message: "Password changed successfully." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
