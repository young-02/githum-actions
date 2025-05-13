import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  size?: "xs" | "sm" | "md";
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
};

const BASE_STYLES = "flex inline-flex items-center font-medium rounded-md px-2";
const VARIANT_STYLES = {
  primary: "bg-blue-500 text-white",
  success: "bg-green-300 text-white",
  warning: "bg-yellow-300 text-black",
  danger: "bg-red-300 text-white",
  info: "bg-sky-200 text-black",
};

const VARIANT_OUTLINED_STYLES = {
  primary: "border border-blue-500 text-blue-500 bg-transparent",
  success: "border border-green-500 text-green-500 bg-transparent",
  warning: "border border-yellow-500 text-yellow-500 bg-transparent",
  danger: "border border-red-500 text-red-500 bg-transparent",
  info: "border border-blue-400 text-blue-400 bg-transparent",
};

const SIZE_STYLES = {
  xs: "text-xs px-1.5 py-0.5",
  sm: "text-sm px-2.5 py-0.5",
  md: "text-base, px-3, py-1",
};

export default function Badge({
  children,
  variant = "primary",
  size = "sm",
  outlined,
  withDot,
  className,
}: BadgeProps) {
  const badgeClasses = clsx(
    BASE_STYLES,
    SIZE_STYLES[size],
    outlined ? VARIANT_OUTLINED_STYLES[variant] : VARIANT_STYLES[variant],
  );
  return (
    <span className={badgeClasses}>
      {withDot && <div className={className} />}
      {children}
    </span>
  );
}
