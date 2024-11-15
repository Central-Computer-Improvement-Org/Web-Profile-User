import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import request from "@/app/utils/request";
import { host } from "@/components/host";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import styles from "@/components/Home/homeComponent.module.css";


const DivisionSecondSlider = ({divisionData, isLoading}) => {
  if (divisionData?.length === 0 || 0) {
    return (
      <div className="w-full h-[240px] sm:h-[300px] md:h-[351px] flex items-center justify-center">
        <h1 className="font-bold text-[18px] sm:text-[24px] text-bluePallete-700">
          Division Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <Loading size="w-[100px] h-[100px]" textAlignment="text-center" />
      ) : (
        <Swiper
          style={{
            "--swiper-pagination-color": "#234d87",
            "--swiper-pagination-bullet-inactive-color": "#bfd0e8",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
          }}
          slidesPerView={1.3}
          spaceBetween={20}
          loop={false}
          pagination={{
            clickable: false,
          }}
          centeredSlides={true}
          modules={[Pagination]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="w-full h-[360px]"
        >
          {divisionData
            ?.filter((v) => v.name !== "All")
            .map((data, index) => (
              <SwiperSlide key={index} className={`w-full my-5 md:my-0`}>
                {data?.id ? (
                  <Link href={`/division?id=${data.id}`}>
                    <div
                      className={`w-[280px] h-[290px] sm:max-h-[290px] sm:max-w-[280px] flex flex-col space-y-3 py-5 px-3 border-2 border-bluePallete-600 rounded-[20px] bg-bluePallete-200 ${styles.divisionSecondCard}`}
                    >
                      {data?.logoUri ? (
                        <Image
                          width={95}
                          height={82}
                          src={`${host}${data.logoUri}`}
                          alt={`Division Thumbnail ${data.name} Central Computer Improvment`}
                          className="w-auto h-auto max-w-[90px] max-h-[85px] object-cover"
                        />
                      ) : (
                        <ImageNotFound
                          width={95}
                          height={82}
                          className="w-auto h-auto max-w-[90px] max-h-[85px] object-cover"
                        />
                      )}
                      {data?.name ? (
                        <h2 className="font-bold text-[22px] sm:text-[24px] text-bluePallete-900">
                          {data.name}
                        </h2>
                      ) : (
                        <TextNotFound className="font-bold text-[22px] sm:text-[24px] text-transparent">
                          DUMMY
                        </TextNotFound>
                      )}
                      {data?.description ? (
                        <p
                          className={`font-medium text-[10px] sm:text-[12px] overflow-hidden text-bluePallete-900 ${styles.divisionDesc}`}
                        >
                          {data.description}
                        </p>
                      ) : (
                        <TextNotFound className="font-medium text-[10px] sm:text-[12px] text-transparent">
                          DUMMY
                        </TextNotFound>
                      )}
                    </div>
                  </Link>
                ) : (
                  <div className="w-full h-[351px] md:h-[351px] flex items-center justify-center">
                    <ImageNotFound />
                  </div>
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </>
  );
};

export default DivisionSecondSlider;
