import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";

type TErrorMessage = {
  title?: string;
  error?: string;
};

export const ErrorMessage = ({ title = "ERRO", error }: TErrorMessage) => {
  return (
    <Alert className="bg-yellow-200">
      <div className="flex flex-col gap-4 divide-y-0 w-full">
        <div className="flex items-center gap-4">
          <FiAlertTriangle className="text-4xl text-red-400" />
          <AlertTitle className="text-red-400">{title}</AlertTitle>
        </div>
        <AlertDescription className="text-[16px]">{error}</AlertDescription>
      </div>
    </Alert>
  );
};
