import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import request from "@/app/utils/request";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import { host } from "@/components/host";
import styles from "@/components/Home/homeComponent.module.css";

const DivisionSecondSlider = () => {
  const router = useRouter();
  const [divisionData, setDivisionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request
      .get("/users/divisions")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setDivisionData(response.data.data);
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
          {divisionData.map((data, index) => (
            <SwiperSlide key={index} className={`w-full my-5 md:my-0`}>
              <a
                onClick={function () {
                  router.push(`/division?id=${data.id}`);
                }}
              >
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
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default DivisionSecondSlider;
