import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const PUT = async (req: Request) => {
  try {
    const {
      id,
      firstName,
      lastName,
      dateOfBirth,
      sex,
      diagnosis,
      notes,
      phNo,
    } = await req.json();
    const patient = await prisma.patient.findUnique({
      where: { id: id },
    });
    if (!patient) {
      return NextResponse.json(
        { message: "patient not found" },
        { status: 404 }
      );
    }
    const name = firstName + " " + lastName;
    const updatedPatient = await prisma.patient.update({
        where:{id:id},
        data:{
            name,
            dateOfBirth,
            sex,
            diagnosis,
            notes,
            phNo,
        }
    })
    return NextResponse.json(updatedPatient,{status: 200})
  } catch (error) {
    NextResponse.json({message: error})
  } finally{
    await prisma.$disconnect();
  }
};
