"use client";

import { Header } from "@/components/shared/molecule/Header";
import { Notification } from "@/components/shared/molecule/Notification";
import { Widget } from "@/components/shared/molecule/Notification/widget";
import { Several } from "@/components/shared/molecule/Several";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { OldInput } from "@/components/ui/oldInput";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <main className="w-screen h-screen px-8">
      <div className="flex items-center justify-center mt-[100px]">
        <Widget />
      </div>
    </main>
  );
}
