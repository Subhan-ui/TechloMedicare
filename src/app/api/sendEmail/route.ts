import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import prisma from "../../../../prisma";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ message: "No User Found" }, { status: 400 });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification",
      html: `
        <p>You can reset your password by clicking on this link: 
        <a href="https://techlo-medicare.vercel.app/reset-password/${user.id}" target='_blank'>
          Reset Password
        </a></p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: `Email sent: ${info.response}` },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
