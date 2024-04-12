"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "@/components/Home/homeComponent.module.css";

const newsImageOne = "/assets/home/images/news-thumbnail-1.png";
const newsImageTwo = "/assets/home/images/news-thumbnail-2.png";

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

const FirstCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.newsArrow} ${styles.newsNextArrow}`}
        onClick={onClick}
      >
        <svg
          className="w-full h-full max-h-[100px] max-w-[100px] sm:w-[50px] md:w-[60px] lg:w-[90px]"
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
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className={`${styles.newsArrow} ${styles.newsPrevArrow}`}
        onClick={onClick}
      >
        <svg
          className="w-full h-full max-h-[100px] sm:[60px] max-w-[100px] sm:w-[50px] md:w-[60px] lg:w-[90px]"
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
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: function (i) {
      return (
        <>
          <div
            className={`${styles.newsCustomDot} ${
              i === currentSlide ? styles.newsCustomDotCenter : ""
            }`}
          ></div>
        </>
      );
    },
  };
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] flex justify-center items-center mx-auto">
      <Slider
        {...settings}
        className="w-full h-[320px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-row items-center"
      >
        {dataCard.map((main, index) => (
          <div
            key={index}
            className={
              index === currentSlide
                ? `${styles.newsSlide} ${styles.newsActiveSlide} w-full h-auto`
                : `${styles.newsSlide} w-auto h-auto`
            }
          >
            <Image
              src={main.image}
              alt="News Thumbnail Centra Computer Improvment"
              width={300}
              height={200}
              sizes="100vw"
              responsive="true"
              className="mt-[20px] rounded-t-lg object-cover"
            />
            <div className="w-full flex flex-col space-y-5 mb-5 py-[6px] px-[10px] md:py-[10px] md:px-[15px] rounded-b-[10px] border-[1px] border-[#234d87] bg-white">
              <p
                className={`font-semibold text-[16px] md:text-[20px] lg:text-[32px] leading-0 lg:leading-10 max-h-[120px] overflow-hidden text-bluePallete-800 ${styles.newsCardTitle}`}
              >
                {main.title}
              </p>
              <div className="w-full flex flex-row justify-between items-end">
                <p className="text-[8px] md:text-[10px] lg:text-[14px] text-[#6B6B6B]">
                  {main.date}
                </p>
                <p className="font-bold text-[10px] md:text-[14px] lg:text-[20px] sm:px-[10px] lg:px-[25px] py-[2px] md:py-[5px] lg:py-[8px] sm:rounded lg:rounded-[10px] text-white bg-mainPrimary">
                  <Link href="/news">Load More</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FirstCarousel;
