"use client";

import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <div
      className={`border-t border-dashed border-gray-300 dark:border-neutral-700 w-auto ${className}`}
    />
  );
};

export default Divider;
