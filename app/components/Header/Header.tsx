"use client";

import React from "react";
import Divider from "../Divider/Divider";

interface HeaderProps {
  name: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({ name, subtitle }) => {
  return (
    <>
      <header className="text-center mb-5">
        <h1 className="font-playfair text-3xl font-bold mb-3 text-gray-900 dark:text-white tracking-tight text-left">
          {name}
        </h1>
        <p className="text-sm text-left">{subtitle}</p>
      </header>

      <section className="mb-5">
        <Divider />
      </section>
    </>
  );
};

export default Header;
