import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

export const POST = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    const { email } = params;
    const {
      foreName,
      lastName,
      dateOfBirth,
      sex,
      diagnosis,
      notes,
      phNo,
      url,
    } = await req.json();

    if (!foreName || !dateOfBirth || !sex || !diagnosis || !notes || !phNo) {
      return NextResponse.json({ message: "Missing Data" }, { status: 400 });
    }

    const name = foreName + " " + lastName;

    const newPatient = await prisma.patient.create({
      data: {
        name,
        doctorEmail: email,
        dateOfBirth,
        sex,
        diagnosis,
        notes,
        phNo,
        recordNumber: 1,
        image: url,
      },
    });

    return NextResponse.json({ patient: newPatient }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error-> ", error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    const { email } = params;
    const { id } = await req.json();
    const patient = await prisma.patient.findUnique({
      where: { id, doctorEmail: email },
      select: { recordNumber: true, id: true },
    });
    if (!patient) {
      return NextResponse.json(
        { message: "patient not found" },
        { status: 404 }
      );
    }
    const { recordNumber } = patient;
    let newRecord: number;
    switch (recordNumber) {
      case 1:
        newRecord = 2;
        break;
      case 2:
        newRecord = 3;
        break;
      default:
        newRecord = 1;
        break;
    }

    await prisma.patient.update({
      where: { id: patient.id },
      data: { recordNumber: newRecord },
    });
    return NextResponse.json(
      { message: "Status Updated Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
