import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

export const Header = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between gap-2 w-full px-4 mb-4 bg-slate-900">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
        <p className="text-[24px] font-semibold">Giovane Richard</p>
      </div>
      <ThemeToggle />
    </div>
  );
};
