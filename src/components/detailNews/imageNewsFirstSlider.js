import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./image.css";
import { host } from "../host";
import ImageNotFound from "@/components/imageNotFound";
import Loading from "@/components/loading";
import styles from "@/components/detailNews/imageNewsFirstSlider.module.css";

const ImageNewsFirstSlider = ({ image }) => {
  const swiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [failedImages, setFailedImages] = useState(0);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} swiper-pagination-bullet-custom"></span>`;
    },
  };

  useEffect(() => {
    if (image && image.length > 0) {
      image.forEach((data) => {
        const img = document.createElement("img");
        img.src = host + data;
        img.onload = () => {
          setLoadedImages((prev) => prev + 1);
        };
        img.onerror = () => {
          setFailedImages((prev) => prev + 1);
        };
      });
    } else {
      setIsLoading(false);
    }
  }, [image]);

  useEffect(() => {
    if (image && (loadedImages + failedImages === image.length)) {
      setIsLoading(false);
    }
  }, [loadedImages, failedImages, image]);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="w-[600px] h-[500px] flex justify-center items-center">
          <Loading size="w-[150px] h-[150px]" textAlignment="text-center"/>
        </div>
      ) : (
        <div className="xl:w-[902px] w-full swiper-2">
          {(!image || failedImages === image.length) ? (
            <ImageNotFound className="w-full xl:w-[902px] xl:h-[520px] lg:h-[700px] md:h-[530px] sm:h-[330px] h-[280px] xl:rounded-lg object-cover bg-no-repeat" />
          ) : (
            <Swiper
              ref={swiperRef}
              className={`${styles.containerNews} w-full xl:h-[600px] lg:h-[780px] md:h-[600px] sm:h-[390px] h-[320px] xl:rounded-lg `}
              slidesPerView={1}
              pagination={pagination}
              navigation={{
                nextEl: ".newsButtonNext",
              }}
              modules={[Navigation, Pagination]}
            >
              {image &&
                image.map((data, index) => (
                  <SwiperSlide className="cursor-pointer" key={index}>
                    <div className="w-full h-full">
                      {data ? (
                        <Image
                          src={host + data}
                          width={0}
                          height={0}
                          alt="Thumbnail News Central Computer Improvement"
                          className={`${styles.imagesNews} w-full xl:w-[902px] xl:h-[520px] lg:h-[700px] md:h-[530px] sm:h-[330px] h-[280px] xl:rounded-lg object-cover bg-no-repeat`}
                        />
                      ) : (
                        <ImageNotFound className="w-full xl:w-[902px] xl:h-[520px] lg:h-[700px] md:h-[530px] sm:h-[330px] h-[280px] xl:rounded-lg object-cover bg-no-repeat" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          )}
          <style>
            {`
              .swiper-pagination-bullet-custom {
                  width: 16px !important;
                  height: 16px !important;
                  background-color: #265290 !important;
                  border-radius: 50% !important;
                  margin: 0 5px !important;
              }
              @media only screen and (max-width: 768px) {
                .swiper-pagination-bullet-custom {
                  width: 10px !important;
                  height: 10px !important;
                }
              }
            `}
          </style>
          <div className={`${styles.newsButtonNext}`} onClick={goNext}>
            <svg
              className="h-[63px] w-[63px]"
              width="63"
              height="63"
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
        </div>
      )}
    </>
  );
};

export default ImageNewsFirstSlider;