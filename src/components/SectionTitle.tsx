import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex justify-center">
      <h2
        className={cn(
          "md:text-3xl sm:text-2xl text-xl tx text-center relative",
          className
        )}
      >
        {children}

        <div className="absolute inset-x-0 bottom-0 translate-y-0.5 h-0.5 rounded-full bg-primary" />
      </h2>
    </div>
  );
};

export default SectionTitle;
