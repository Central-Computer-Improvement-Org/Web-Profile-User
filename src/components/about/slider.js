import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './about.css';

import CardAbout from './cardAbout';
import { host } from '../host';
import styles from '../../components/about/aboutComponent.module.css';

export default function Slider({ data }) {
   const iconArrow = (
      <svg className="xl:w-[55px] md:w-[40px]" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.9661 10.2082C27.9729 9.20142 29.6053 9.20142 30.6121 10.2082L46.0808 25.677C47.0876 26.6838 47.0876 28.3162 46.0808 29.323L30.6121 44.7918C29.6053 45.7986 27.9729 45.7986 26.9661 44.7918C25.9592 43.7849 25.9592 42.1526 26.9661 41.1457L38.0337 30.0781H10.7422C9.31833 30.0781 8.16406 28.9239 8.16406 27.5C8.16406 26.0761 9.31833 24.9219 10.7422 24.9219H38.0337L26.9661 13.8543C25.9592 12.8474 25.9592 11.2151 26.9661 10.2082Z"
            fill="white"
         />
      </svg>
   );

   return (
      <div className={`${styles.aboutContainerSwiper} relative w-full h-[450px] sm:h-[450px] md:h-[500px] lg:h-auto`}>
         <Swiper
            slidesPerView={2}
            grid={{ rows: 2, fill: 'row' }}
            spaceBetween={40}
            navigation={{ nextEl: '.next' }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            // breakpoints={{
            //    375: { slidesPerView: 1, rows: 1 },
            //    425: { slidesPerView: 1, rows: 1 },
            //    768: { slidesPerView: 1, rows: 1 },
            //    1024: { slidesPerView: 2, rows: 2 },
            // }}
            modules={[Grid, Navigation, Pagination]}
            className="mySwiper xl:!max-w-[1108px] lg:!max-w-[798px] md:!max-w-[708px] w-full mt-[31px]"
         >
            {data && data.map((user, index) => (
               <SwiperSlide key={index} className="w-[100%]">
                  <CardAbout
                     color={'bg-greenPallete-300'}
                     image={host + user.profileUri}
                     jobdes={user.role.name}
                     name={user.name}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="flex justify-center gap-1">
            <div className="mt-[30px] swiper-pagination lg:hidden flex justify-center items-center gap-[10px]"/>
         </div>
         <div className={`${styles.aboutButtonRight} absolute z-[10] bottom-0 lg:flex items-center justify-center hidden`}>
            <button className="bg-bluePallete-500 text-transparent rounded-full xl:w-[100px] w-[80px] xl:h-[100px] h-[80px] flex items-center justify-center next">
               {iconArrow}
            </button>
         </div>
      </div>
   );
}
