'use client'

import { signOut } from "next-auth/react";
import React from "react";
import { IoExitOutline } from "react-icons/io5";

const LogoutButton = () => {
  return (
    <button
      onClick={() => {
        signOut();
        
      }}
    >
      <IoExitOutline size={24} color="#828282" />
    </button>
  );
};

export default LogoutButton;
