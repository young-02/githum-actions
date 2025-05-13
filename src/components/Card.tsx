import clsx from "clsx";

const BASE_STYLE = "overflow-hidden transition-all duration-300";

const VARIANT_STYLE = {
  default: "bg-white, border-[1px] border-gray-400",
  outlined: "bg-white border-[1px] border-gray-800",
  elevated: "bg-white shadow-sm hover:shadow-xl",
};

const PADDING_STYLE = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

const RADIUS_STYLE = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};
type CardProps = {
  children: React.ReactNode;
  variant: "default" | "outlined" | "elevated";
  padding: "none" | "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
};

export default function Card({
  variant = "default",
  padding = "sm",
  radius = "md",
  children,
}: CardProps) {
  const CardClasses = clsx(
    BASE_STYLE,
    VARIANT_STYLE[variant],
    PADDING_STYLE[padding],
    RADIUS_STYLE[radius],
  );
  return (
    <div className={CardClasses}>
      <h2 className="text-lg font-bold">제목</h2>
      <p className="text-sm text-gray-500">내용</p>
      {children}
    </div>
  );
}
