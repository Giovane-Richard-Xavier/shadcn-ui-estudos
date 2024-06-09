import { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export function NotificationIcon({ icon: Icon }: NotificationIconProps) {
  return <Icon className="w-6 h-6 fill-violet-500 text-3xl" />;
}
