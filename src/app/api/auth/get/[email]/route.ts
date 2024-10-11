import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

type Params = {
  email: string;
};

export const GET = async (req: Request, { params }: { params: Params }) => {
  try {
    const { email } = params;
    if (!email) {
      return NextResponse.json({
        message: "there might be some internet issue",
      });
    }

    const user = await prisma.user.findFirst({
      where: { email: email },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: Request, { params }: { params: Params }) => {
  try {
    const { email } = params;
    const { name, companyName, industry, eNumber } = await req.json();
    if (!email) {
      return NextResponse.json({
        message: "there might be some issue with the internet",
      });
    }
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: {
        name: name,
        companyName: companyName,
        industry: industry,
        eNumber: eNumber,
      },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
