import { NextResponse } from 'next/server';
import prisma from '../../../../../../prisma'

export const POST = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
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
    let nextDates:string = ''
    if(type==='Followup visit'){
        const existedAppointment = await prisma.appointment.findFirst({
            where:{ patientName: patientName, doctorEmail: email }
        })
        if(!existedAppointment){
            return NextResponse.json({message: 'No patient\'s appointment found of this name'})
        }
        nextDates = existedAppointment.date;
        await prisma.appointment.delete({
            where:{patientName:patientName, doctorEmail:email },
        })
    }
    const timeAppointed = await prisma.appointment.findFirst({
        where: {date: date,time: time,location:location}
    })
    if(timeAppointed){
        return NextResponse.json({message:'There is already a meeting at this time and location...'})
    }
    // await prisma.appointment.create({
    //     data:{
    //         doctorEmail:email,
    //         patientName:patientName,
    //         date:date,
    //         time:time,
    //         nextDate: nextDates,
            
    //     }
    // })

  } catch (error) {}
};
