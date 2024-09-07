"use client";

import { signOut } from "next-auth/react";
import React from "react";

import { Exit } from "@/constants/react-icons";
import { lightSlate } from "@/constants/colors";

const LogoutButton = ({ size }: { size: number }) => (
  <button
    onClick={() => {
      signOut();
    }}
  >
    <Exit size={size} color={lightSlate} />
  </button>
);

export default LogoutButton;
