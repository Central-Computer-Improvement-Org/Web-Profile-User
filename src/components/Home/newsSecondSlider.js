"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import request from "@/app/utils/request";
import styles from "@/components/Home/homeComponent.module.css";

const NewsSecondSlider = () => {
  const router = useRouter();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request
      .get("/news")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const formattedData = response.data.data.map((item) => {
            const createdAt = new Date(item.createdAt);
            const updatedAt = new Date(item.updatedAt);
            return {
              ...item,
              date: `${getMonthName(createdAt.getMonth())} ${createdAt.getDate()}, ${createdAt.getFullYear()}`,  // get from createdAt
              // updatedAt: `${getMonthName(updatedAt.getMonth())} ${updatedAt.getDate()}, ${updatedAt.getFullYear()}` // get from updatedAt
            };
          });
          setNewsData(formattedData);
        } else {
          console.error(JSON.stringify(response.errors));
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    return months[monthIndex];
  };

  return (
    <Swiper
      slidesPerView={1.4}
      spaceBetween={20}
      pagination={false}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 1.4,
          spaceBetween: 30,
        },
      }}
      modules={[Pagination]}
      className={`w-full`}
    >
      {Array.isArray(newsData) &&
        newsData.map((data, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => router.push("/news")} className="w-full">
              <Image
                width={220}
                height={150}
                src={data.media_uri}
                alt="News Thumbnail Central Computer Improvment"
                responsive="true"
                className="w-full h-auto rounded-t-xl object-cover"
              />
              <div
                className={`h-[100px] max-h-[100px] flex flex-col justify-between p-2 bg-white rounded-b-xl ${styles.newsCardBorder}`}
              >
                <h2
                  className={`font-semibold text-[14px] leading-5 sm:leading-0 overflow-hidden text-bluePallete-800 ${styles.newsCardTitle}`}
                >
                  {data.title}
                </h2>
                <p className="text-[10px] font-medium text-gray-500">
                  {data.date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default NewsSecondSlider;