"use client";

import Image from "next/image";
import { IMAGES } from "@/public/assets/images/images";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";

const aboutItems = [
  {
    icon: "💻",
    text: "Đam mê lập trình & thiết kế UI/UX",
  },
  {
    icon: "📸",
    text: "Yêu thích nhiếp ảnh & quay phim",
  },
  {
    icon: "🎓",
    text: "Sinh viên Thiết kế Web tại ITC",
  },
  {
    icon: "🏙️",
    text: "Sống và làm việc tại TP.HCM",
  },
];

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
          <div className="mx-auto">
            <Button href="/contact">Xem Resume</Button>
          </div>

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

      <section>
        <h1 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-1 h-5 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"></span>
          Câu chuyện của tớ
        </h1>
        <p className="text-sm text-justify leading-relaxed text-gray-600 dark:text-gray-400">
          Tớ xin phép được giới thiệu nhiều hơn về bản thân nhé. Tớ hiện đang
          sống và làm việc tại TP.HCM. Tớ đang là sinh viên năm cuối của trường
          nên tớ thực hiện và làm những dự án để tốt nghiệp. Website này cũng là
          những dự án mà tớ tâm huyết nhất. Mục đích của nó dùng để giới thiệu
          về bản thân của tớ, giới thiệu về các dự án và xem dự án và học vấn
          của tớ. Cùng với đó là những hình ảnh âm nhạc và những câu chuyện của
          tớ đã trải qua và những thứ tớ đạt được trong cuộc sống. Tớ rất thích
          với việc lập trình giao diện và tớ cũng đang tự học thêm nhiều ngôn
          ngữ lập trình để làm được những website hoàn chỉnh và hiện đại, độc
          đáo hơn. Tớ muốn và hướng đên việc trở thành một Fullstack Developer
          chuyên nghiệp. Ngoài ra, tớ siêu thích quay phim, chụp ảnh luôn í.
          Kiểu như tớ muốn lưu lại những khoảnh khắc đáng nhớ, đẹp nhất, dễ
          thương nhất của tớ cùng với gia đình, người iu, bạn bè và bản thân tớ.
          Tớ muốn truyền tải với mọi nguòi những gì mà tớ thấy và những thứ đẹp
          nhất đáng yêu nhất qua góc kính nhiệm màu nhiệm màu của tớ.
        </p>
      </section>

      <section className="my-5">
        <div className="border-t border-dashed border-gray-300 dark:border-neutral-700 w-auto"></div>
      </section>

      <div className="mt-4 dark:border-gray-700">
        <h1 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
          <span className="w-1 h-5 bg-gradient-to-b from-gray-700 to-gray-500 rounded-full"></span>
          Những thú vị về tớ
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-2xl`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default AboutPage;
