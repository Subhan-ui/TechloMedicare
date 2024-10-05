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
    const patient = await prisma.patient.findMany({ where: { name: patientName, doctorEmail: email } });
    if (!patient.length) {
      return NextResponse.json({ message: 'Patient not found on the record' });
    }
    if (type === "Followup visit") {
      const existingAppointment = await prisma.appointment.findFirst({
        where: { patientName, doctorEmail: email },
        select: { nextDate: true, id: true },
      });
      console.log(date, time)
      if (!existingAppointment) {
        return NextResponse.json({ message: "Patient appointment not found" }, { status: 404 });
      }

      nextDates = existingAppointment.nextDate;
      await prisma.appointment.delete({ where: { id: existingAppointment.id } });
    }

    const timeAppointed = await prisma.appointment.findFirst({ where: { date, time, doctorEmail: email } });

    if (timeAppointed) {
      return NextResponse.json({ message: "Slot already booked. Please choose a different time." }, { status: 409 });
    }

    let dura = duration.slice(0, -1);

    const addMinutes = (time: string, duration: number) => {
      const [hours, minutes] = time.split(':').map(Number);
      const newTime = new Date();
      newTime.setHours(hours);
      newTime.setMinutes(minutes + duration);
      const newHours = String(newTime.getHours()).padStart(2, '0');
      const newMinutes = String(newTime.getMinutes()).padStart(2, '0');
      return `${newHours}:${newMinutes}`;
    };

    const overlappingAppointment = await prisma.appointment.findMany({
      where: {
        date,
        doctorEmail: email,
      },
    });

    let appointmentConflict = false;

    const newAppointmentStartTime = time;
    const newAppointmentEndTime = addMinutes(time, parseInt(duration));

    overlappingAppointment.forEach(existingAppointment => {
      const existingStartTime = existingAppointment.time;
      const existingEndTime = addMinutes(existingStartTime, parseInt(existingAppointment.duration));

      if (
        (newAppointmentStartTime >= existingStartTime && newAppointmentStartTime < existingEndTime) || 
        (newAppointmentEndTime > existingStartTime && newAppointmentEndTime <= existingEndTime) || 
        (existingStartTime >= newAppointmentStartTime && existingStartTime < newAppointmentEndTime)
      ) {
        appointmentConflict = true;
      }
    });

    if (appointmentConflict) {
      return NextResponse.json(
        { message: 'Cannot take two appointments at the same time.' },
        { status: 409 }
      );
    }

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
