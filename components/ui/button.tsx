import Link from "next/link";
import React from "react";
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
  const baseClasses = `button relative items-center justify-center h-11 transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"}`;

  const spanClasses = "relative z-10";

  const renderButton = () => {
    return (
      <button className={`${baseClasses} ${className}`} onClick={onClick}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </button>
    );
  };

  const renderLink = () => {
    return (
      <Link className={`${baseClasses} ${className}`} href={href!}>
        <span className={spanClasses}>{children}</span>
        <ButtonSvg white={white} />
      </Link>
    );
  };

  return href ? renderLink() : renderButton();
}
