import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./homeComponent.module.css";

SwiperCore.use([Navigation]);

const divisionWeb = "/assets/images/logo-divisi-web.png";
const divisionDesign = "/assets/images/logo-divisi-design.png";
const divisionGNG = "/assets/images/logo-divisi-gng.png";
const divisionNetwork = "/assets/images/logo-divisi-network.png";
const divisionMM = "/assets/images/logo-divisi-mm.png";
const divisionDR = "/assets/images/logo-divisi-ds.png";

const dataCard = [
  {
    image: divisionWeb,
    title: "Web Development",
    description:
      "Divisi yang berfokus pada pembelajaran pengembangan website terbaru dengan memperhatikan beberapa struktur didalamnya.",
    divisionUrl: "/projects/web-development",
  },
  {
    image: divisionDesign,
    title: "Design",
    description:
      "Divisi yang berfokus mempelajari UI/UX melalui beberapa tahapan didalamnya sehingga divisi design memiliki tujuan atau memberikan output berupa sebuah desain produk sebaik mungkin",
    divisionUrl: "/projects/design",
  },
  {
    image: divisionGNG,
    title: "Games and Gadget",
    description:
      "Divisi Games and Gadget merupakan divisi yang berfokus dalam pengembangan games dan juga kegiatan- kegiatan lainnya yang berhubungan dengan video games.",
    divisionUrl: "/projects/games-and-gadget",
  },
  {
    image: divisionNetwork,
    title: "Network",
    description:
      "Divisi yang berfokus pada pengaturan dan manajemen jaringan komputer sehingga mencapai hasil yang optimal",
    divisionUrl: "/projects/network",
  },
  {
    image: divisionMM,
    title: "Media Management",
    description:
      "Divisi ini yang bergerak di bidang media dari CCI, seperti content creator, content planner, design content, disb. Divisi ini berfokus mempelajari bagaimana mengatur, memanagement dan mendesain sebuah media.",
    divisionUrl: "/projects/media-management",
  },
  {
    image: divisionDR,
    title: "Data Research",
    description:
      "Divisi yang berfokus pada proses dimana mengumpulkan, mengukur, dan menganalisis data dari berbagai sumber untuk mendapatkan wawasan atau pemahaman terhadap suatu hal.",
    divisionUrl: "/projects/data-research",
  },
];

const RoleSlider = () => {
  const router = useRouter();
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  return (
    <>
      <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={70}
        navigation={{
          nextEl: ".customButtonNext",
        }}
        pagination={false}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1.8,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 2.8,
            spaceBetween: 70,
          },
        }}
        className={"w-full"}
      >
        {dataCard.map((data, index) => (
          <SwiperSlide
            key={index}
            data-hash={`slide${index + 1}`}
            className="cursor-pointer"
            onClick={() => router.push(data.divisionUrl)}
          >
            <div className="h-[350px] w-[280px] max-h-[350px] max-w-[280px] flex flex-col space-y-3 py-5 px-3 rounded-[20px] border-2 border-bluePallete-300 bg-bluePallete-200">
              <Image
                width={80}
                height={80}
                src={data.image}
                alt="Division Thumbnail Central Computer Improvment"
                className="w-auto h-auto md:max-w-[100px] md:max-h-[85px]"
              />
              <h2 className="font-bold text-[24px] text-bluePallete-900">
                {data.title}
              </h2>
              <p className="font-medium text-[12px] text-bluePallete-900">
                {data.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${styles.customButtonNext}`} onClick={goNext}>
        <svg
          className="lg:h-[80px] lg:w-[80px] xl:h-[100px] xl:w-[100px]"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill="#265290" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
            fill="white"
          />
        </svg>
      </div>
    </>
  );
};

export default RoleSlider;
