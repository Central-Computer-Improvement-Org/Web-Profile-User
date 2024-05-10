'use client';
import React, { useEffect, useState } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './news.css';
import Image from 'next/image';
import request from '@/app/utils/request';
import { host } from '../host';
import Link from 'next/link';

const HeroSection = () => {
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
            className=" w-full rounded-xl"
          >
            {news.slice(0, 4).map((news) => (
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
          <div className=" w-full xl:mt-[25px] md:mt-[20px] mt-[10px] bg-transparent">
            <div className="flex justify-end items-center bg-transparent">
              <div className="inline-block  mx-auto bg-transparent">
                <div className="swiper-custom-pagination flex gap-[10px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
