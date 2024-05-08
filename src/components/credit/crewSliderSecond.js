'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from '@/components/credit/credit.module.css';

const CrewSliderSecond = ({ crewDatas }) => {
  return (
    <div className={`${styles.containerSliderSecond}`}>
      {/* Pengecekan laoding disini wajib, karena untuk menghindari error fungsi navigation swiper yang membutuhkan data harus wajib ada terlebih dahulu di dalam tag Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.divisionButtonNext',
        }}
        loop={true}
        pagination={false}
        slidesPerView={1.2}
        spaceBetween={10}
        className={''}
      >
        {crewDatas &&
          crewDatas.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="xl:w-[534px] xl:h-[286px] md:w-[334px] md:h-[186px] w-[257px] h-[152px] rounded-[15px] bg-bluePallete-300 flex justify-center items-center px-[16px]">
                <div className="w-full flex xl:gap-[40px] md:gap-[10px] gap-3    ">
                  <div className="grow flex flex-col bg-red-500">
                    <div className="grow max-w-[100px] overflow-hidden">
                      <p className="xl:text-[20px] md:text-[16px] text-[15px] font-medium text-bluePallete-800">
                        Crew
                      </p>
                      <h1 className="xl:text-[40px] md:text-[28px] text-[25px] font-black text-bluePallete-800">
                        {data.name}
                      </h1>
                    </div>

                    <div className="">
                      <svg
                        className="xl:w-[60px] xl:h-[60px] md:w-[30px] md:h-[30px] w-[30px] h-[30px] "
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M45.9375 0H14.0625C6.296 0 0 6.296 0 14.0625V45.9375C0 53.704 6.296 60 14.0625 60H45.9375C53.704 60 60 53.704 60 45.9375V14.0625C60 6.296 53.704 0 45.9375 0Z"
                          fill="white"
                        />
                        <path
                          d="M45.9375 0H14.0625C6.296 0 0 6.296 0 14.0625V45.9375C0 53.704 6.296 60 14.0625 60H45.9375C53.704 60 60 53.704 60 45.9375V14.0625C60 6.296 53.704 0 45.9375 0Z"
                          fill="#0A66C2"
                        />
                        <path
                          d="M43.2926 51.0199H50.1527C50.4013 51.0199 50.6398 50.9212 50.8156 50.7454C50.9914 50.5697 51.0902 50.3313 51.0902 50.0827L51.0938 35.5884C51.0938 28.0127 49.4613 22.1897 40.6083 22.1897C37.2429 22.0645 34.0692 23.7994 32.3566 26.6962C32.3483 26.7103 32.3355 26.7213 32.3203 26.7274C32.3052 26.7336 32.2884 26.7346 32.2726 26.7303C32.2568 26.726 32.2428 26.7167 32.2328 26.7037C32.2228 26.6908 32.2173 26.6749 32.2172 26.6585V23.8266C32.2172 23.5779 32.1184 23.3395 31.9426 23.1637C31.7668 22.9878 31.5283 22.8891 31.2797 22.8891H24.7695C24.5208 22.8891 24.2824 22.9878 24.1065 23.1637C23.9307 23.3395 23.832 23.5779 23.832 23.8266V50.0812C23.832 50.3299 23.9307 50.5683 24.1065 50.7442C24.2824 50.92 24.5208 51.0187 24.7695 51.0187H31.6291C31.8778 51.0187 32.1162 50.92 32.2921 50.7442C32.4679 50.5683 32.5666 50.3299 32.5666 50.0812V37.1032C32.5666 33.4336 33.2627 29.8798 37.8122 29.8798C42.297 29.8798 42.3551 34.0788 42.3551 37.3409V50.0824C42.3551 50.3311 42.4538 50.5695 42.6297 50.7453C42.8055 50.9212 43.0439 51.0199 43.2926 51.0199ZM8.90625 13.9753C8.90625 16.7559 11.1954 19.0439 13.9763 19.0439C16.7564 19.0437 19.0441 16.7543 19.0441 13.9741C19.0437 11.194 16.7557 8.90625 13.9753 8.90625C11.1942 8.90625 8.90625 11.1947 8.90625 13.9753ZM10.5373 51.0199H17.4061C17.6547 51.0199 17.8932 50.9212 18.069 50.7453C18.2448 50.5695 18.3436 50.3311 18.3436 50.0824V23.8266C18.3436 23.5779 18.2448 23.3395 18.069 23.1637C17.8932 22.9878 17.6547 22.8891 17.4061 22.8891H10.5373C10.2886 22.8891 10.0502 22.9878 9.87435 23.1637C9.69854 23.3395 9.59977 23.5779 9.59977 23.8266V50.0824C9.59977 50.3311 9.69854 50.5695 9.87435 50.7453C10.0502 50.9212 10.2886 51.0199 10.5373 51.0199Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <Image
                    width={0}
                    height={0}
                    alt="project-img"
                    src={
                      'https://facts.net/wp-content/uploads/2023/09/19-intriguing-facts-about-model-1695803042.jpg'
                    }
                    className="max-w-[200px] max-h-[200px] xl:w-[200px] xl:h-[200px] md:w-[140px] md:h-[140px] w-[120px] h-[120px] rounded-[20px] "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CrewSliderSecond;
