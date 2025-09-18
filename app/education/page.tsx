"use client";

import React from "react";
import Image from "next/image";
import Divider from "../components/Divider/Divider";
import Header from "../components/Header/Header";

const skills = {
  frontend: [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Bootstrap",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Express.js", "MongoDB", "MySQL"],
  tools: ["Git & GitHub", "Postman", "Figma", "VS Code", "Responsive Design"],
};

const Education: React.FC = () => {
  return (
    <article>
      <Header
        name="Học vấn & Đào tạo"
        subtitle="Quá trình học tập và các skill của tớ"
      />

      {/* Education Section */}
      <section className="mb-12">
        {/* School Info */}
        <div className="text-center mb-8">
          <h2 className="font-playfair font-semibold text-2xl dark:text-white mb-2">
            TRƯỜNG CAO ĐẲNG CÔNG NGHỆ THÔNG TIN TP. HỒ CHÍ MINH
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Information Technology College HoChiMinh City
          </p>
          <div className="flex justify-center">
            <Image
              src="/thinhnguyencode/images/logo_school.png"
              alt="ITC Logo"
              width={128}
              height={128}
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 dark:text-white">Tổng quan</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Hiện tại tôi là sinh viên năm cuối chuyên ngành Thiết Kế Trang Web
            tại{" "}
            <a
              href="https://itc.edu.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Trường Cao Đẳng Công Nghệ Thông Tin TP.HCM (ITC)
            </a>
            . Với kiến thức chuyên môn về lập trình full-stack và thiết kế giao
            diện, tôi đang không ngừng nâng cao kỹ năng để sẵn sàng cho môi
            trường làm việc chuyên nghiệp.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Study Info */}
            <div>
              <h4 className="font-bold text-lg mb-3 dark:text-white border-b border-dashed border-gray-400 dark:border-neutral-400 pb-2">
                Thông tin học tập
              </h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Thời gian:</strong> 2023 - 2025
                </li>
                <li>
                  <strong>Chuyên ngành:</strong> Thiết Kế Trang Web
                </li>
                <li>
                  <strong>Loại hình đào tạo:</strong> Chính quy
                </li>
                <li>
                  <strong>Bằng cấp:</strong> Cử nhân Cao đẳng (dự kiến 7/2025)
                </li>
                <li>
                  <strong>Tình trạng:</strong> Đang theo học
                </li>
                <li>
                  <strong>GPA hiện tại:</strong> 3.34 / 4.0
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-3 dark:text-white border-b border-dashed border-gray-400 dark:border-neutral-400 pb-2">
                Liên kết
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://itc.edu.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Trang chủ trường ITC
                  </a>
                </li>
                <li>
                  <a
                    href="https://itc.edu.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Chương trình đào tạo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 dark:text-white border-b border-dashed pb-2">
            Kỹ năng đã học
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend */}
            <div>
              <h4 className="font-semibold text-lg mb-3 dark:text-white">
                Front-End Development
              </h4>
              <ul className="space-y-2">
                {skills.frontend.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h4 className="font-semibold text-lg mb-3 dark:text-white">
                Back-End & Database
              </h4>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="font-semibold text-lg mb-3 dark:text-white">
                Công cụ & Khác
              </h4>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />
    </article>
  );
};

export default Education;
