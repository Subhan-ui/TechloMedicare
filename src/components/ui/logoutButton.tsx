'use client'

import { signOut } from "next-auth/react";
import React from "react";
import { Exit } from "@/constants/react-icons";

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      <Exit size={24} color="#828282" />
    </button>
  );
};

export default LogoutButton;
