"use client";

import Link from "next/link";
import React from "react";

interface GradientButtonProps {
  href?: string;
  children: React.ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<GradientButtonProps> = ({
  href,
  children,
  ariaLabel,
  onClick,
  leftIcon,
  rightIcon,
}) => {
  const classes = `
    group w-max relative inline-flex items-center gap-2
    bg-gradient-to-r from-gray-800 to-gray-700
    hover:from-gray-700 hover:to-gray-600
    dark:from-gray-100 dark:to-gray-200
    dark:hover:from-white dark:hover:to-gray-100
    text-white dark:text-gray-800
    px-6 py-2.5 rounded-xl font-medium
    transition-all duration-300 ease-in-out text-base
    transform hover:scale-105 hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
  `;

  const content = (
    <>
      {leftIcon && <span className="text-lg">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="text-lg">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      aria-label={ariaLabel}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
};

export default Button;
