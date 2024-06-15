// import { forwardRef, HTMLAttributes } from "react";
// import { tv, VariantProps } from "tailwind-variants";

// export const sidebarVariants = tv({
//   slots: {
//     base: "flex flex-col items-center gap-[20px] w-[288px] h-full p-[20px] m-[5px] bg-neutral-100 border-dashed border-2 border-neutral-300 rounded-md",
//     sidebarContent:
//       "flex flex-col items-center justify-center w-full h-[117px] bg-blue-100 p-[10px] rounded-md",
//     sidebarItem:
//       "flex items-center justify-between bg-white border border-neutral-300 p-[10px] rounded-md w-full mb-[10px]",
//   },
//   variants: {
//     variant: {
//       default: "bg-background text-foreground",
//       destructive:
//         "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
//     },
//   },
//   defaultVariants: {
//     variant: "default",
//   },
// });

// export const { base } = sidebarVariants();

// const Sidebar = forwardRef<
//   HTMLDivElement,
//   HTMLAttributes<HTMLDivElement> & VariantProps<typeof sidebarVariants>
// >(({ className, variant, ...props }, ref) => (
//   <div
//     ref={ref}
//     role="alert"
//     className={base({ variant, className })}
//     {...props}
//   />
// ));
// Sidebar.displayName = "Sidebar";

import { IoMenu } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  return (
    <div
      className={`flex flex-col h-screen bg-slate-900 transition-all duration-300 ${isOpen ? "w-[288px]" : "w-[80px]"}`}
    >
      <div className="flex items-center justify-between p-4 text-white">
        <h1 className="text-lg font-bold">{isOpen ? "Admin" : "A"}</h1>
        <button onClick={toggleSidebar}>
          <IoMenu size={24} />
        </button>
      </div>
      <div className="flex-1">Conteúdo do Sidebar</div>
    </div>
  );
};
