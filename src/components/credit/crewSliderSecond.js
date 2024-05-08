Crewslidersecond;

('use client');
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from '@/components/credit/credit.module.css';
import CardCreditProfile from './cardCreditProfile';

const CrewSliderSecond = ({ crewDatas = [] }) => {
  return (
    <div className={`flex justify-center items-center w-full`}>
      {/* Pengecekan laoding disini wajib, karena untuk menghindari error fungsi navigation swiper yang membutuhkan data harus wajib ada terlebih dahulu di dalam tag Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.divisionButtonNext',
        }}
        loop={true}
        centeredSlides={true}
        pagination={false}
        slidesPerView={1}
        spaceBetween={10}
        className={''}
      >
        {crewDatas &&
          crewDatas.map((data, index) => (
            <SwiperSlide
              key={index}
              className="!flex !justify-center !items-center !w-full "
            >
              <CardCreditProfile
                color={'bg-bluePallete-300'}
                image={
                  'https://facts.net/wp-content/uploads/2023/09/19-intriguing-facts-about-model-1695803042.jpg'
                }
                jobdes={'Crew'}
                name={data.name}
                key={index}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CrewSliderSecond;
