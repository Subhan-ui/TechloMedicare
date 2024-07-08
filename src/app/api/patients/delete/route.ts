import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const DELETE = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "no id available" });
    }
    await prisma.patient.delete({
      where: { id: id },
    });
    return NextResponse.json(
      { message: "Patient removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "there might be a problem deleting the patient" },
      { status: 402 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
