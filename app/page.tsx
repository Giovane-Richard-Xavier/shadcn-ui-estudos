"use client";

import { ErrorMessage } from "@/components/shared/atom/ErrorMessage";
import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon, Terminal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  // for (const i of list) {
  //   console.log(i.toString());
  // }

  // list.forEach((item) => console.log(item));
  // const novaList = list.map((item) => console.log(item));

  // console.log("novaList->", novaList);

  return (
    <main className="flex justify-between items-center w-full p-8 h-full">
      <div className="flex items-center gap-2 mt-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
        <p className="text-[24px] font-semibold">Giovane Richard</p>
      </div>

      <ThemeToggle />
    </main>
  );
}
