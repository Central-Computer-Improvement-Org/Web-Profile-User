import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Autoplay } from 'swiper/modules';

export default function ShowcasingProjectSlider({ image }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={24}
        centeredSlides={true}
        className="w-full lg:!h-[208px] md:!h-[158px] !h-[96px]"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {image &&
          image.map((data, index) => (
            <SwiperSlide
              className="lg:!w-[375px] md:!w-[275px] !w-[165px]"
              key={index}
            >
              <Image
                width={0}
                height={0}
                alt="project-img"
                src={data.imageUri}
                className="w-full h-full  rounded-[10px]"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
