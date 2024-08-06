import { NextResponse } from "next/server";
import prisma from '../../../../../prisma'

export const DELETE = async(req:Request)=>{
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    try {
        if(!id){
            return NextResponse.json({message:'Select a messgae to delete'})
        }
        await prisma.message.delete({
            where:{id:id}
        })
        return NextResponse.json({message:'Your notification message is deleted'},{status: 200})
    } catch (error:any) {
        return NextResponse.json({message: error.message}, {status: 500})
    } finally{
        await prisma.$disconnect();
    }
}   