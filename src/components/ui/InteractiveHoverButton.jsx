import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

export const InteractiveHoverButton = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative w-auto cursor-pointer overflow-hidden rounded-full border border-white bg-transparent p-1.5 px-3 text-center text-[0.65rem] font-semibold text-white transition-all duration-300 hover:border-inpacto-pink hover:bg-gradient-to-r hover:from-inpacto-pink/20 hover:to-inpacto-magenta/20 md:p-2 md:px-4 md:text-[0.7rem] xl:px-6 xl:text-xs ${className || ""}`}
        {...props}
      >
        <div className="flex items-center justify-center gap-1.5 md:gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-white transition-all duration-300 group-hover:scale-[100.8] group-hover:bg-inpacto-pink md:h-2 md:w-2"></div>
          <span className="inline-block whitespace-nowrap text-center text-white transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
            {children}
          </span>
        </div>
        <div className="duration-250 absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-1.5 text-white opacity-0 transition-all group-hover:-translate-x-5 group-hover:opacity-100 md:gap-2">
          <span className="whitespace-nowrap text-white">{children}</span>
          <ChevronRight size={14} className="text-white md:hidden" />
          <ChevronRight
            size={16}
            className="hidden text-white md:block xl:hidden"
          />
          <ChevronRight size={18} className="hidden text-white xl:block" />
        </div>
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";

InteractiveHoverButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
