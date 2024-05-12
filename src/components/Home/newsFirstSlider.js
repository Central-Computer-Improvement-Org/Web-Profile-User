"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/id";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import request from "@/app/utils/request";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import { host } from "@/components/host";
import { dateFormater } from "@/app/utils/dateFormater";
import styles from "@/components/Home/homeComponent.module.css";

const SwiperComponent = () => {
  const previousButton = useRef(null);
  const nextButton = useRef(null);
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
    },
  };

  useEffect(() => {
    request
      .get("/news")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const formatDateData = response.data.data.map((item) => {
            // {moment(dateFormater(date)).format("MMM DD[,] YYYY")}
            const createdAt = dateFormater(item.createdAt)
            return {
              ...item,
              date: createdAt,
            };
          });
          // pengurutan data berdasarkan tanggal data terbaru
          const sortNewsData = formatDateData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          // pengambilan 5 data terbaru bedasarkan tanggal data terbaru
          const limitNewsData = sortNewsData.slice(0, 5);
          setNewsData(limitNewsData);
        } else {
          console.error(JSON.stringify(response.errors));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading
          size="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]"
          textAlignment="text-center"
        />
      ) : (
        <div className="w-full flex items-center justify-center">
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            breakpoints={{
              640: {
                slidesPerView: "auto",
                spaceBetween: 40,
              },
              768: {
                slidesPerView: "auto",
                spaceBetween: 10,
              },
            }}
            loop={true}
            pagination={pagination}
            navigation={{
              nextEl: `.${styles.newsButtonNext}`,
              prevEl: `.${styles.newsButtonPrev}`,
              clickable: true,
            }}
            centeredSlides={true}
            grabCursor={true}
            effect={"coverflow"}
            modules={[Pagination, Navigation, EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
            className="h-[400px] md:h-[600px]"
          >
            {newsData.map((data, index) => (
              <SwiperSlide key={index} className={`${styles.newsSlider}`}>
                <div
                  className={
                    index === currentSlide
                      ? `${styles.newsShowSlide}`
                      : `${styles.newsDefaultSlide}`
                  }
                >
                  {data?.mediaUri ? (
                    <Image
                      src={`${host}${data.mediaUri}`}
                      alt="News Thumbnail Central Computer Improvment"
                      width={402}
                      height={268}
                      responsive="true"
                      loading="lazy"
                      className={
                        index === currentSlide
                          ? `rounded-t-[10px] object-cover`
                          : `rounded-t-[10px] object-cover`
                      }
                    />
                  ) : (
                    <ImageNotFound
                      width={402}
                      height={268}
                      responsive="true"
                      loading="lazy"
                      className={
                        index === currentSlide
                          ? `rounded-t-[10px] object-cover`
                          : `rounded-t-[10px] object-cover`
                      }
                    />
                  )}
                  <div
                    className={
                      index === currentSlide
                        ? "w-full sm:h-[90px] md:h-auto flex flex-col space-y-5 py-[6px] px-[10px] md:py-[10px] md:px-[15px] rounded-b-[10px] border-[2px] border-[#234d87] bg-white"
                        : "w-full sm:h-[80px] md:h-[100px] lg:h-[119px] flex flex-col justify-between py-[6px] px-[10px] md:py-[6px] md:px-[10px] lg:py-[10px] lg:px-[15px] rounded-b-[10px] border-[2px] border-[#234d87] bg-white"
                    }
                  >
                    <p
                      className={
                        index === currentSlide
                          ? `font-semibold text-[15px] md:text-[20px] lg:text-[30px] leading-0 lg:leading-10 max-h-[120px] overflow-hidden text-bluePallete-800 ${styles.newsCardTitle}`
                          : `font-semibold text-[11px] md:text-[13px] lg:text-[15px] leading-0 max-h-[120px] overflow-hidden text-bluePallete-800 ${styles.newsCardTitle}`
                      }
                    >
                      {data?.title ? data.title : <TextNotFound />}
                    </p>
                    <div className="w-full flex flex-row justify-between items-end">
                      <p
                        className={
                          index === currentSlide
                            ? `font-medium sm:text-[10px] md:text-[14px] text-[#6B6B6B]`
                            : `font-medium sm:text-[8px] md:text-[12px] text-[#6B6B6B]`
                        }
                      >
                        {data?.date ? data.date : <TextNotFound />}
                      </p>
                      <p
                        className={
                          index === currentSlide
                            ? `font-bold sm:text-[12px] lg:text-[20px] sm:px-[10px] lg:px-[25px] sm:py-[5px] md:py-[5px] lg:py-[8px] rounded-[10px] text-white bg-mainPrimary`
                            : `font-bold sm:text-[8px] lg:text-[11px] sm:px-[10px] lg:px-[12px] sm:py-[3px] md:py-[5px] lg:py-[8px] rounded-[8px] text-white bg-mainPrimary`
                        }
                      >
                        <Link href={`/news/detailNews?id=${data.id}`}>
                          Load More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Button Next  */}
            <div
              ref={nextButton}
              className={`${styles.newsButtonNext} ${styles.swiperButton} cursor-pointer`}
            >
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
            <div
              ref={previousButton}
              className={`${styles.newsButtonPrev} ${styles.swiperButton} cursor-pointer`}
            >
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
          </Swiper>

          <style>
            {`
              .swiper-pagination-bullet-custom {
                  width: 20px;
                  height: 20px;
                  background-color: #265290;
                  border-radius: 50%;
              }
              @media only screen and (max-width: 1024px) {
                  .swiper-pagination-bullet-custom {
                      width: 15px;
                      height: 15px;
                      margin-bottom: 30px !important;
                  }
              }
              @media only screen and (max-width: 768px) {
                  .swiper-pagination-bullet-custom {
                      margin-bottom: 10px !important;
                  }
              }
          `}
          </style>
        </div>
      )}
    </>
  );
};

export default SwiperComponent;