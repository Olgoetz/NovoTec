import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";
import React from "react";

interface ToastMessageProps {
  children: React.ReactNode;
  status: "success" | "fail";
}

const ToastMessage = ({ children, status }: ToastMessageProps) => {
  const commonClasses =
    "mr-5 text-accent-foreground bg-green-500 text-white rounded-full p-1 shrink-0";
  return (
    <div className="flex items-center">
      {status === "success" ? (
        <Check className={cn(commonClasses, "bg-green-700")} />
      ) : (
        <X className={cn(commonClasses, "bg-destructive")} />
      )}

      <p>{children}</p>
    </div>
  );
};

export default ToastMessage;
