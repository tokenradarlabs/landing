import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant style
   * @default "default"
   */
  variant?: "default" | "transparent";
  
  /**
   * Card content
   */
  children: React.ReactNode;
}

/**
 * CustomCard component that supports default and transparent (glassmorphism) styles
 * 
 * @example
 * ```tsx
 * // Default card
 * <CustomCard>
 *   <p>Card content here</p>
 * </CustomCard>
 * 
 * // Transparent card with glassmorphism effect
 * <CustomCard variant="transparent">
 *   <p>Card with glass effect</p>
 * </CustomCard>
 * ```
 */
export function CustomCard({
  variant = "default",
  children,
  className,
  ...props
}: CustomCardProps) {
  return (
    <Card
      className={cn(
        "p-6",
        // Apply base styles based on variant
        variant === "default" ? "bg-white" : "bg-white/10",
        // Use specific Tailwind classes mentioned in requirements for glassmorphism effect
        variant === "transparent" && "backdrop-blur-sm bg-white/10",
        variant === "transparent" && "border rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
}

export default CustomCard; 