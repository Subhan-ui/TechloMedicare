import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const GET = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json(
        { message: "No email specified." },
        { status: 400 }
      );
    }

    const appointments = await prisma.appointment.findMany({
      where: { doctorEmail: email },
    });

    if (appointments.length === 0) {
      return NextResponse.json(
        { message: "No appointments found." },
        { status: 200 }
      );
    }

    const patientNames = Array.from(
      new Set(appointments.map((appt) => appt.patientName))
    );

    const patients = await prisma.patient.findMany({
      where: {
        name: {
          in: patientNames,
        },
        doctorEmail: email,
      },
      select: {
        name: true,
        recordNumber: true,
      },
    });

    const patientRecordMap = patients.reduce((map, patient) => {
      map[patient.name] = patient.recordNumber;
      return map;
    }, {} as Record<string, number>);

    const appointmentsWithRecordNumber = appointments.map((appointment) => ({
      ...appointment,
      patientRecordNumber: patientRecordMap[appointment.patientName] || null,
    }));

    return NextResponse.json(appointmentsWithRecordNumber, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
};
