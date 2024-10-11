import prisma from "../../../../../prisma";
import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({
        message: "wasn't able to find id of teh selected task",
      });
    }
    await prisma.tasks.delete({
      where: { id: id },
    });
    return NextResponse.json({ message: "Deleted Successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
