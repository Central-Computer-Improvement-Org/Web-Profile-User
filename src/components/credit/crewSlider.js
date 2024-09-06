import React, { useState, useEffect } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import { host } from '../host';
import CardCreditProfile from './cardCreditProfile';
import NotFound from '../imageNotFound';
import styles from './credit.module.css';
import ReactCardFlip from "react-card-flip";
import TeksNotFound from "@/components/teksNotFound";
import Image from "next/image";

// const LIMITER = 4;

const desktopColorPattern = [
    "#152E51",
    "#11A950",
    "#11A950",
    "#152E51",
    "#152E51",
    "#11A950",
    "#11A950",
];


export default function CrewSlider({
  crewDatas = [],
  color = 'bg-bluePallete-300',
}) {
  const size = useWindowSize();
  const [page, setPage] = useState(1)
  const [splittedDatas, setSplittedDatas] = useState([])
  const [datas, setDatas] = useState([])
    const [flipPosition, setFlipPosition] = useState(null);
    const [autoFlipCount, setAutoFlipCount] = useState(0);
    const [colorPattern, setColorPattern] = useState(desktopColorPattern);

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

  console.info(crewDatas)

  const handleNext = () => {
      page >= 2 ? setPage(1) : setPage(page + 1)
  };

    function onClickFlipCard(index) {
        setFlipPosition(flipPosition === index ? null : index);
    }

    const getCardBackgroundColor = (index) => {
        const patternIndex = index % colorPattern.length;
        return colorPattern[patternIndex];
    };

    useEffect(() => {
        const splited = [
            crewDatas?.slice(0, 4),
            crewDatas?.slice(3 + 1)
        ]
        setSplittedDatas(splited)

    }, [crewDatas]);

    useEffect(() => {
        console.info(splittedDatas)

        setDatas(page == 1 ? splittedDatas[0] : splittedDatas[1])
    }, [splittedDatas, page]);

  return crewDatas.length ? (
      <>
          <div className="w-full h-auto flex flex-wrap justify-around items-center mt-[21px]">
              {datas?.map((crew, index) => (
                  <div key={crew.id} className="mt-[10px] sm:mt-[54px]">
                      <ReactCardFlip
                          key={crew.id}
                          isFlipped={flipPosition === index}
                          flipDirection="vertical"
                      >
                          {/* Card bagian depan */}
                          <div
                              className={`relative w-[300px] sm:w-[517px] h-[65px] sm:h-full max-w-[517px] max-h-[198px] rounded-[15px] sm:rounded-[30px] overflow-hidden cursor-pointer ${styles.dvisionEventCardContainer}`}
                              onClick={() => onClickFlipCard(index)}
                          >
                              <div
                                  className="absolute inset-0 rounded-[15px] sm:rounded-[30px] flex justify-center items-center"
                                  style={{
                                      backgroundColor: `${getCardBackgroundColor(index)}80`,
                                  }}
                              >
                                  {crew?.name ? (
                                      <p className="font-black text-[14px] sm:text-[40px] [text-shadow:_0px_6px_7px_rgb(0_0_0_/_40%)] text-[#F5FBF9]">
                                          {crew.name}
                                      </p>
                                  ) : (
                                      <TeksNotFound className="font-black text-[14px] sm:text-[40px] [text-shadow:_0px_6px_7px_rgb(0_0_0_/_40%)] text-[#F5FBF9]"></TeksNotFound>
                                  )}
                              </div>
                              {crew?.mediaUri ? (
                                  <Image
                                      src={`${host}${crew.mediaUri}`}
                                      alt={[crew.title + " Central Computer Improvement"]}
                                      width={517}
                                      height={198}
                                      responsive="true"
                                      loading="lazy"
                                      className="object-cover w-full h-full"
                                  />
                              ) : (
                                  <NotFound className="object-cover w-full h-full" />
                              )}
                          </div>
                          {/* Card bagian belakang */}
                          <div
                              className={`w-[300px] sm:w-[517px] h-[65px] sm:h-[198px] max-w-[517px] max-h-[198px] flex flex-col justify-start items-left space-y-0 sm:space-y-1 px-[26px] sm:px-[60px] py-[5px] sm:py-[30px] rounded-[15px] sm:rounded-[30px] cursor-pointer ${styles.dvisionEventCardContainer}`}
                              style={{
                                  backgroundColor: getCardBackgroundColor(index),
                              }}
                              onClick={() => onClickFlipCard(index)}
                          >
                              {crew?.name ? (
                                  <h1 className="font-black text-[14px] sm:text-[24px] text-white">
                                      {crew.name}
                                  </h1>
                              ) : (
                                  <TeksNotFound className="font-black text-[14px] sm:text-[24px] text-white"></TeksNotFound>
                              )}
                              {crew?.name ? (
                                  <p className="text-[8px] sm:text-[16px] font-medium text-white">
                                      {crew.description}
                                  </p>
                              ) : (
                                  <TeksNotFound className="text-[8px] sm:text-[16px] font-medium text-white"></TeksNotFound>
                              )}
                          </div>
                      </ReactCardFlip>
                  </div>
              ))}
          </div>
          <div className="flex items-center justify-center w-full">
              <button
                  className={`${styles.crewButton} w-full flex justify-center hover:opacity-75 mt-[20px] sm:mt-[54px] text-white`}
                  onClick={handleNext}
              >
                  <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
                  >
                      <circle cx="50" cy="50" r="50" fill="#265290" />
                      <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
                          fill="white"
                      />
                  </svg>
              </button >
          </div>
      </>
  ) : (
    <div className="flex justify-center w-[100%]">
      <NotFound className="flex justify-center w-[200px]" />
    </div>
  );
}
