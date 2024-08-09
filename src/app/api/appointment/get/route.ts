import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma';

export const GET = async (req: Request, { params }: { params: { email: string } }) => {
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
      return NextResponse.json({ message: 'You have no appointments so far.' });
    }

    return NextResponse.json(appointments, { status: 200 });
  } catch (error: any) {
    if (error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  } finally {
    await prisma.$disconnect();
  }
};
