"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "@/components/Home/homeComponent.module.css";

const newsImageOne = "/assets/images/home/news-thumbnail-1.png";
const newsImageTwo = "/assets/images/home/news-thumbnail-2.png";

const dataCard = [
  {
    image: newsImageOne,
    title: "AI dalam Kehidupan Sehari-Hari",
    date: "Mar 12, 2024",
  },
  {
    image: newsImageTwo,
    title: "Lorem ipsum dolor sit amet dan",
    date: "Mar 12, 2024",
  },
  {
    image: newsImageOne,
    title: "Energi blockchain dan masa depan",
    date: "Mar 12, 2024",
  },
  {
    image: newsImageTwo,
    title:
      "Peran AI dalam dunia pendidikan bagi manusia dwdwd wdwdw wdwd ewdwd dw",
    date: "Mar 12, 2024",
  },
  {
    image: newsImageOne,
    title: "AI untuk keberlanjutan lingkungan hidup",
    date: "Mar 12, 2024",
  },
];

const SecondSlider = () => {
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
      {dataCard.map((data, index) => (
        <SwiperSlide key={index}>
          <div onClick={() => router.push("/news")} className="w-full">
            <Image
              width={220}
              height={150}
              src={data.image}
              alt="News Thumbnail Centra Computer Improvment"
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

export default SecondSlider;
