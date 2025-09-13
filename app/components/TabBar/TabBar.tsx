"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ContactIcon,
  HomeIcon,
  EducationIcon,
  MusicIcon,
  PhotoIcon,
  ProjectIcon,
  UserIcon,
  WritingIcon,
} from "@/public/assets/icons/Icons";

type NavItem = {
  to: string;
  title: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const navItems: NavItem[] = [
  { to: "/", title: "Home", icon: HomeIcon },
  { to: "/about", title: "About", icon: UserIcon },
  { to: "/project", title: "Project", icon: ProjectIcon },
  { to: "/education", title: "Education", icon: EducationIcon },
  { to: "/photo", title: "Photo", icon: PhotoIcon },
  { to: "/music", title: "Music", icon: MusicIcon },
  { to: "/writing", title: "Writing", icon: WritingIcon },
  { to: "/contact", title: "Contact", icon: ContactIcon },
];

const TabBar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    const initialHeight = window.innerHeight;

    const handleResize = () => {
      const currentHeight = window.innerHeight;
      if (initialHeight - currentHeight > 150) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      setIsMounted(false);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (to: string) => {
    if (pathname !== to) {
      router.push(to);
    }
  };

  if (!showNavbar) return null;

  return (
    <nav
      className={`navbar-container fixed bottom-4 md:bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 rounded-xl 
      bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 
      p-3 shadow-md z-40 max-w-[calc(100vw-20px)] overflow-x-auto transition-all duration-500 hide-scrollbar
      ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <ul className="flex items-center justify-center gap-3 px-1 w-max">
        {navItems.map((item) => {
          const isActive = pathname === item.to;
          const IconComponent = item.icon;

          return (
            <li key={item.to} className="relative flex-shrink-0">
              <button
                onClick={() => handleNavigation(item.to)}
                aria-label={item.title}
                aria-current={isActive ? "page" : undefined}
                className={`w-11 h-11 flex items-center justify-center rounded-md transition-all duration-300 shadow-md p-2 cursor-pointer
                  ${
                    isActive
                      ? "bg-gray-300 dark:bg-neutral-300 scale-110"
                      : "bg-gray-200 dark:bg-neutral-700 hover:bg-gray-50 dark:hover:bg-neutral-600"
                  }`}
              >
                <IconComponent
                  className={`w-6 h-6 transition-colors ${
                    isActive
                      ? "text-gray-800 dark:text-neutral-800"
                      : "text-gray-600 dark:text-neutral-400"
                  }`}
                />
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full transition-opacity duration-300 
                    ${
                      isActive
                        ? "opacity-100 bg-neutral-500 dark:bg-neutral-50"
                        : "opacity-0"
                    }`}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabBar;
