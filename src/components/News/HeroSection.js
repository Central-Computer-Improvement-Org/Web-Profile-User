'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { host } from '../host';
import request from '@/app/utils/request';
import styles from './newsComponent.module.css';
import './news.css';


const HeroSection = ({ newsDatas, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="w-full text-3xl text-center text-slate-500">
          Loading...
        </div>
      ) : (
        <div className="bg-transparent">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: '.swiper-custom-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="w-full rounded-xl"
          >
            {newsDatas?.slice(0, 4).map((news) => (
              <SwiperSlide
                className="relative rounded-lg"
                key={news.id}
              >
                <Link href={`news/detailNews?id=${news.id}`}>
                  <div className={`!w-full xl:h-[700px] md:max-h-[400px] sm:max-h-[300px] sm:h-full relative max-h-[300px] ${styles.heroImage}`}>
                    <Image
                      className="object-cover w-full h-full rounded-xl"
                      width={1920}
                      height={1080}
                      src={`${host}${news.mediaUri}`}
                      alt={"Image " + news.title}
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" w-full xl:mt-[40px] md:mt-[35px] mt-[10px]" style={{ scale: '50%' }}>
            <div className="flex items-center justify-center bg-transparent">
              <div className="flex items-center justify-center mx-auto bg-transparent">
                <div className="swiper-custom-pagination flex justify-center items-center gap-[10px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;