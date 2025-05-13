// src/components/Button.tsx
"use client";

function Button({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      disabled={disabled}
      className="cursor-pointer rounded-md bg-blue-400 px-4 py-2 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
