"use client";

import { useState } from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Header isSidebarOpen={isSidebarOpen} />
        <main className="flex-1 flex items-center justify-center bg-neutral-100 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
