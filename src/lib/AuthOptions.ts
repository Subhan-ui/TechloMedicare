import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prisma from "../../prisma";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
        });
        if (!user || !user?.id || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }
        const currentHashedPassword = await bcrypt.hash(
          credentials.password,
          12
        );
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isPasswordValid) {
          throw new Error("Incorrect Password");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
