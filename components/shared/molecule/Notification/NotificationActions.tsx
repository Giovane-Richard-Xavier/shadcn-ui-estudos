import { ReactNode } from "react";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

interface NotificationActionsProps {
  children: ReactNode;
}

export function NotificationActions({ children }: NotificationActionsProps) {
  return <div className="flex gap-2 self-center">{children}</div>;
}
