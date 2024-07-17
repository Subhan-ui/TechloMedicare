import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

export const POST = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    const { email } = params;
    const { foreName, lastName, dateOfBirth, sex, diagnosis, notes, phNo,url } = await req.json();

    if (!foreName || !dateOfBirth || !sex || !diagnosis || !notes || !phNo) {
      return NextResponse.json({ message: 'Missing Data' }, { status: 400 });
    }

    const name = foreName+' '+lastName;
    const existedPatient = await prisma.patient.findFirst({
      where: {
        name
      }
    });

    if (existedPatient) {
      return NextResponse.json({ message: 'Patient already exists' }, { status: 409 });
    }

    const newPatient = await prisma.patient.create({
      data: {
        name,
        doctorEmail: email,
        dateOfBirth,
        sex,
        diagnosis,
        notes,
        phNo,
        recordNumber: lastName.length,
        image: url
      }
    });

    return NextResponse.json({ patient: newPatient }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Some Error Occured' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
