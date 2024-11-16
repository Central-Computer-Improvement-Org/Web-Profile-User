"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { host } from "@/components/host";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import styles from "@/components/Home/homeComponent.module.css";


const NewsSecondSlider = ({ newsData, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <Loading
          size="w-[70px] h-[70px] mb-10 sm:w-[150px] sm:h-[150px]"
          textAlignment="text-center pt-5"
        />
      ) : (
        <Swiper
          slidesPerView={1.2}
          spaceBetween={0}
          pagination={false}
          centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            340: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            355: {
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            365: {
              slidesPerView: 1.4,
              spaceBetween: 10,
            },
            390: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            416: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            458: {
              slidesPerView: 1.7,
              spaceBetween: 0,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            560: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination]}
          className={"w-full h-[290px]"}
        >
          {newsData?.map((data, index) => (
            <SwiperSlide
              key={index}
              className="px-1 !flex !justify-start !items-center !flex-col"
            >
              <Link href={`/news/detailNews?id=${data.id}`}>
                <div className="w-[222px] h-[242px]">
                  {data?.mediaUri ? (
                    <Image
                      width={222}
                      height={152}
                      src={`${host}${data.mediaUri}`}
                      priority={true}
                      alt="News Thumbnail Central Computer Improvment"
                      className="w-full h-full max-w-[222px] max-h-[152px] rounded-t-[10px] object-cover"
                    />
                  ) : (
                    <ImageNotFound
                      width={222}
                      height={152}
                      className="w-full h-full max-w-[222px] max-h-[152px] rounded-t-[10px] object-cover"
                    />
                  )}
                  <div
                    className={`w-full h-[90px] flex flex-col justify-between p-2 bg-white rounded-b-[10px] ${styles.newsCardBorder}`}
                  >
                    <h2
                      className={`font-semibold text-[14px] leading-5 sm:leading-0 overflow-hidden text-bluePallete-800 ${styles.newsCardTitle}`}
                    >
                      {data?.title ? data.title : <TextNotFound />}
                    </h2>
                    <p className="text-[10px] font-medium text-gray-500">
                      {data?.date ? data.date : <TextNotFound />}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default NewsSecondSlider;