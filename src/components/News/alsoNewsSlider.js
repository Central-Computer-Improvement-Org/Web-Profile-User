'use client'

import React, { useEffect, useState, useRef } from 'react'; // Import useRef

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/components/Home/homeComponent.module.css";
const AlsoNewsSlider = () => {

  const [newsData, setNewsData] = useState([]);
  const swiperRef = useRef(null); // Deklarasikan useRef


  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

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

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  // console.log(newsData)
  return (
    <>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: ".customButtonNext",
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}


      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <div className='border-2 bg-white border-bluePallete-500 rounded-xl overflow-hidden'>
              <Image width={90}
                height={30} src={news.media_uri} className='w-full h-56 object-cover' alt={news.media_uri} />
              <div className='border-t-2 border-bluePallete-500 p-4 flex flex-col justify-between min-h-[170px]'>
                <h3 className='font-semibold text-bluePallete-500 text-3xl'>{news.title}</h3>
                <p className='mt-6 flex-grow'>{formatDate(news.createdAt)}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={`${styles.customButtonNext} `} onClick={goNext}>
          <svg
            className="lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px]"
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

      </Swiper>


    </>

  )
}

export default AlsoNewsSlider