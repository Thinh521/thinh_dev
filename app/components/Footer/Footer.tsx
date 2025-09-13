"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-sm space-y-6 mt-10 mb-20 md:mb-36 md:text-left">
      <p className="text-gray-600 dark:text-gray-400">
        Dùng máy tính để có trải nghiệm tốt nhất nhé
      </p>

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
