import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import styles from '@/components/projects/projects.module.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

export default function ShowcasingProjectSlider({ image, speed }) {
   return (
      <>
         {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          // startAutoplayOnFirstAction: false,
          // disableOnInteraction: false,
          waitForTransition: false,
          // pauseOnMouseEnter: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper lg:!h-[208px] md:!h-[158px] !h-[96px]"
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
      </Swiper> */}

         <div
            x-data="{}"
            x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
            className="w-full inline-flex flex-nowrap overflow-hidden "
         >
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
               {image &&
                  image.map((data, index) => (
                     <li
                        className="lg:!w-[375px] md:!w-[275px] !w-[165px] lg:!h-[208px]"
                        key={index}
                     >
                        <Image
                           width={0}
                           height={0}
                           alt="project-img"
                           src={data.imageUri}
                           className="w-full h-full  rounded-[10px]"
                        />
                     </li>
                  ))}
            </ul>
            <ul
               className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
               aria-hidden="true"
            >
               {image &&
                  image.map((data, index) => (
                     <li
                        className="lg:!w-[375px] md:!w-[275px] !w-[165px] lg:!h-[208px]"
                        key={index}
                     >
                        <Image
                           width={0}
                           height={0}
                           alt="project-img"
                           src={data.imageUri}
                           className="w-full h-full  rounded-[10px]"
                        />
                     </li>
                  ))}
            </ul>
         </div>
      </>
   );
}
