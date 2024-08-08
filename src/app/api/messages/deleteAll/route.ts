import { NextResponse } from "next/server";
import prisma from '../../../../../prisma'

export const DELETE = async (req:Request)=>{
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    try {
        if(!email){
            return NextResponse.json({message:'You need to login'})
        }
        await prisma.message.deleteMany({
            where: {email:email}
        })
        return NextResponse.json({message: 'Successfull'})
    } catch (error:any) {
        return NextResponse.json({message: error?.message})
    } finally{
        await prisma.$disconnect();
    }
}