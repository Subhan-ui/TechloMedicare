import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

function formatDate(date: Date): string {
  const day = date
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2 });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export const POST = async (
  req: Request,
  { params }: { params: { email: string } }
) => {
  try {
    const { email } = params;
    const { title } = await req.json();
    const completed = false;
    const today = new Date();
    const date = formatDate(today);
    if (title.trim() === "") {
      return NextResponse.json(
        { message: "Please enter a title" },
        { status: 300 }
      );
    }
    const newTasks = await prisma.tasks.create({
      data: {
        task: title,
        completed,
        date,
        doctorEmail: email,
      },
    });
    return NextResponse.json(newTasks, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  } finally {
    await prisma.$disconnect();
  }
};
