import prisma from "../../../../../prisma";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    if (!email) {
      return NextResponse.json({ message: "You didn't sign in yet" });
    }
    const appointment = await prisma.appointment.findMany({
      where: { doctorEmail: email },
      select: { online: true },
    });
    const data = {
      online: appointment.filter((appoi) => appoi.online === true).length,
      offline: appointment.filter((appoi) => appoi.online === false).length,
    };
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error-> ", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
