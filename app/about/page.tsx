"use client";

import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/public/assets/images/images";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Header from "../components/Header/Header";

const AboutPage = () => {
  return (
    <article>
      <Header
        name="Giới thiệu"
        subtitle="Một chút thú vị về tớ và những điều lớn lao"
      />

      <section className="flex justify-center">
        <div className="text-center my-2">
          <Image
            src={IMAGES.avatar}
            alt="Avatar"
            width={192}
            height={192}
            className="w-48 h-48 mx-auto mb-4 rounded-full object-cover"
          />
          <div className="flex justify-center items-center gap-3 mb-2">
            <h1 className="font-playfair text-xl font-bold text-gray-800 dark:text-white">
              Nguyễn Phúc Thịnh
            </h1>
          </div>
          <p className="text-sm mb-5">Mobile App Developer • Freelancer</p>
        </div>
      </section>

      <section className="mb-6">
        <div className="flex flex-col gap-6">
          <Link
            href="/cv"
            className="group w-max relative inline-flex items-center gap-2 mx-auto
              bg-gradient-to-r from-gray-800 to-gray-700 
              hover:from-gray-700 hover:to-gray-600
              dark:from-gray-100 dark:to-gray-200
              dark:hover:from-white dark:hover:to-gray-100
              text-white dark:text-gray-800 
              px-6 py-2.5 rounded-xl font-medium
              transition-all duration-300 ease-in-out text-base
              transform hover:scale-105 hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Xem CV của tôi"
          >
            <span className="text-sm">Resume</span>
          </Link>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600"></div>

          <div className="flex-1">
            <h1 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"></span>
              Kết nối với tớ
            </h1>
            <SocialLinks />
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="border-t border-dashed border-gray-300 dark:border-neutral-700 w-auto"></div>
      </section>

      {/* Story */}
      <section>
        <h1 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-1 h-5 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"></span>
          Câu chuyện của tớ
        </h1>
        <p className="text-sm text-justify">
          Tớ xin phép được giới thiệu nhiều hơn về bản thân nhé. Tớ hiện đang
          sống và làm việc tại TP.HCM. Tớ đang là sinh viên năm cuối...
        </p>
      </section>

      <section className="my-5">
        <div className="border-t border-dashed border-gray-300 dark:border-neutral-700 w-auto"></div>
      </section>

      {/* Fun Facts */}
      <div className="mt-4 dark:border-gray-700">
        <h1 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-1 h-5 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"></span>
          Những thú vị về tớ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <span className="text-xl">💻</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Đam mê lập trình & thiết kế UI/UX
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <span className="text-xl">📸</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Yêu thích nhiếp ảnh & quay phim
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <span className="text-xl">🎓</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Sinh viên Thiết kế Web tại ITC
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
            <span className="text-xl">🏙️</span>
            <span className="text-sm text-gray-700 dark:text-gray-300">
              Sống và làm việc tại TP.HCM
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutPage;
