"use client";

import React from "react";
import { Monitor, Sparkles } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="text-sm space-y-6 mt-10 mb-20 md:mb-36 md:text-left">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-100/80 to-gray-200/80 dark:from-gray-800/80 dark:to-gray-700/80 backdrop-blur-sm border border-gray-300/50 dark:border-gray-600/50 rounded-full mb-4">
          <Monitor className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
            Dùng máy tính để có trải nghiệm tốt nhất nhé
          </span>
          <Sparkles className="w-4 h-4 text-gray-600 dark:text-gray-400 animate-pulse" />
        </div>
      </div>

      <div className="text-sm space-y-1 text-gray-800 dark:text-gray-200">
        <p className="font-medium">Nguyễn Phúc Thịnh</p>
        <p>
          SĐT:{" "}
          <a href="tel:0786979877" className="hover:underline">
            07 8697 9877
          </a>
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:nguyenphucthinh2005tp@gmail.com"
            className="hover:underline"
          >
            nguyenphucthinh2005tp@gmail.com
          </a>
        </p>
        <p>Địa chỉ: 11/48 Nguyễn Văn Khối, Phường 11, Gò Vấp, TP. HCM</p>
      </div>

      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Nguyễn Phúc Thịnh. All rights reserved!
      </p>
    </footer>
  );
};

export default Footer;
