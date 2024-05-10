// 'use client';

// import React, { useEffect, useState } from 'react'; // Import useRef

// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import SwiperCore from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import styles from '@/components/Home/homeComponent.module.css';
// import request from '@/app/utils/request';
// import { host } from '../host';
// import moment from 'moment';
// const AlsoNewsSlider = () => {
//   const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
//     request
//       .get('/news')
//       .then(function (res) {
//         if (res.data.code === 200 || res.data.code === 201) {
//           setNewsData(res.data.data);
//           setIsLoading(false);
//         } else {
//           setIsLoading(false);
//         }
//       })
//       .catch(function (err) {
//         console.log(err);
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <>
//       <Swiper modules={[Navigation]} spaceBetween={30} slidesPerView={3}>
//         {newsData.map((news) => (
//           <SwiperSlide key={news.id}>
//             <div className="lg:max-h-[276px] h-[276px] border-2 bg-white border-bluePallete-500 rounded-xl overflow-hidden">
//               <Image
//                 width={90}
//                 height={30}
//                 src={host + news.mediaUri}
//                 className="w-full h-[162px] object-cover"
//                 alt={news.media_uri}
//               />
//               <div className="bg-red-500 border-t-2 border-bluePallete-500  flex flex-col ">
//                 <h3 className="grow font-semibold text-bluePallete-500 text-3xl">
//                   {news.title}
//                 </h3>
//                 <p className="">
//                   {moment(news.createdAt).format('MMM DD[,] YYYY')}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };

// export default AlsoNewsSlider;

// ImageNewsFirstSlider

'use client';
import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from '@/components/detailNews/rekomendasiNewsSlider.module.css';
import { FormatString } from '@/app/utils/stringUtils';
import moment from 'moment';
import request from '@/app/utils/request';
import { host } from '../host';
import Link from 'next/link';
import { dateFormater } from '@/app/utils/dateFormater';

const AlsoNewsSlider = () => {
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

  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    request
      .get('/news')
      .then(function (res) {
        if (res.data.code === 200 || res.data.code === 201) {
          setNewsData(res.data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="relative ">
      <Swiper
        className={` ${styles.rekomendasiNewsSwiper} rounded-[10px] xl:w-[95%] w-full !ml-0`}
        navigation={{
          nextEl: '.next',
        }}
        breakpoints={{
          // Ketika lebar layar lebih kecil dari atau sama dengan 640px
          640: {
            slidesPerView: 1, // Menampilkan satu slide per tampilan
            spaceBetween: 10, // Spasi antara slide adalah 10px
          },
          // Ketika lebar layar lebih besar dari 640px tetapi kurang dari atau sama dengan 768px
          768: {
            slidesPerView: 2, // Menampilkan dua slide per tampilan
            spaceBetween: 20, // Spasi antara slide adalah 20px
          },
          // Ketika lebar layar lebih besar dari 768px
          1024: {
            slidesPerView: 3, // Menampilkan tiga slide per tampilan
            spaceBetween: 30, // Spasi antara slide adalah 30px
          },
        }}
        modules={[Navigation]}
      >
        {newsData &&
          newsData.map((data, index) => (
            <SwiperSlide
              key={index}
              className={`cursor-pointer  xl:!mr-[42px] lg:!mr-[20px] md:!mr-[80px] !mr-[20px] ${styles.rekomendasiNewsCardSwiper} xl:!w-[384px] lg:!w-[300px] md:!w-[280px] !w-[200px]`}
            >
              <Link href={`news/detailNews?id=${data.id}`}>
                <div className="bg-white  rounded-[10px]">
                  <div className="h-[162px] ">
                    <Image
                      src={host + data.mediaUri}
                      width={0}
                      height={0}
                      alt="Thumbnail Image News Central Computer Improvment"
                      className="w-full h-full object-cover rounded-t-[10px]"
                    />
                  </div>
                  <div className="h-full border border-mainFontColor rounded-b-[10px] p-3 flex flex-col gap-[28px] justify-between">
                    <h1 className="xl:h-[56px] md:h-[48px] xl:text-xl md:text-[16px] font-semibold text-bluePallete-800">
                      {FormatString(data.title)}
                    </h1>
                    <p className="text-sm text-mainFontColor font-medium">
                      {moment(dateFormater(data.createdAt)).format(
                        'MMM DD[,] YYYY'
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="absolute z-[1] -right-[2%] top-0 bottom-0 flex items-center justify-center">
        <button className="bg-bluePallete-500 text-transparent rounded-full xl:w-[100px] w-[80px] xl:h-[100px] h-[80px] flex items-center justify-center next">
          {iconArrow}
        </button>
      </div>
    </div>
  );
};

export default AlsoNewsSlider;
