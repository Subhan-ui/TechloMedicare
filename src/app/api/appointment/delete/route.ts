import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const DELETE = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "no id available" });
    }
    await prisma.appointment.delete({
      where: { id: id },
    });
    return NextResponse.json(
      { message: "Appointment removed successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "there might be a problem deleting the appointment" },
      { status: 402 }
    );
  } finally {
    await prisma.$disconnect();
  }
};
