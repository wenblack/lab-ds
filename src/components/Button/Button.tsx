import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';


export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({ children, asChild, className }: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={clsx(
        "text-black text-sm font-sans font-semibold w-full bg-cyan-500 rounded py-4 px-3 text-center border-none transition-colors hover:bg-cyan-300 hover:cursor-pointer focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </Comp>
  );
}