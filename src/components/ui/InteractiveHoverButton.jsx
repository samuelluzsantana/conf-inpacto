import React from "react";
import { ChevronRight } from "lucide-react";

export const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border border-white bg-transparent p-2 px-6 text-center font-semibold text-white transition-all duration-300 hover:border-inpacto-pink hover:bg-gradient-to-r hover:from-inpacto-pink/20 hover:to-inpacto-magenta/20 ${className || ""}`}
        {...props}
      >
        <div className="flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8] group-hover:bg-inpacto-pink"></div>
          <span className="inline-block text-center text-white transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="duration-250 absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all group-hover:-translate-x-5 group-hover:opacity-100">
          <span className="text-white">{children}</span>
          <ChevronRight size={18} className="text-white" />
        </div>
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
