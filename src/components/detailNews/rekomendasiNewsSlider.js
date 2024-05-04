// ImageNewsFirstSlider

'use client';
import React, { useRef } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@/components/detailNews/rekomendasiNewsSlider.module.css';
import { FormatString } from '@/app/utils/stringUtils';
import moment from 'moment';

const RekomendasiNewsSlider = ({ newsData }) => {
  const iconArrow = (
    <svg
      className="xl:w-[55px] md:w-[40px] "
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M26.9661 10.2082C27.9729 9.20142 29.6053 9.20142 30.6121 10.2082L46.0808 25.677C47.0876 26.6838 47.0876 28.3162 46.0808 29.323L30.6121 44.7918C29.6053 45.7986 27.9729 45.7986 26.9661 44.7918C25.9592 43.7849 25.9592 42.1526 26.9661 41.1457L38.0337 30.0781H10.7422C9.31833 30.0781 8.16406 28.9239 8.16406 27.5C8.16406 26.0761 9.31833 24.9219 10.7422 24.9219H38.0337L26.9661 13.8543C25.9592 12.8474 25.9592 11.2151 26.9661 10.2082Z"
        fill="white"
      />
    </svg>
  );
  return (
    <div className="relative ">
      <Swiper
        className={` ${styles.rekomendasiNewsSwiper} rounded-[10px] xl:w-[95%] w-full !ml-0`}
        navigation={{
          nextEl: '.next',
        }}
        breakpoints={{
          // Ketika lebar layar lebih kecil dari atau sama dengan 640px
          640: {
            slidesPerView: 1, // Menampilkan satu slide per tampilan
            spaceBetween: 10, // Spasi antara slide adalah 10px
          },
          // Ketika lebar layar lebih besar dari 640px tetapi kurang dari atau sama dengan 768px
          768: {
            slidesPerView: 2, // Menampilkan dua slide per tampilan
            spaceBetween: 20, // Spasi antara slide adalah 20px
          },
          // Ketika lebar layar lebih besar dari 768px
          1024: {
            slidesPerView: 3, // Menampilkan tiga slide per tampilan
            spaceBetween: 30, // Spasi antara slide adalah 30px
          },
        }}
        modules={[Navigation]}
      >
        {newsData &&
          newsData.map((data, index) => (
            <SwiperSlide
              key={index}
              className={`cursor-pointer  xl:!mr-[39.8px] lg:!mr-[20px] md:!mr-[80px] !mr-[20px] ${styles.rekomendasiNewsCardSwiper} xl:!w-[384px] lg:!w-[300px] md:!w-[280px] !w-[200px]`}
            >
              <div className="  bg-white  rounded-[10px]">
                <div className="h-[162px] ">
                  <Image
                    src={data.mediaUri}
                    width={0}
                    height={0}
                    alt="banner"
                    className="w-full h-full object-cover rounded-t-[10px]"
                  />
                </div>
                <div className="h-full border border-mainFontColor rounded-b-[10px] p-3 flex flex-col gap-[28px] justify-between">
                  <h1 className="xl:h-[56px] md:h-[48px] xl:text-xl md:text-[16px] font-semibold text-bluePallete-800">
                    {FormatString(data.title)}
                  </h1>
                  <p className="text-sm text-mainFontColor font-medium">
                    {moment(data.createdAt).format('MMM DD[,] YYYY')}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute z-50 right-[0.8%] top-0 bottom-0 flex items-center justify-center">
        <button className="bg-bluePallete-500 text-transparent rounded-full xl:w-[100px] w-[80px] xl:h-[100px] h-[80px] flex items-center justify-center next">
          {iconArrow}
        </button>
      </div>
    </div>
  );
};

export default RekomendasiNewsSlider;
