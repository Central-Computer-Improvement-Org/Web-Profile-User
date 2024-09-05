import React, { useState, useEffect } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { host } from '../host';
import { ImageNotFound } from '../imageNotFound';
import CardCreditProfile from './cardCreditProfile';
import NotFound from '../imageNotFound';
import styles from './credit.module.css';

// const LIMITER = 4;
export default function CrewSlider({
  crewDatas = [],
  color = 'bg-bluePallete-300',
}) {
  const size = useWindowSize();
  const [page, setPage] = useState(1)
  const [splittedDatas, setSplittedDatas] = useState([])
  const [datas, setDatas] = useState([])
  const iconArrow = (
    <svg
      className="xl:w-[55px] md:w-[40px] "
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.9661 10.2082C27.9729 9.20142 29.6053 9.20142 30.6121 10.2082L46.0808 25.677C47.0876 26.6838 47.0876 28.3162 46.0808 29.323L30.6121 44.7918C29.6053 45.7986 27.9729 45.7986 26.9661 44.7918C25.9592 43.7849 25.9592 42.1526 26.9661 41.1457L38.0337 30.0781H10.7422C9.31833 30.0781 8.16406 28.9239 8.16406 27.5C8.16406 26.0761 9.31833 24.9219 10.7422 24.9219H38.0337L26.9661 13.8543C25.9592 12.8474 25.9592 11.2151 26.9661 10.2082Z"
        fill="white"
      />
    </svg>
  );
  
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  // const [crewDatas2, setCrewDatas2] = useState([]);


  // useEffect(() => {
  //   if (crewDatas.length > LIMITER) {
  //     // const totalPages = Math.ceil(crewDatas.length / LIMITER);
  //     // console.log("total", totalPages);
      
  //     setTotalPages(Math.ceil(crewDatas.length / LIMITER));
      
  //     const start = (page - 1) * LIMITER;
  //     const end = start + LIMITER;
  //     setCrewDatas2(crewDatas.slice(start, end));
  //     console.log("start", start);
  //     console.log("end", end);
  //     // setCrewDatas2(crewDatas.slice(0, 2));
  //   }
  // }, [crewDatas, page]);
  
  // console.log("totalpages:", totalPages);  
  // console.log("crewDatas2:", crewDatas2);
  // console.log("pages:", page);

  

//   if (!crewDatas || crewDatas.length === 0) {
//     return (
//        <div className="w-full h-auto flex justify-center items-center mt-[50px]">
//           <ImageNotFound className="w-[90px] h-[78px] sm:w-[130px] sm:h-[108px] lg:w-[170px] lg:h-[148px] object-cover" />
//        </div>
//     );
//  }

  // const sisaSlide
    useEffect(() => {
        const splited = [
            crewDatas?.slice(0, 4),
            crewDatas?.slice(3 + 1)
        ]
        setSplittedDatas(splited)

    }, [crewDatas]);


  const handleNext = () => {
      page > 2 ? setPage(1) : setPage(page + 1)
  };

    useEffect(() => {
        console.info(splittedDatas)

        setDatas(page == 1 ? splittedDatas[0] : splittedDatas[1])
    }, [splittedDatas, page]);

  return crewDatas.length ? (
    <div className="relative">
      <Swiper
        onReachEnd={(e) => {
          const sisaSlide = crewDatas.length - e.activeIndex; // Menghitung sisa data berdasarkan index aktif
          console.log("Sisa Slide:", sisaSlide);
          
          if (sisaSlide > 0 && sisaSlide < e.params.slidesPerView) {
            // Jika sisa slide lebih kecil dari slidesPerView
            e.params.slidesPerView = sisaSlide; // Ubah slidesPerView sesuai dengan sisa slide
            e.update(); // Update swiper setelah merubah konfigurasi
          }
        }}
        grid={
          size.width > 425
            ? {
              rows: 2,
              fill: 'row',
            }
            : {
              rows: 1,
              fill: 'row',
            }
        }
        // slidesPerGroup={3}
        // slidesPerView="auto"
        slidesPerView={
          size.width > 425
            ? 2
            : 1
        }
        setWrapperSize={true}
        loopPreventsSliding={true}
        spaceBetween={20}
        breakpoints={{
          425: {
            slidePerView: 1,
            spaceBetween: 20,
            slidesPerColumnFill: 'row',
            direction: 'horizontal',
            centerInsufficientSlides:true,
          },
          640: {
            slidePerView: 2,
            spaceBetween: 40,
            slidesPerColumnFill: 'row',
            direction: 'horizontal',
            centerInsufficientSlides:true,
          }
        }}
        // slidesPerColumn: 2,
        // slidesPerColumnFill='row'
        centerInsufficientSlides={true}
        direction='horizontal'
        navigation={{
          nextEl: '.next',
        }}
        loop={false}
        pagination={
          size.width >= 768
            ? false
            : {
              el: '.bullets-container',
              type: 'bullets',
              bulletClass: 'swiper-custom-bullet',
              bulletActiveClass: 'swiper-custom-bullet-active',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span className="' + className + '"></span>';
              },
            }
        }
        modules={[Grid, Navigation, Pagination]}
        className="mySwiper"
      >
        {datas?.length &&
          datas?.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center">
                  <CardCreditProfile
                    color={color}
                    image={`${host}${data?.profileUri}`}
                    jobdes={`${data.role?.name}`}
                    name={data?.name}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="bullets-container"></div>
      <div className={`${styles.test} absolute z-10 top-0 bottom-0 lg:flex items-center justify-center hidden`}>
        <button onClick={handleNext} className="bg-bluePallete-500 text-transparent rounded-full xl:w-[100px] w-[80px] xl:h-[100px] h-[80px] flex items-center justify-center next">
          {iconArrow}
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center w-[100%]">
      <NotFound className="flex justify-center w-[200px]" />
    </div>
  );
}
