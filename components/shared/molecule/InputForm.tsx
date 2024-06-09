import { Input } from "@/components/ui/input";
import React from "react";

export const InputForm = () => {
  return (
    <div className="space-y-4 max-w-lg">
      <Input type="email" placeholder="Email..." />
      <p className="invisible peer-invalid:visible text-pink-600 text-sm">
        Please provide a valid email address.
      </p>

      <Input type="file" placeholder="Email..." accept=".pdf .doc" />
      <Input type="email" disabled placeholder="Email..." />
      <input
        type="email"
        placeholder="Email..."
        className="px-4 border-2 border-transparent border-b-neutral-500 w-full bg-transparent focus:border-b-blue-500 focus:h-[40px] focus:bg-slate-800 transition-colors outline-none"
      />

      <svg
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 animate-spin"
      >
        <circle
          cx="400"
          cy="400"
          fill="none"
          r="159"
          stroke-width="30"
          stroke="#21ad57"
          stroke-dasharray="885 1400"
          stroke-linecap="round"
          stroke-dashoffset="0"
        />
      </svg>
    </div>
  );
};
