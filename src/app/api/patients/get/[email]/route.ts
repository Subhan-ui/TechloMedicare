import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

export const GET = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    const { email } = params;
    const patients = await prisma.patient.findMany({
      where: { doctorEmail: email },
    });
    if (!patients) {
      return NextResponse.json(
        { message: "You don't have any patients yet." },
        { status: 400 }
      );
    }
    return NextResponse.json(patients, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "something wrong" }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};
