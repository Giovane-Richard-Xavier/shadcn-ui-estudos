"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <main className="flex justify-between items-center w-full p-8 h-full">
      <div className="flex flex-col w-full items-center gap-4">
        <div className="flex items-center justify-between gap-2 mt-3 w-full">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>GR</AvatarFallback>
            </Avatar>
            <p className="text-[24px] font-semibold">Giovane Richard</p>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-4 w-[400px]">
          <Input placeholder="Search..." icon={FiSearch} />
          <Input placeholder="Search..." icon={HiOutlineMail} />
          <Input placeholder="Loading state" loading />
          <Input placeholder="With error" error="This field is required" />
          <Input
            placeholder="Disabled"
            error="This field is required"
            disabled
          />
        </div>
      </div>
    </main>
  );
}
