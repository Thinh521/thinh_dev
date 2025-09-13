"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HomeIcon,
  UserIcon,
  ContactIcon,
  EducationIcon,
  MusicIcon,
  PhotoIcon,
  ProjectIcon,
  WritingIcon,
} from "../../../public/assets/icons/Icons";
// import DarkModeToggle from "./DarkModeToggle";
import Loading from "../Loading/Loading";
import styles from "./TabBar.module.css";

const navItems = [
  { href: "/", title: "Home", icon: HomeIcon },
  { href: "/about", title: "About", icon: UserIcon },
  { href: "/project", title: "Project", icon: ProjectIcon },
  { href: "/education", title: "Education", icon: EducationIcon },
  { href: "/photo", title: "Photo", icon: PhotoIcon },
  { href: "/music", title: "Music", icon: MusicIcon },
  { href: "/write", title: "Writing", icon: WritingIcon },
  { href: "/contact", title: "Contact", icon: ContactIcon },
];

export default function TabBar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMounted, setIsMounted] = useState(false);
  const [loadingItem, setLoadingItem] = useState<string | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);

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
      setLoadingItem(to);
      setTimeout(() => {
        router.push(to);
        setLoadingItem(null);
      }, 300);
    }
  };

  if (!showNavbar) return null;

  return (
    <nav
      className={`${
        styles["navbar-container"]
      } fixed bottom-0 left-0 right-0 bg-white dark:bg-neutral-900 shadow-md transition-all ${
        isMounted ? styles["navbar-visible"] : styles["navbar-hidden"]
      }`}
    >
      <ul className="flex items-center justify-center gap-4 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isLoading = loadingItem === item.href;
          const Icon = item.icon;

          return (
            <li key={item.href} className="flex-shrink-0 relative">
              <button
                onClick={() => handleNavigation(item.href)}
                aria-label={item.title}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center px-3 py-1 rounded-md ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <div className="h-6 w-6 flex items-center justify-center">
                  {isLoading ? (
                    <Loading />
                  ) : (
                    <Icon
                      className={`w-6 h-6 ${
                        isActive ? "fill-blue-600" : "fill-gray-500"
                      }`}
                    />
                  )}
                </div>
                <span
                  className={`mt-1 text-xs ${
                    isActive ? "font-bold" : "font-normal"
                  }`}
                >
                  {item.title}
                </span>
              </button>
            </li>
          );
        })}
        {/* <li>
          <DarkModeToggle />
        </li> */}
      </ul>
    </nav>
  );
}
