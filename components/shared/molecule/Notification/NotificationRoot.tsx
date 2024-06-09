import { ReactNode } from "react";

interface NotificationRootProps {
  children: ReactNode;
}

export const NotificationRoot = ({ children }: NotificationRootProps) => {
  return (
    <div className="flex items-start gap-6 px-8 py-4 bg-zinc-200 dark:bg-slate-700">
      {children}
    </div>
  );
};
