import { NextResponse } from 'next/server';
import prisma from '../../../../../../prisma'

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;
    const { checked } = await req.json();
    const task = await prisma.tasks.findFirst({
        where: {id:id},
    })
    if(!task){
        return NextResponse.json({message: 'Task not found'});
    }
    const updatedTask = await prisma.tasks.update({
        where: {id: id},
        data: {
            completed:checked,
        }
    })
    return NextResponse.json(updatedTask,{status: 200})
  } catch (error:any) {
    console.log(error)
    return NextResponse.json({message: error.message},{status: 500})
  } finally{
    await prisma.$disconnect()
  }
};
