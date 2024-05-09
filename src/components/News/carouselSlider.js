'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from "@/components/Home/homeComponent.module.css";
import Image from 'next/image';

const CarouselSlider = () => {

  const [getNews, setNews] = useState([])
  const swiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);


  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', options);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/top-read')
        const data = await response.json()
        if (data && data.data) {
          setNews(data.data)
        }
      } catch (error) {
        console.error("Error fetching news data")
      } finally {
        setIsLoading(false);
      }
    }
    fetchNews()
  }, [])

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };


  return (
    <>
      {isLoading ? ( // Tampilkan teks Loading... saat isLoading true
        <div className='w-full text-slate-500 text-3xl text-center'>Loading...</div>
      ) : (
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".customButtonNext",
            prevEl: ".customButtonPrev",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          className='h-[800px]'
        >

          {getNews.map((news) => (
            <SwiperSlide className='relative' key={news.id}>
              <div className="h-[800px] relative">
                <Image className="w-full h-full object-cover rounded-xl" layout="fill" src={news.media_uri} alt="forest" />
                <div className="absolute inset-0 flex flex-col justify-end p-0">
                  <div className="bg-black bg-opacity-30 p-6 rounded-xl">
                    <h1 className="text-6xl font-bold text-white">{news.title}</h1>
                    <h2 className="text-3xl font-bold text-white capitalize">{news.subtitle}</h2>
                    <div className="absolute top-0 right-0 bottom-0 w-1/4 p-6 bg-black bg-opacity-30">
                      <p className='text-white text-lg'>{news.description}</p>
                      <p className='text-white text-lg mt-5 text-end'>{formatDate(news.createdAt)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}




          <div className={`${styles.carouselCustomButtonNext} customButtonPrev  `} onClick={goNext}>
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
          <div className={`${styles.carouselCustomButtonPrev} customButtonNext `} onClick={goPrev}>
            <svg
              className="lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px] rotate-180"
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
      )}
    </>


  )
}

export default CarouselSlider