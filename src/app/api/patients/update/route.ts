import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export const PATCH = async (req: Request) => {
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
    // if (
    //   patient.name === name ||
    //   patient.dateOfBirth === dateOfBirth ||
    //   patient.diagnosis === diagnosis ||
    //   patient.phNo === phNo
    // ) {
    //   return NextResponse.json(
    //     { message: "You changed nothing at all" },
    //     { status: 412 }
    //   );
    // }
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
    console.log(error)
    NextResponse.json({message: error})
  } finally{
    await prisma.$disconnect();
  }
};
