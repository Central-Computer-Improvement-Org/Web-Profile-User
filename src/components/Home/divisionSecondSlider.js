import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "@/components/Home/homeComponent.module.css";

const divisionWeb = "assets/logo/images/logo-divisi-web.png";
const divisionDesign = "assets/logo/images/logo-divisi-design.png";
const divisionGNG = "assets/logo/images/logo-divisi-gng.png";
const divisionNetwork = "assets/logo/images/logo-divisi-network.png";
const divisionMM = "assets/logo/images/logo-divisi-mm.png";
const divisionDR = "assets/logo/images/logo-divisi-ds.png";

const dataCard = [
  {
    image: divisionWeb,
    title: "Web Development",
    description:
      "Divisi yang berfokus pada pembelajaran pengembangan website terbaru dengan memperhatikan beberapa struktur didalamnya.",
    divisionUrl: "/division/web-development",
  },
  {
    image: divisionDesign,
    title: "Design",
    description:
      "Divisi yang berfokus mempelajari UI/UX melalui beberapa tahapan didalamnya sehingga divisi design memiliki tujuan atau memberikan output berupa sebuah desain produk sebaik mungkin",
    divisionUrl: "/division/design",
  },
  {
    image: divisionGNG,
    title: "Games and Gadget",
    description:
      "Divisi Games and Gadget merupakan divisi yang berfokus dalam pengembangan games dan juga kegiatan- kegiatan lainnya yang berhubungan dengan video games.",
    divisionUrl: "/division/games-and-gadget",
  },
  {
    image: divisionNetwork,
    title: "Network",
    description:
      "Divisi yang berfokus pada pengaturan dan manajemen jaringan komputer sehingga mencapai hasil yang optimal",
    divisionUrl: "/division/network",
  },
  {
    image: divisionMM,
    title: "Media Management",
    description:
      "Divisi ini yang bergerak di bidang media dari CCI, seperti content creator, content planner, design content, disb. Divisi ini berfokus mempelajari bagaimana mengatur, memanagement dan mendesain sebuah media.",
    divisionUrl: "/division/media-management",
  },
  {
    image: divisionDR,
    title: "Data Research",
    description:
      "Divisi yang berfokus pada proses dimana mengumpulkan, mengukur, dan menganalisis data dari berbagai sumber untuk mendapatkan wawasan atau pemahaman terhadap suatu hal.",
    divisionUrl: "/division/data-research",
  },
];

const RoleSlider = () => {
  const router = useRouter();
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#234d87",
          "--swiper-pagination-bullet-inactive-color": "#bfd0e8",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
        }}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
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
        {dataCard.map((data, index) => (
          <SwiperSlide key={index} className={`w-full my-5 md:my-0`}>
            <div
              onClick={() => router.push(data.divisionUrl)}
              className={`w-[280px] h-[290px] sm:max-h-[290px] sm:max-w-[280px] flex flex-col space-y-3 py-5 px-3 border-2 border-bluePallete-300 rounded-xl bg-bluePallete-200 ${styles.divisionCard}`}
            >
              <Image
                width={80}
                height={80}
                src={data.image}
                alt="Division Thumbnail Central Computer Improvment"
                className="w-auto h-auto max-w-[95px] max-h-[75px] md:max-w-[100px] md:max-h-[85px]"
              />
              <h2 className="font-bold text-[24px] text-bluePallete-900">
                {data.title}
              </h2>
              <p
                className={`font-medium text-[12px] overflow-hidden text-bluePallete-900 ${styles.divisionDesc}`}
              >
                {data.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RoleSlider;
