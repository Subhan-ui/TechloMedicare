import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma'

export const GET = async(req:Request,{params}:{params:{email:string}}) =>{
    try {
        const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');
    if(!email){
        return NextResponse.json({message: 'You don\'t have an email specified.'});
    }
        const tasks = await prisma.tasks.findMany({
            where: {doctorEmail:email},
        })
        if(!tasks){
            return NextResponse.json({message: 'No Tasks found'},{status: 404})
        }
        return NextResponse.json(tasks,{status:200})
    } catch (error:any) {
        return NextResponse.json({message:error.message},{status:500})
    } finally{
        prisma.$disconnect();
    }
}