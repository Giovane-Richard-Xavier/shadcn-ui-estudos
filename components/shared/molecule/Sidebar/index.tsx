"use client";

import { forwardRef, HTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { tv, VariantProps } from "tailwind-variants";

export const sidebarVariants = tv({
  slots: {
    base: "relative flex flex-col h-screen bg-gray-800 text-neutral-700 transition-all duration-300 dark:bg-gray-800",
    sidebarHeader: "text-lg font-bold",
    sidebarButton:
      "absolute top-16 -right-3.5 bg-white p-2 border border-neutral-300  rounded-full transition-all duration-300",
    sidebarContent: "flex items-center justify-between p-4 text-white",
    sidebarItem: "",
  },
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive:
        "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const { base, sidebarButton, sidebarHeader, sidebarContent } =
  sidebarVariants();

import { IoArrowBack } from "react-icons/io5";

interface SidebarProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  isOpen: boolean;
  toggleSidebar: () => void;
}

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   asChild?: boolean;
// }

const Sidebar = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof sidebarVariants> &
    SidebarProps
>(({ className, variant, isOpen, toggleSidebar, ...props }, ref) => (
  <div
    ref={ref}
    role="div"
    className={`${base({ variant, className })} ${isOpen ? "w-[288px]" : "w-[80px]"}`}
    {...props}
  >
    <SidebarButton
      className={sidebarButton({ className })}
      isOpen={isOpen}
      toggleSidebar={toggleSidebar}
    >
      <IoArrowBack className={`fill-blue-500 size-4 stroke-blue-500 `} />
    </SidebarButton>

    <SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <h1 className="text-lg font-bold">{isOpen ? "Admin" : "A"}</h1>
    </SidebarHeader>

    <SidebarContent isOpen={isOpen} toggleSidebar={toggleSidebar}>
      {/* <div className="relative flex items-center justify-between p-4 text-white"> */}
      {/* <h1 className="text-lg font-bold">{isOpen ? "Admin" : "A"}</h1> */}
      {/* <button
        className={`absolute top-10 -right-3.5 bg-white p-2  rounded-full transition-all duration-300 ${isOpen ? "rotate-0 " : "rotate-180"}`}
        onClick={toggleSidebar}
      >
        <IoArrowBack className={`fill-blue-500 size-4 stroke-blue-500 `} />
      </button> */}
      {/* <SidebarButton isOpen={isOpen} toggleSidebar={toggleSidebar}>
        <IoArrowBack className={`fill-blue-500 size-4 stroke-blue-500 `} />
      </SidebarButton> */}
      {/* </div> */}
      <div className="flex-1">Conteúdo do Sidebar</div>
      <div className="flex-1">Conteúdo do Sidebar</div>
    </SidebarContent>
  </div>
));
Sidebar.displayName = "Sidebar";

const SidebarContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof sidebarVariants> &
    SidebarProps
>(({ className, variant, isOpen, toggleSidebar, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={`${sidebarContent({ variant, className })} ${isOpen ? "w-[288px]" : "w-[80px]"}`}
    {...props}
  />
));
SidebarContent.displayName = "SidebarContent";

const SidebarHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof sidebarVariants> &
    SidebarProps
>(({ className, variant, isOpen, toggleSidebar, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={`${sidebarHeader({ variant, className })} ${isOpen ? "w-[288px]" : "w-[80px]"}`}
    {...props}
  />
));
SidebarHeader.displayName = "SidebarHeader";

const SidebarButton = forwardRef<HTMLButtonElement, SidebarProps>(
  ({ className, asChild = false, isOpen, toggleSidebar, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={`${sidebarContent({ className })} ${isOpen ? "rotate-0 " : "rotate-180"}`}
        ref={ref}
        {...props}
        onClick={toggleSidebar}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

export { Sidebar, SidebarContent, SidebarButton };

// export const Sidebar2 = ({ isOpen, toggleSidebar }: SidebarProps) => {
//   return (
//     <div
//       className={`flex flex-col h-screen bg-gray-800 transition-all duration-300 ${isOpen ? "w-[288px]" : "w-[80px]"}`}
//     >
//       <div className="relative flex items-center justify-between p-4 text-white">
//         <h1 className="text-lg font-bold">{isOpen ? "Admin" : "A"}</h1>
//         <button
//           className={`absolute top-10 -right-3.5 bg-white p-2  rounded-full transition-all duration-300 ${isOpen ? "rotate-0 " : "rotate-180"}`}
//           onClick={toggleSidebar}
//         >
//           <IoArrowBack className={`fill-blue-500 size-4 stroke-blue-500 `} />
//         </button>
//       </div>
//       <div className="flex-1">Conteúdo do Sidebar</div>
//     </div>
//   );
// };
