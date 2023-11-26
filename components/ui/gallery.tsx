"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
  FreeMode,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Image from "next/image";
import { useState } from "react";

export const Gallery = ({ reference }: { reference: any }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#D01516" as string,
            "--swiper-pagination-color": "#D01516" as string,
          } as any
        }
        modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs, FreeMode]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        pagination={{ clickable: true }}
        className="h-[550px] w-full rounded-lg"
      >
        {reference.fields.photos.map((el: any) => (
          <SwiperSlide
            key={el.fields.file.url}
            className="flex justify-center items-center"
          >
            <Image
              fill
              className="block h-full w-full object-cover"
              src={`https:${el.fields.file.url}`}
              alt={el.fields.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail */}
      <Swiper
        onSwiper={setThumbsSwiper as any}
        loop={true}
        spaceBetween={12}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs, FreeMode]}
        className="thumbs h-24 mt-4 flex items-center justify-center cursor-pointer rounded overflow-hidden"
      >
        {reference.fields.photos.map((el: any) => (
          <SwiperSlide key={el.fields.file.url}>
            <Image
              fill
              className="block h-full w-full object-cover "
              src={`https:${el.fields.file.url}`}
              alt={el.fields.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
