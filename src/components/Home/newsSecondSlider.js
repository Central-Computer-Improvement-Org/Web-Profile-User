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
            // const updatedAt = new Date(item.updatedAt); // uncomment jika dibutuhkan
            return {
              ...item,
              date: `${getMonthName(
                createdAt.getMonth()
              )} ${createdAt.getDate()}, ${createdAt.getFullYear()}`, // properti key 'date' bisa diubah sesuai kebutuhan
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
      "December",
    ];
    return months[monthIndex].substring(0, 3); // penggunaan substring untuk mengambil 3 huruf pertama dari nama bulan 
  };

  return (
    <>
      {loading ? (
        <div className="w-full h-[290px] flex justify-center items-center">
          <p className="font-bold text-center text-[20px] text-bluePallete-700">
            Loading...
          </p>
        </div>
      ) : (
        <Swiper
          slidesPerView={1.5}
          spaceBetween={0}
          pagination={false}
          centeredSlides={true}
          breakpoints={{
            400: {
              slidesPerView: 1.4,
              spaceBetween: 5,
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
          {Array.isArray(newsData) &&
            newsData.map((data, index) => (
              <SwiperSlide key={index} className="px-1 !flex !justify-start !items-center !flex-col">
                <div
                  onClick={() => router.push("/news")}
                  className="w-[222px] h-[242px] "
                >
                  <Image
                    width={222}
                    height={152}
                    src={data.mediaUri}
                    alt="News Thumbnail Central Computer Improvment"
                    responsive="true"
                    className="w-full h-full max-w-[222px] max-h-[152px] rounded-t-[10px] object-cover"
                  />
                  <div
                    className={`w-full h-[90px] flex flex-col justify-between p-2 bg-white rounded-b-[10px] ${styles.newsCardBorder}`}
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
      )}
    </>
  );
};

export default NewsSecondSlider;
