import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant style
   * @default "default"
   */
  variant?: "default" | "transparent" | "primary" | "secondary" | "accent";
  
  /**
   * Optional click handler
   */
  onClick?: () => void;
  
  /**
   * Optional icon shown on the right side
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Optional icon shown on the left side
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * CustomButton component that supports different variants and optional icons
 * 
 * @example
 * ```tsx
 * // Default button
 * <CustomButton>Click me</CustomButton>
 * 
 * // Transparent button
 * <CustomButton variant="transparent">Click me</CustomButton>
 * 
 * // With icons
 * <CustomButton leftIcon={<Icon />} rightIcon={<Icon />}>Click me</CustomButton>
 * ```
 */
export function CustomButton({
  variant = "default",
  onClick,
  rightIcon,
  leftIcon,
  children,
  className,
  ...props
}: CustomButtonProps) {
  const buttonClasses = {
    'default': 'bg-black text-white',
    'transparent': 'bg-transparent border-2 hover:bg-transparent hover:opacity-80',
    'primary': 'bg-primary text-white hover:bg-primary-dark',
    'secondary': 'bg-secondary text-white hover:bg-secondary-dark',
    'accent': 'bg-accent text-white hover:bg-accent-dark'
  };
  
  return (
    <Button
      variant={variant === "transparent" ? "outline" : "default"}
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-2",
        buttonClasses[variant],
        className
      )}
      {...props}
    >
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </Button>
  );
}

export default CustomButton; 