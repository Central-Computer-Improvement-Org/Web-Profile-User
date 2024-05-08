'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import styles from "@/components/Home/homeComponent.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const HeroSection = () => {

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch('/api/news');
        const data = await response.json();
        if (data && data.data) {
          setNewsData(data.data);
        }
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <Swiper

      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
        bulletClass: styles.customBullet, // tambahkan kelas kustom
        bulletActiveClass: styles.customBulletActive // tambahkan kelas kustom untuk bullet aktif
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {newsData.map((news) => (
        <SwiperSlide key={news.id}>
          <div className="relative">
            <Image className="w-full h-full object-cover rounded-xl" width={100} height={100} src={news.media_uri} alt="forest" />
            <div className="absolute inset-0 flex flex-col justify-end p-0">
              <div className="bg-black bg-opacity-30 p-6 rounded-xl">
                <h1 className="text-6xl font-bold text-white">{news.title}</h1>
                <h2 className="text-3xl font-bold text-white capitalize mt-3">Bagaimana teknologi devin mengubah cara kita hidup dan bekerja</h2>
                <p className="text-end text-white">Mar, 12, 2024</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  )
}

export default HeroSection