"use client";

import React, { ReactNode } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

export const navbarVariants = tv({
  slots: {
    base: "",
    modalOverlay:
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    modalContent:
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-[16px] border bg-background p-[36px] shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-sm",
    modalContentClose:
      "absolute right-[16px] top-[16px] rounded-full opacity-70 text-neutral-500 hover:text-neutral-700 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-neutral-200 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
    modalHeader: "flex flex-col space-y-[6px] text-center sm:text-left",
    modalTitle: "text-lg font-semibold leading-none tracking-tight",
    modalDescription: "text-sm text-muted-foreground",
    modalFooter:
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
  },
});

const {
  modalOverlay,
  modalContent,
  modalContentClose,
  modalHeader,
  modalTitle,
  modalDescription,
  modalFooter,
} = navbarVariants();

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => (
  <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
    {children}
  </DialogPrimitive.Root>
);

const ModalTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogPrimitive.DialogTriggerProps &
    React.RefAttributes<HTMLButtonElement> & {
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
>(({ setIsOpen, ...props }, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    {...props}
    onClick={(e) => {
      setIsOpen(true);
      if (props.onClick) props.onClick(e);
    }}
  />
));
ModalTrigger.displayName = DialogPrimitive.Trigger.displayName;

const ModalPortal = DialogPrimitive.Portal;

const ModalClose = DialogPrimitive.Close;

const ModalOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={modalOverlay({ className })}
    {...props}
  />
));
ModalOverlay.displayName = DialogPrimitive.Overlay.displayName;

const ModalContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal>
    <ModalOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={modalContent({ className })}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className={modalContentClose({ className })}>
        <X className="h-[16px] w-[16px] " />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </ModalPortal>
));
ModalContent.displayName = DialogPrimitive.Content.displayName;

const ModalHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={modalHeader({ className })} {...props} />
);
ModalHeader.displayName = "ModalHeader";

const ModalFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={modalFooter({ className })} {...props} />
);
ModalFooter.displayName = "ModalFooter";

const ModalTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={modalTitle({ className })}
    {...props}
  />
));
ModalTitle.displayName = DialogPrimitive.Title.displayName;

const ModalDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={modalDescription({ className })}
    {...props}
  />
));
ModalDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalPortal,
  ModalOverlay,
  ModalClose,
  ModalTrigger,
  ModalFooter,
  ModalTitle,
  ModalDescription,
};
