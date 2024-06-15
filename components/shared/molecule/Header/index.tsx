import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
}

export const Header = ({ isSidebarOpen }: HeaderProps) => {
  return (
    <div
      className={`h-20 flex items-center justify-between gap-2 px-4 bg-slate-800 transition-all duration-300 ${isSidebarOpen ? "ml-0" : "ml-[calc(100vw - 80px)]"}`}
    >
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>GR</AvatarFallback>
        </Avatar>
        <p className="text-[24px] font-semibold text-neutral-100">
          Giovane Richard
        </p>
      </div>
      <ThemeToggle />
    </div>
  );
};
