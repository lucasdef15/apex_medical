import React from "react";
import Link from "next/link";
import ButtonSvg from "../svg/ButtonSvg";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  px?: string;
  white?: boolean;
}

export default function Button({
  children,
  className = "",
  href,
  onClick,
  white = false,
  px,
}: ButtonProps) {
  const baseClasses = `relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className}`;

  const spanClasses = "relative z-10";

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      <ButtonSvg white={white} />
    </button>
  );
}
