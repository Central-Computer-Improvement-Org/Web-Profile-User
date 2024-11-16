"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { host } from "@/components/host";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import styles from "@/components/Home/homeComponent.module.css";


const DivisionFirstSlider = ({divisionsData, isLoading}) => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  if (divisionsData?.length === 0 || 0) {
    return (
      <div className="w-full h-[351px] md:h-[351px] flex items-center justify-center">
        <h1 className="font-bold text-[24px] text-bluePallete-700">
          Division Not Found
        </h1>
      </div>
    );
  };

  return (
    <>
      <div className="relative w-full !max-h-fit">
        {/* Pengecekan laoding disini wajib, karena untuk menghindari error fungsi navigation swiper yang membutuhkan data harus wajib ada terlebih dahulu di dalam tag Swiper */}
        {isLoading ? (
            <Loading
              size="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]"
              textAlignment="text-center"
            />
        ) : (
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            navigation={{
              nextEl: ".divisionButtonNext",
            }}
            loop={true}
            pagination={false}
            slidesPerView={1.2}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2.3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 60,
              },
            }}
            className={"w-full"}
          >
            {divisionsData
              ?.filter((v) => v.name !== "All")
              .map((data, index) => (
                <SwiperSlide
                  key={index}
                  className={`cursor-pointer ${styles.divisionCardSwiper}`}
                >
                  {data?.id ? (
                    <Link href={`/division?id=${data.id}`}>
                      <div
                        className={`h-[351px] w-[290px] max-h-[340px] max-w-[290px] flex flex-col space-y-3 py-5 px-3 rounded-[20px] border-2 border-bluePallete-300 bg-bluePallete-200 ${styles.divisionFirstCard}`}
                      >
                        {data?.logoUri ? (
                          <Image
                            width={95}
                            height={82}
                            src={`${host}${data.logoUri}`}
                            alt={`Division Thumbnail ${data.name} Central Computer Improvment`}
                            className="w-auto h-auto md:max-w-[95px] md:max-h-[82px] object-cover"
                          />
                        ) : (
                          <ImageNotFound
                            width={95}
                            height={82}
                            className="w-auto h-auto md:max-w-[95px] md:max-h-[82px] object-cover"
                          />
                        )}
                        {data?.name ? (
                          <h2 className="font-bold text-[24px] text-bluePallete-900">
                            {data.name}
                          </h2>
                        ) : (
                          <TextNotFound className="font-bold text-[24px] text-transparent">
                            DUMMY
                          </TextNotFound>
                        )}
                        {data?.description ? (
                          <p
                            className={`font-medium text-[12px] overflow-hidden text-bluePallete-900 ${styles.divisionCardDescription}`}
                          >
                            {data.description}
                          </p>
                        ) : (
                          <TextNotFound className="font-medium text-transparent text-[12px] overflow-hidden">
                            Divisi yang berfokus mempelajari UI/UX melalui
                            beberapa tahapan didalamnya sehingga divisi design
                            memiliki tujuan atau memberikan output berupa sebuah
                            desain produk sebaik mungkin
                          </TextNotFound>
                        )}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`h-[351px] w-[290px] max-h-[340px] max-w-[290px] flex flex-col space-y-3 py-5 px-3 rounded-[20px] border-2 border-bluePallete-300 bg-bluePallete-200 ${styles.divisionFirstCard}`}
                    >
                      <ImageNotFound
                        width={95}
                        height={82}
                        className="w-auto h-auto md:max-w-[95px] md:max-h-[82px] object-cover"
                      />
                    </div>
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        )}
        <div className={`${styles.divisionButtonNext}`} onClick={goNext}>
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
    </>
  );
};

export default DivisionFirstSlider;