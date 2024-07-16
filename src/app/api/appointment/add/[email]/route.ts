import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

export const POST = async (req: Request, { params }: { params: { email: string } }) => {
  try {
    const { email } = params;
    const {
      date,
      time,
      location,
      patientName,
      purpose,
      status,
      duration,
      type,
      online,
    } = await req.json();

    let nextDates: string = "";
    const patient = await prisma.patient.findMany({ where: { name: patientName } });
    if (!patient.length) {
      return NextResponse.json({ message: 'Patient not found on the record' });
    }
    if (type === "Followup visit") {
      const existingAppointment = await prisma.appointment.findFirst({
        where: { patientName, doctorEmail: email },
        select: { nextDate: true },
      });

      if (!existingAppointment) {
        return NextResponse.json({ message: "Patient appointment not found" }, { status: 404 });
      }

      nextDates = existingAppointment.nextDate;
      await prisma.appointment.delete({ where: { patientName, doctorEmail: email } });
    }

    const timeAppointed = await prisma.appointment.findFirst({ where: { date, time, location } });

    if (timeAppointed) {
      return NextResponse.json({ message: "Slot already booked. Please choose a different time." }, { status: 409 });
    }

    let dura = duration.slice(0, -1);

    const newAppointment = await prisma.appointment.create({
      data: {
        doctorEmail: email,
        patientName,
        date: nextDates,
        time,
        nextDate: date,
        location,
        purpose,
        duration: dura,
        appointmentStatus: status,
        type,
        online,
      },
    });

    return NextResponse.json(newAppointment, { status: 201 });
  } catch (error) {
    console.error("Error creating appointment:", error);

    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
