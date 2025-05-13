import clsx from "clsx";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  id,
  type,
  placeholder,
  label,
  error,
  size,
  variant,
  fullWidth,
  disabled,
  className,
  onChange,
}: InputProps) {
  const inputClasses = clsx(
    "rounded-md focus:outline-none focus:ring-2 transition-all border w-full",
    //size
    {
      "p-2 text-sm": size === "sm",
      "p-3 text-md": size === "md",
      "p-4 text-lg": size === "lg",
    },

    //variant
    {
      "border-[1px] bg-white border-gray-300": variant === "default",
      "bg-gray-100": variant === "filled",
      "border-[1px] border-gray-800": variant === "outlined",
    },
    //error
    {
      "border-red-500": error,
    },

    //fullWidth
    { "w-full": fullWidth },
  );
  return (
    <div className={className}>
      <label htmlFor={id} className={error && `text-red-500`}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={inputClasses}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
