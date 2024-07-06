import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma';

export const GET = async (req:Request,{ params }: { params: { email: string } }) => {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ message: 'No email specified.' }, { status: 400 });
    }
    const appointments = await prisma.appointment.findMany({
      where: { doctorEmail: email },
    });

    if (appointments.length === 0) {
      return NextResponse.json({ message: 'You have no appointments so far.' }, { status: 404 });
    }

    return NextResponse.json(appointments, { status: 200 }); // Use status 200 for successful retrieval
  } catch (error: any) {
    console.error(error);

    // Implement specific error handling based on Prisma errors
    if (error) {
      // Handle specific Prisma errors (e.g., validation errors)
      return NextResponse.json({ message: error.message }, { status: 400 }); // Use appropriate status code
    } else {
      // Handle other errors (e.g., database connection issues)
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  } finally {
    await prisma.$disconnect();
  }
};
