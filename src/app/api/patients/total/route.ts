import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    if (!email) {
      return NextResponse.json(
        { message: "Email is not specified" },
        { status: 404 }
      );
    }
    const totalPatient = await prisma.patient.findMany({
      where: { doctorEmail: email },
      select: { sex: true },
    });
    const numberOfPatient = totalPatient.length;
    const patient = {
      total: numberOfPatient,
      male: totalPatient.filter(
        (patient) => patient.sex.toLowerCase() === "male"
      ).length,
      female: totalPatient.filter(
        (patient) => patient.sex.toLowerCase() === "female"
      ).length,
    };
    if (!numberOfPatient) {
      return NextResponse.json({ message: "You don't have any patients yet" });
    }
    return NextResponse.json(patient, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
