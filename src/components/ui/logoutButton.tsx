"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { Exit } from "@/constants/react-icons";

const LogoutButton = ({ size }: { size: number }) => (
  <button
    onClick={() => {
      signOut();
    }}
  >
    <Exit size={size} color="#828282" />
  </button>
);

export default LogoutButton;
