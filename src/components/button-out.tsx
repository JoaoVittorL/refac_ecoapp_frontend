"use client";
import { signOut } from "next-auth/react";
import { FaPowerOff } from "react-icons/fa";

const OutForm = () => {
  return (
    <FaPowerOff
      className="cursor-pointer text-red hover:text-red-600 transition-all text-2xl mb-4"
      onClick={() => signOut({ callbackUrl: "auth/login" })}
    >
      Sair
    </FaPowerOff>
  );
};

export default OutForm;
