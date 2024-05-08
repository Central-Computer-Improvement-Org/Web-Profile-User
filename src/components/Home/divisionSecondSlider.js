'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '@/components/Home/homeComponent.module.css';

const DivisionSecondSlider = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request
      .get('/division')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setDivisionData(response.data.data);
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

  return (
    <>
      {loading ? (
        <div className="w-full h-[360px] flex items-center justify-center">
          <h1 className="font-bold text-[20px] text-center text-black">
            Loading...
          </h1>
        </div>
      ) : (
        <Swiper
          style={{
            '--swiper-pagination-color': '#234d87',
            '--swiper-pagination-bullet-inactive-color': '#bfd0e8',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '10px',
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
            '@0.00': {
              slidesPerView: 1.3,
              spaceBetween: 20,
            },
            '@0.75': {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            '@1.00': {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            '@1.50': {
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
                  <Image
                    width={90}
                    height={85}
                    src={data.logoUri}
                    alt="Division Thumbnail Central Computer Improvment"
                    className="w-auto h-auto max-w-[90px] max-h-[85px] object-cover"
                  />
                  <h2 className="font-bold text-[22px] sm:text-[24px] text-bluePallete-900">
                    {data.name}
                  </h2>
                  <p
                    className={`font-medium text-[10px] sm:text-[12px] overflow-hidden text-bluePallete-900 ${styles.divisionDesc}`}
                  >
                    {data.description}
                  </p>
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
