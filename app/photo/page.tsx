"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header/Header";
import StoryViewer from "../components/StoryViewer/StoryViewer";

import photoData from "../data/photoData";
import storiesData from "../data/storiesData";
import { StoriesItemData } from "../types/story";

export default function PhotoPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const handleStoryClick = (index: number) => {
    setStartIndex(index);
    setOpen(true);
  };

  return (
    <article className="dark:bg-neutral-900 dark:text-white">
      <Header
        name="Ảnh chụp & tin nổi bật"
        subtitle="Những bức ảnh mà tôi tự chụp qua ống kính nhiệm màu."
      />

      <section className="space-y-8">
        {/* Stories Section */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Tin nổi bật
          </h2>
          <div className="relative overflow-x-auto pb-2 scrollbar-hide hide-scrollbar">
            <div className="flex min-w-max space-x-4">
              {storiesData.map((story: StoriesItemData, index: number) => (
                <button
                  key={story.id}
                  onClick={() => handleStoryClick(index)}
                  className="flex w-20 flex-shrink-0 cursor-pointer flex-col items-center space-y-2"
                >
                  <div className="relative">
                    <div className="group h-16 w-16 overflow-hidden rounded-full border-2 border-gray-400 p-0.5 dark:border-neutral-400">
                      <video
                        src={`/assets/videos/${story.video}`}
                        className="h-full w-full rounded-full object-cover"
                        muted
                        playsInline
                        preload="metadata"
                        disablePictureInPicture
                        controls={false}
                        onLoadedMetadata={(e) => {
                          const videoEl = e.currentTarget;
                          videoEl.currentTime = 0.001;
                          videoEl.pause();
                        }}
                      />
                    </div>
                  </div>
                  <p className="w-full truncate text-center text-xs text-gray-600 dark:text-gray-300">
                    {story.username}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photos Section */}
        <div>
          <h2 className="mb-4 text-xl font-semibold text-gray-800 dark:text-white">
            Ảnh chụp
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
            {photoData.map((photo) => (
              <Link
                key={photo.id}
                href={`/photo-detail/${photo.id}`}
                className="relative group block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:border-gray-300 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={photo.images[0]}
                    alt={photo.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 z-10 p-2 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                  <p className="truncate font-medium text-xs text-white">
                    {photo.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story Viewer */}
      {open && (
        <StoryViewer
          storyList={storiesData}
          onClose={() => setOpen(false)}
          initialIndex={startIndex}
          key={startIndex}
        />
      )}
    </article>
  );
}
