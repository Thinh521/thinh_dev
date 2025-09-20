"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Volume2, VolumeX, Heart } from "lucide-react";
import Image from "next/image";
import { StoriesItemData } from "@/app/types/story";

interface StoryViewerProps {
  storyList: StoriesItemData[];
  onClose: () => void;
  initialIndex?: number;
}

type LikesStore = {
  [key: string]: {
    liked: boolean;
    count: number;
  };
};

const LS_KEY = "storyLikes";

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const StoryViewer: React.FC<StoryViewerProps> = ({
  storyList,
  onClose,
  initialIndex = 0,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [startKey, setStartKey] = useState(0);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const story = storyList[currentIndex];

  // helper: key định danh story
  const getStoryKey = (s: StoriesItemData) => {
    // ưu tiên id nếu có, fallback video/image/username
    // đảm bảo là string
    return String(s.id ?? s.video ?? s.image ?? s.username ?? currentIndex);
  };

  // read store (safe)
  const readStore = (): LikesStore => {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY) || "{}") as LikesStore;
    } catch {
      return {};
    }
  };

  // write store
  const writeStore = (data: LikesStore) => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(data));
    } catch {
      // ignore
    }
  };

  // Chặn scroll khi mở story
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // Reset progress khi đổi story + load trạng thái like từ localStorage (nếu chưa có -> dùng likes trong story)
  useEffect(() => {
    if (!story) return;

    setStartKey(Date.now());

    const key = getStoryKey(story);
    const store = readStore();

    if (!store[key]) {
      const initialCount = (story as any).likes ?? 0;
      store[key] = {
        liked: false,
        count: initialCount,
      };
      writeStore(store);
    }

    setLiked(Boolean(store[key].liked));
    setLikes(Number(store[key].count));

    if (story.video) {
      const video = videoRef.current;
      if (video) {
        video.muted = isMuted;
        video.load();

        const handleLoaded = () => {
          const durationMs = video.duration * 1000;
          setDuration(durationMs);
          video.play().catch(() => {});
        };

        const handleEnded = () => {
          goNext();
        };

        video.addEventListener("loadedmetadata", handleLoaded);
        video.addEventListener("ended", handleEnded);

        return () => {
          video.removeEventListener("loadedmetadata", handleLoaded);
          video.removeEventListener("ended", handleEnded);
        };
      }
    } else if (story.image) {
      setDuration(10000);
    }
  }, [currentIndex, story, isMuted]);

  // Tự next khi hết thời gian
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        goNext();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, startKey]);

  const goNext = () => {
    if (currentIndex === storyList.length - 1) {
      onClose();
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex === 0) {
      onClose();
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    if (x < bounds.width / 2) {
      goPrev();
    } else {
      goNext();
    }
  };

  // Toggle like/unlike và cập nhật localStorage cho đúng story (không ảnh hưởng story khác)
  const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!story) return;
    const key = getStoryKey(story);
    const store = readStore();

    if (!store[key]) {
      store[key] = { liked: false, count: randomBetween(5, 500) };
    }

    if (e.shiftKey) {
      const input = prompt(
        "Nhập số like cho story này:",
        String(store[key].count)
      );
      if (input !== null && !isNaN(Number(input))) {
        store[key].count = Math.max(0, Number(input));
        writeStore(store);
        setLikes(store[key].count);
      }
      return;
    }

    if (store[key].liked) {
      store[key].liked = false;
      store[key].count = Math.max(0, store[key].count - 1);
    } else {
      store[key].liked = true;
      store[key].count = store[key].count + 1;
    }

    writeStore(store);

    setLiked(store[key].liked);
    setLikes(store[key].count);
  };

  if (!story) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div
        className="relative w-[95vw] max-w-[400px] h-[90vh] bg-black overflow-hidden"
        onClick={handleClick}
      >
        {/* Video hoặc hình ảnh */}
        {story.video ? (
          <video
            ref={videoRef}
            src={`/assets/videos/${story.video}`}
            className="w-full h-full object-contain bg-black"
            autoPlay
            playsInline
            muted={isMuted}
          />
        ) : (
          story.image && (
            <Image
              src={`/thinhnguyencode/images/${story.image}`}
              alt="story"
              fill
              className="object-contain bg-black"
            />
          )
        )}

        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-400/50 z-20 overflow-hidden">
          <div
            key={startKey}
            className="bg-white h-full"
            style={{
              width: "100%",
              transform: "translateX(-100%)",
              animation: `progressAnim ${duration}ms linear forwards`,
            }}
          />
        </div>

        {/* Username */}
        <div className="absolute top-4 left-4 text-white font-medium text-sm z-20">
          {story.username}
        </div>

        <div className="absolute top-2 right-2 flex flex-col items-center space-y-3 z-20">
          {/* Nút đóng */}
          <button
            className="text-white rounded-full p-2 bg-black/30"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nút bật/tắt âm thanh */}
          {story.video && (
            <button
              className="text-white rounded-full p-2 bg-black/30"
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted((prev) => !prev);
              }}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Nút thả tim */}
          <div className="flex flex-col items-center">
            <button
              className="text-white rounded-full p-2 bg-black/30 hover:bg-black/50 active:scale-90 transition"
              onClick={handleLike}
            >
              <Heart
                className={`w-5 h-5 ${
                  liked ? "text-red-500 fill-red-500" : ""
                }`}
              />
            </button>
            <span className="text-white text-xs mt-1">{likes}</span>
          </div>
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes progressAnim {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};

export default StoryViewer;
