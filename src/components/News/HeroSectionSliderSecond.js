'use client';
import React, { useState, useEffect } from 'react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './newsSecond.css';
import Image from 'next/image';
import request from '@/app/utils/request';
import { host } from '../host';
import Link from 'next/link';

const HeroSectionSliderSecond = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request
      .get('/news')
      .then(function (res) {
        if (res.data.code === 200 || res.data.code === 201) {
          setNews(res.data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? ( // Tampilkan teks Loading... saat isLoading true
        <div className="w-full text-slate-500 text-3xl text-center">
          Loading...
        </div>
      ) : (
        <div className="relative bg-transparent swiper-2">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: '.swiper-pagination',
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.gonext',
              prevEl: '.goprev',
              clickable: true,
            }}
            className=" w-full rounded-xl"
          >
            {news.map((news) => (
              <SwiperSlide
                className="relative max-h-[625px]  rounded-xl"
                key={news.id}
              >
                <Link href={`news/detailNews?id=${news.id}`}>
                  <div className="xl:h-[800px] md:h-[400px] h-[203px] relative">
                    <Image
                      className="w-full h-full object-cover rounded-xl"
                      layout="fill"
                      src={host + news.mediaUri}
                      alt="forest"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className=" w-full xl:mt-[40px] md:mt-[35px] mt-[10px] bg-red-500">
            <div className="flex justify-center items-center bg-transparent">
              <div className="flex justify-center items-center  mx-auto bg-transparent">
                <div className="swiper-pagination flex justify-center items-center gap-[10px]" />
              </div>
            </div>
          </div>
          <div className="absolute z-[1] -right-[5%] top-0 bottom-0 flex items-center justify-center">
            <div className={` cursor-pointer gonext`}>
              <svg
                className="w-full h-full max-h-[100px] max-w-[100px] sm:w-[50px] md:w-[60px] lg:w-[100px]"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="#265290" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Custom Button Prev  */}
          </div>
          <div className="absolute z-[1] -left-[5%] top-0 bottom-0 flex items-center justify-center">
            <div className={`cursor-pointer goprev`}>
              <svg
                className="w-full h-full max-h-[100px] max-w-[100px] sm:[60px] sm:w-[50px] md:w-[60px] lg:w-[100px]"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="50" fill="#265290" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.0339 67.7918C49.0271 68.7986 47.3947 68.7986 46.3879 67.7918L30.9192 52.323C29.9124 51.3162 29.9124 49.6838 30.9192 48.677L46.3879 33.2082C47.3947 32.2014 49.0271 32.2014 50.0339 33.2082C51.0408 34.2151 51.0408 35.8474 50.0339 36.8543L38.9663 47.9219H66.2578C67.6817 47.9219 68.8359 49.0761 68.8359 50.5C68.8359 51.9239 67.6817 53.0781 66.2578 53.0781H38.9663L50.0339 64.1457C51.0408 65.1526 51.0408 66.7849 50.0339 67.7918Z"
                  fill="white"
                />
              </svg>
            </div>
            {/* Custom Button Prev  */}
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSectionSliderSecond;
