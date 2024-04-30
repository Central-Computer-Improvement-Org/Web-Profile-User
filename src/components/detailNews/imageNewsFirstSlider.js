// ImageNewsFirstSlider

'use client';
import React from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from '@/components/detailNews/imageNewsFirstSlider.module.css';

const ImageNewsFirstSlider = ({ image }) => {
  const iconArrow = (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.1602 6.49615C17.8009 5.85545 18.8397 5.85545 19.4804 6.49615L29.3242 16.3399C29.9649 16.9806 29.9649 18.0194 29.3242 18.6601L19.4804 28.5038C18.8397 29.1446 17.8009 29.1446 17.1602 28.5038C16.5195 27.8631 16.5195 26.8244 17.1602 26.1837L24.2032 19.1406H6.83594C5.92985 19.1406 5.19531 18.4061 5.19531 17.5C5.19531 16.5939 5.92985 15.8594 6.83594 15.8594H24.2032L17.1602 8.81635C16.5195 8.17564 16.5195 7.13686 17.1602 6.49615Z"
        fill="white"
      />
    </svg>
  );
  return (
    <div className={`${styles.imageNewsFirstSlider} xl:w-[902px] w-full `}>
      <Swiper
        className={`w-full xl:h-[520px] md:h-[350px] h-[200px]  xl:rounded-lg `}
        slidesPerView={1}
        pagination={{
          el: '.swiper-custom-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            if (window.innerWidth <= 600) {
              return (
                '<span class="' +
                className +
                '" style="width: 10px; height: 10px; background-color: #265290;"></span>'
              );
            } else {
              return (
                '<span class="' +
                className +
                '" style="width: 16px; height: 16px; background-color: #265290;"></span>'
              );
            }
          },
        }}
        navigation={{
          nextEl: '.next',
        }}
        modules={[Navigation, Pagination]}
      >
        {image &&
          image.map((data, index) => (
            <SwiperSlide className="cursor-pointer " key={index}>
              <div className="w-full h-full">
                <Image
                  src={data.img}
                  width={0}
                  height={0}
                  alt="banner"
                  className="w-full h-full object-cover xl:rounded-lg xl:h-[520px] "
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className=" w-full xl:mt-[15px] mt-[10px]">
        <div className="flex justify-end items-center">
          <div className="inline-block  mx-auto">
            <div className="swiper-custom-pagination " />
          </div>
          <button className="bg-bluePallete-500 text-transparent rounded-full w-16 h-16  items-center justify-center next lg:flex hidden">
            {iconArrow}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageNewsFirstSlider;
