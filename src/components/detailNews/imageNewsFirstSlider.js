import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import './image.css';
import { host } from '../host';
import ImageNotFound from '@/components/imageNotFound';
import Loading from '@/components/loading';
import styles from '@/components/detailNews/imageNewsFirstSlider.module.css';

const ImageNewsFirstSlider = ({ image }) => {
  const swiperRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(0);
  const [failedImages, setFailedImages] = useState(0);

  useEffect(() => {
    if (image && image.length > 0) {
      image.forEach((data) => {
        const img = document.createElement('img');
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
    if (image && loadedImages + failedImages === image.length) {
      setIsLoading(false);
    }
  }, [loadedImages, failedImages, image]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
      swiperRef.current.swiper.autoplay.start();
    }
  }, [image]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const activeBullet = document.querySelector(
        '.swiper-pagination-bullet-active'
      );
      if (activeBullet) {
        activeBullet.style.animation = 'backgroundAnimation 5s alternate';
      }
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="w-[600px] h-[500px] flex justify-center items-center">
          <Loading size="w-[150px] h-[150px]" textAlignment="text-center" />
        </div>
      ) : (
        <div className="xl:w-[902px] w-full swiper-2">
          {!image || failedImages === image.length ? (
            <ImageNotFound className="w-full xl:w-[902px] xl:h-[520px] lg:h-[700px] md:h-[530px] sm:h-[330px] h-[280px] xl:rounded-lg object-cover bg-no-repeat" />
          ) : (
            <Swiper
              className={`${styles.containerNews} w-full xl:h-[600px] lg:h-[780px] md:h-[600px] sm:h-[390px] h-[320px] xl:rounded-lg `}
              ref={swiperRef}
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              loop={true}
              pagination={{
                el: '.swiper-custom-pagination',
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
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
          <div className=" w-full xl:mt-[40px] md:mt-[35px] mt-[10px] ">
            <div className="flex justify-center items-center bg-transparent">
              <div className="flex justify-center items-center  mx-auto bg-transparent">
                <div className="swiper-custom-pagination flex justify-center items-center gap-[10px]" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageNewsFirstSlider;
