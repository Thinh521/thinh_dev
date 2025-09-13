"use client";

import { motion } from "framer-motion";

export default function Loading({ color }: { color?: string }) {
  const strokeColor = color || "var(--active)";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center"
    >
      <svg
        className="loader"
        viewBox="0 0 384 384"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="track"
          pathLength="360"
          fill="transparent"
          stroke="#eaeaea"
          strokeWidth="32"
          cx="192"
          cy="192"
          r="176"
        />
        <circle
          className="active"
          pathLength="360"
          fill="transparent"
          stroke={strokeColor}
          strokeWidth="32"
          cx="192"
          cy="192"
          r="176"
        />
      </svg>
    </motion.div>
  );
}
