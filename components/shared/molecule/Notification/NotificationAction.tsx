import { ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface NotificationActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
}

export function NotificationAction({
  icon: Icon,
  ...rest
}: NotificationActionProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "text-[12px] text-white p-2 rounded-sm bg-gray-500 hover:bg-gray-400",
        rest.className,
      )}
    >
      <Icon className="w-3 h-3" />
    </button>
  );
}
