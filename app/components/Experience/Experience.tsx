"use client";

import { IMAGES } from "@/public/assets/images/images";
import Image from "next/image";
import React, { memo, useCallback, useState } from "react";
import Button from "../Button/Button";

// Helper components with refined icons
const ChevronDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </svg>
);
const Palette = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

// Shadcn-style Badge component
const Badge = ({
  children,
  className = "",
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "secondary" | "outline";
}) => {
  const variants = {
    default:
      "bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
    secondary:
      "bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
    outline:
      "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-800 dark:hover:bg-slate-800",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

// --- TYPES ---
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface TimelineLink {
  label: string;
  url: string;
}

interface TimelineItemData {
  id: string;
  title: string;
  type: string;
  duration: string;
  images: string;
  icon: IconType;
  responsibilities: string[];
  skills: string[];
  links?: TimelineLink[];
}

type ExpandMode = "multi" | "single";

interface ProfessionalTimelineProps {
  data: TimelineItemData[];
  defaultExpandedIds?: string[];
  expandMode?: ExpandMode;
}

const timelineData: TimelineItemData[] = [
  {
    id: "prof-exp-1",
    title: "Senior Frontend Developer",
    type: "Full-time",
    duration: "10.2024—Present",
    images: "project_1",
    icon: Code,
    responsibilities: [
      "Xây dựng website giới thiệu nhà hàng với HTML, CSS và JavaScript, tập trung vào giao diện trực quan và thân thiện với người dùng.",
      "Thiết kế giao diện responsive, đảm bảo trải nghiệm tốt trên cả máy tính và thiết bị di động.",
      "Học cách quản lý và tối ưu mã nguồn, tuân thủ các tiêu chuẩn về HTML semantic và CSS hiện đại.",
    ],
    skills: ["HTML, CSS", "JavaScript"],
    links: [
      {
        label: "Xem Github",
        url: "https://github.com/Thinh521/Restaurant_Frontend",
      },
      {
        label: "Xem Dự án",
        url: "https://thinh521.github.io/Restaurant_Frontend/",
      },
    ],
  },
  {
    id: "prof-exp-2",
    title: "Senior Frontend Developer",
    type: "Full-time",
    duration: "10.2022—Present",
    images: "project_2",
    icon: Palette,
    responsibilities: [
      "Xây dựng website giới thiệu các khóa học trực tuyến bằng HTML, CSS và JavaScript, tập trung vào giao diện rõ ràng và dễ tiếp cận cho người học.",
      "Thiết kế giao diện responsive, đảm bảo hiển thị tốt trên cả máy tính và thiết bị di động để nâng cao trải nghiệm học tập.",
      "Rèn luyện kỹ năng quản lý và tối ưu mã nguồn, áp dụng HTML semantic và các kỹ thuật CSS hiện đại nhằm tăng tính chuẩn hóa và dễ bảo trì.",
    ],
    skills: ["HTML, CSS", "JavaScript", "Figma"],
    links: [
      {
        label: "Xem Github",
        url: "https://github.com/Thinh521/TuHoc_Clone",
      },
      {
        label: "Xem Dự án",
        url: "https://thinh521.github.io/TuHoc_Clone/",
      },
    ],
  },
  {
    id: "prof-exp-3",
    title: "Mobile App Developer (React Native)",
    type: "Full-time",
    duration: "03.2021—09.2022",
    images: "project_1",
    icon: Code,
    responsibilities: [
      "Phát triển ứng dụng di động thống kê và quản lý thị trường nông sản bằng React Native, đảm bảo giao diện trực quan và hiệu năng ổn định.",
      "Tích hợp AI để phân tích dữ liệu thị trường, dự đoán xu hướng cung cầu và biến động giá cả.",
      "Xây dựng hệ thống xử lý Big Data để thu thập và quản lý lượng lớn dữ liệu về sản xuất, tiêu thụ và giá nông sản.",
      "Thiết kế và triển khai dashboard báo cáo, cung cấp thông tin trực quan về các vùng trồng trọt, mùa vụ và tình hình thị trường.",
      "Phát triển hệ thống cảnh báo khi có biến động lớn về cung cầu hoặc giá cả, hỗ trợ nhà quản lý đưa ra quyết định kinh doanh kịp thời.",
      "Phối hợp cùng team theo mô hình Agile, từ giai đoạn thu thập dữ liệu, xây dựng mô hình AI cho đến kiểm thử và triển khai phiên bản beta.",
    ],
    skills: [
      "React Native",
      "JavaScript",
      "AI/ML",
      "Big Data",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: [
      {
        label: "Xem Github",
        url: "https://github.com/Thinh521/Pione_Farm",
      },
      {
        label: "Xem Dự án",
        url: "https://github.com/Thinh521/Pione_Farm",
      },
    ],
  },
  {
    id: "prof-exp-4",
    title: "Mobile App Developer (React Native)",
    type: "Full-time",
    duration: "03.2021—09.2022",
    images: "project_2",
    icon: Code,
    responsibilities: [
      "Phát triển ứng dụng di động truy xuất nguồn gốc nông sản bằng React Native, đảm bảo giao diện trực quan và dễ sử dụng cho nhà phân phối và người tiêu dùng.",
      "Tích hợp công nghệ Blockchain để lưu trữ dữ liệu nguồn gốc, đảm bảo tính minh bạch và không thể thay đổi.",
      "Xây dựng và triển khai Smart Contracts để tự động hóa quy trình xác nhận nguồn gốc và kiểm tra tính hợp lệ của sản phẩm.",
      "Phát triển tính năng quét mã QR/nhập mã sản phẩm, hiển thị chi tiết về quá trình trồng trọt, thu hoạch, vận chuyển và chứng nhận chất lượng.",
      "Thiết kế hệ thống cảnh báo khi phát hiện dấu hiệu giả mạo hoặc sai lệch thông tin nguồn gốc.",
      "Phối hợp nhóm theo mô hình Agile, tham gia từ giai đoạn thiết kế giao diện, phát triển tính năng đến kiểm thử và triển khai bản beta.",
    ],
    skills: [
      "React Native",
      "JavaScript",
      "Blockchain",
      "Smart Contracts / Web3",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    links: [
      {
        label: "Xem Github",
        url: "https://github.com/Thinh521/Blockchain_Farm",
      },
      {
        label: "Xem Dự án",
        url: "https://github.com/Thinh521/Blockchain_Farm",
      },
    ],
  },
  {
    id: "prof-exp-5",
    title: "Mobile App Developer (React Native)",
    type: "Full-time",
    duration: "03.2021—09.2022",
    images: "project_1",
    icon: Code,
    responsibilities: [
      "Phát triển ứng dụng mua sắm quần áo bằng React Native, xây dựng giao diện trực quan và thân thiện với người dùng.",
      "Xây dựng các tính năng chính: danh mục sản phẩm, tìm kiếm, giỏ hàng, thanh toán và quản lý đơn hàng.",
      "Tích hợp API backend để lấy dữ liệu sản phẩm, xử lý đăng nhập/đăng ký và quản lý thông tin người dùng.",
      "Thiết kế giao diện responsive, tối ưu trải nghiệm trên cả Android và iOS.",
      "Tối ưu hiệu năng ứng dụng, xử lý state management cho giỏ hàng và luồng đặt hàng.",
      "Làm việc theo mô hình Agile, phối hợp với team trong suốt quá trình phát triển và triển khai.",
    ],
    skills: [
      "React Native",
      "JavaScript",
      "REST API",
      "State Management",
      "UI/UX",
      "Figma",
    ],
    links: [
      {
        label: "Xem Github",
        url: "https://github.com/Thinh521/Fashion_Shop_App",
      },
      {
        label: "Xem Dự án",
        url: "https://github.com/Thinh521/Fashion_Shop_App",
      },
    ],
  },
];

// --- COMPONENTS ---
interface TimelineItemContentProps {
  item: TimelineItemData;
}

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: TimelineItemContentProps) {
  return (
    <div className="mt-6 space-y-6 animate-in slide-in-from-top-1 duration-200">
      {/* Images */}
      <Image
        src={IMAGES[item.images]}
        alt={item.title}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className="object-contain"
      />

      {/* Responsibilities */}
      <div className="space-y-3">
        {item.responsibilities.map((responsibility, idx) => (
          <div
            key={`${item.id}-resp-${idx}`}
            className="flex items-start gap-3 group"
          >
            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-slate-600 dark:bg-slate-500 dark:group-hover:bg-slate-400 transition-colors duration-200" />
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {responsibility}
            </p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
        {item.skills.map((skill, skillIdx) => (
          <Badge key={`${item.id}-skill-${skillIdx}`} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>

      {item.links && item.links.length > 0 && (
        <div className="flex gap-4">
          {item.links.map((link, idx) => (
            <Button
              key={`${item.id}-link-${idx}`}
              href={link.url}
              className="flex-1 text-center"
            >
              {link.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
});
TimelineItemContent.displayName = "TimelineItemContent";

interface TimelineItemProps {
  item: TimelineItemData;
  expanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon;
  const headerId = `timeline-header-${item.id}`;
  const contentId = `timeline-content-${item.id}`;

  return (
    <div className="relative group">
      {/* Connecting line with gradient - now always visible */}
      <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-gradient-to-b from-black via-gray-500 to-white dark:from-white dark:via-gray-400 dark:to-black" />

      {/* Timeline node */}
      <div className="absolute left-4 top-6 w-4 h-4 bg-white dark:bg-slate-950 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center transform transition-all duration-200 z-10">
        <div className="w-2 h-2 bg-slate-900 dark:bg-slate-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>

      {/* Main content card */}
      <div className="ml-12 mb-8">
        <div
          className={`
          bg-white dark:bg-slate-950 
          rounded-lg border border-slate-200 dark:border-slate-800 
          transition-all duration-200
          ${expanded ? "shadow-sm" : "shadow-none hover:shadow-sm"}
        `}
        >
          {/* Header */}
          <button
            id={headerId}
            className="w-full text-left p-6 group/button cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors duration-200 rounded-t-lg"
            onClick={() => onToggle(item.id)}
            aria-expanded={expanded}
            aria-controls={contentId}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md">
                    <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 ml-11">
                  <Badge variant="outline" className="text-xs">
                    {item.type}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.duration}
                  </span>
                </div>
              </div>

              <div
                className={`
                text-slate-400 dark:text-slate-600 
                transition-transform duration-200
                ${expanded ? "rotate-180" : ""}
              `}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </button>

          {/* Expandable content */}
          {expanded && (
            <div
              id={contentId}
              role="region"
              aria-labelledby={headerId}
              className="px-6 pb-6 border-t border-slate-100 dark:border-slate-900"
            >
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
TimelineItem.displayName = "TimelineItem";

// --- MAIN TIMELINE ---
export function ProfessionalTimeline({
  data,
  defaultExpandedIds,
  expandMode = "multi",
}: ProfessionalTimelineProps) {
  const initial = defaultExpandedIds ?? data.map((item) => item.id);
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set(initial));

  const onToggle = useCallback(
    (id: string) => {
      setExpanded((prev) => {
        const next = new Set(prev);
        if (expandMode === "single") {
          return prev.has(id) ? new Set() : new Set([id]);
        }
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    },
    [expandMode]
  );

  return (
    <div className="relative">
      {data.map((item, index) => (
        <TimelineItem
          key={item.id}
          item={item}
          expanded={expanded.has(item.id)}
          onToggle={onToggle}
          index={index}
        />
      ))}
    </div>
  );
}

export default function TimelinePage2() {
  return <ProfessionalTimeline data={timelineData} expandMode="multi" />;
}
