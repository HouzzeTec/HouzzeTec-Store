import * as React from "react";
import { cn } from "@/lib/utils";

// Ya no necesitas definir TextareaProps si no añade nada nuevo

const Textarea = React.forwardRef<
  HTMLTextAreaElement, 
  React.TextareaHTMLAttributes<HTMLTextAreaElement> // <--- Usa el tipo base directamente
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };