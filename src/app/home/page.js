"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import "moment/locale/id";

import { host } from "@/components/host";
import { useSettings } from "../provider";
import request from "@/app/utils/request";
import NewsFirstSlider from "@/components/Home/newsFirstSlider";
import NewsSecondSlider from "@/components/Home/newsSecondSlider";
import DivisionFirstSlider from "@/components/Home/divisionFirstSlider";
import DivisionSecondSlider from "@/components/Home/divisionSecondSlider";
import ProjectCard from "@/components/Home/projectCard";
import TextNotFound from "@/components/teksNotFound";
import Loading from "@/components/loading";
import styles from "@/app/home/homePage.module.css";
import logoCCI from '/public/assets/logo/logo_cci.svg';


export default function Home() {
  const { settingsData } = useSettings();
  const [awardsData, setAwardsData] = useState(null);
  const [membersData, setMembersData] = useState(null);
  const [divisionsData, setDivisionsData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [projectsDataSecond, setProjectsDataSecond] = useState(null);
  const [newsData, setNewsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const logError = (message, error) => console.error(message, error);

  const fetchAwardDatas = async () => {
    try {
      const response = await request.get("/awards");
      if (response?.status === 200) {
        setAwardsData(response.data);
      } else {
        logError("Error fetching award data:", response?.errors);
      }
    } catch (error) {
      logError("Error fetching award data:", error);
    }
  };

  const fetchMemberDatas = async () => {
    try {
      const response = await request.get("/users");
      if (response?.status === 200) {
        setMembersData(response.data);
      } else {
        logError("Error fetching member data:", response?.errors);
      }
    } catch (error) {
      logError("Error fetching member data:", error);
    }
  };

  const fetchDivisionDatas = async () => {
    try {
      const response = await request.get("/users/divisions");
      if (response?.status === 200) {
        const filteredData = response.data?.data.filter((item) => item.name !== "All");
        setDivisionsData(filteredData);
      } else {
        logError("Error fetching division data:", response?.errors);
      }
    } catch (error) {
      logError("Error fetching division data:", error);
    }
  };

  const fetchProjectDatas = async () => {
    setProjectsDataSecond(null);
    
    try {
      const response = await request.get("/projects");
      if (response?.status === 200) {
        setProjectsData(response.data);
        // pengurutan data berdasarkan tanggal data terbaru
        const sortedData = response.data.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setProjectsDataSecond(sortedData);
      } else {
        logError("Error fetching project data:", response?.errors);
      }
    } catch (error) {
      logError("Error fetching project data:", error);
    }
  };

  const fetchNewsDatas = async () => {
    try {
      const response = await request.get("/news");
      if (response?.status === 200) {
        const formatDateData = response?.data?.data?.map((item) => {
          const createdAt = moment(String(item.createdAt)).format("MMM DD[,] YYYY")
          return {
            ...item,
            date: createdAt,
          };
        });
        // pengurutan data berdasarkan tanggal data terbaru
        const sortNewsData = formatDateData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        // pengambilan 5 data terbaru bedasarkan tanggal data terbaru
        const limitNewsData = sortNewsData.slice(0, 5);
        setNewsData(limitNewsData);
      } else {
        logError("Error fetching news data:", response?.errors);
      }
    } catch (error) {
      logError("Error fetching news data:", error);
    }
  };
  
  useEffect(() => {
    setIsLoading(true);

    // Pakai promise allSettled untuk fetch data secara bersamaan dan ngabaikan error dalam suatu fungsi fetch
    Promise.allSettled([
      // fetchSettingDatas(),
      fetchAwardDatas(),
      fetchMemberDatas(),
      fetchDivisionDatas(),
      fetchProjectDatas(),
      fetchNewsDatas()
    ]).finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <main className="w-full h-auto">
        {/* hero section */}
        <section id="hero" className="w-full h-auto pb-20 sm:pb-32 pt-20 sm:pt-[170px]">
          <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto flex flex-row flex-wrap">
            <div className="basis-full md:basis-[55%] flex flex-col space-y-10">
              <div className="hidden md:block">
                <Image
                  src={
                    settingsData?.logoUri
                      ? `${host}${settingsData.logoUri}`
                      : logoCCI.src
                  }
                  width={291}
                  height={180}
                  priority
                  alt="Logo Central Computer Improvement"
                  className="w-auto h-auto md:w-full md:h-[180px] max-w-[291px] max-h-[180px] object-contain"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-[40px] sm:text-[56px] text-center md:text-left font-bold px-3 sm:px-0 leading-tight sm:leading-normal text-bluePallete-600">
                  {
                    settingsData?.name ? settingsData.name : "Central Computer Improvement"
                  }
                </h1>
              </div>
              {/* Deskripsi ketika desktop */}
              <div className="hidden md:block">
                <p className="text-[24px] pr-5 text-bluePallete-600">
                  {
                    settingsData?.description ? settingsData.description :
                      "Unit Kegiatan Mahasiswa (UKM) CCI telah berhasil meraih berbagai prestasi yang membanggakan, melalui partisipasi aktif dalam berbagai kompetisi, inovasi program, serta kontribusi nyata dalam pengembangan potensi mahasiswa di berbagai bidang, yang semakin memperkuat reputasinya sebagai salah satu UKM yang unggul di lingkungan kampus."
                  }
                </p>
              </div>
            </div>
            <div className="basis-full md:basis-[45%] flex flex-col items-center justify-center pt-10 md:pt-0">
              <Image
                src="assets/images/home/hero_banner.png"
                alt="Hero Central Computer Improvement"
                width={525}
                height={381}
                responsive="true"
                className="w-full h-full max-w-[293px] max-h-[196px] md:max-w-[525px] md:max-h-[381px] object-contain"
              />
              {/* Deskripsi ketika mobile */}
              <div className="block md:hidden">
                <p className="text-center text-[20px] sm:text-[24px] pt-10 lg:pt-0 text-bluePallete-600">
                  {
                    settingsData?.description ? settingsData.description :
                      "Unit Kegiatan Mahasiswa (UKM) CCI telah berhasil meraih berbagai prestasi yang membanggakan, melalui partisipasi aktif dalam berbagai kompetisi, inovasi program, serta kontribusi nyata dalam pengembangan potensi mahasiswa di berbagai bidang, yang semakin memperkuat reputasinya sebagai salah satu UKM yang unggul di lingkungan kampus."
                  }
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* content with gradation section */}
        <span className="block h-full bg-gradientAccent">
          <div className="block h-full bg-gradientDefault">
            {/* connect section */}
            <section id="connect" className="w-full h-auto">
              {/* Layout Section Connect Pertama  */}
              <div
                id="connect-first"
                className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto pt-14 sm:pt-16"
              >
                <h2 className="text-center text-[15px] md:text-[20px] font-semibold text-secondPrimary">
                  Central Computer Improvement
                </h2>
                <h1 className="text-center text-[25px] md:text-[32px] font-bold text-bluePallete-500">
                  Connect Share Speak Up
                </h1>
                <div className="flex flex-row flex-wrap-reverse w-full pt-10 sm:pt-20 lg:pt-20">
                  <div className="mt-5 basis-full lg:basis-3/5 sm:mt-10 lg:mt-0">
                    <div
                      className={`w-full flex flex-row justify-evenly items-center space-x-3 lg:space-x-10 mt-10 xl:mt-0 ${styles.connectCardTeks}`}
                    >
                      {/* Award Data */}
                      <div
                        className={`w-[164px] h-[180px] max-w-[164px] max-h-[180px] md:max-w-[318px] md:max-h-[412px] md:w-[276px] md:h-[370px] xl:w-[318px] xl:h-[412px] mb-[30px] md:mb-[80px] rounded-[10px] rotate-[-5deg] xl:rotate-[-8deg] bg-bluePallete-300 ${styles.connectCardContainer}`}
                      >
                        <Image
                          className="w-[164px] h-[123px] md:w-[276px] md:h-[257px] xl:w-[318px] xl:h-[287px] rounded-t-[10px] object-cover"
                          src="assets/images/home/award_img_1.jpg"
                          alt="Achievement Central Computer Improvement"
                          responsive="true"
                          width={318}
                          height={287}
                        />
                        <div className="w-full h-[57px] md:h-[113px] xl:h-[125px] flex items-center justify-center p-[10px] md:p-[23px]">
                          <div className="w-full h-full items-center flex justify-between px-[10px] xl:px-[20px] my-2 md:my-4 rounded-[7px] bg-[#E1E6EE]">
                            <p className="text-[12px] md:text-[18px] xl:text-[22px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                              Achievement
                            </p>
                            {isLoading ? (
                              <Loading size="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]" />
                            ) : awardsData?.recordsTotal !== undefined &&
                              awardsData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {awardsData.recordsTotal === 0
                                  ? "0"
                                  : awardsData.recordsTotal}
                                +
                              </p>
                            ) : (
                              <TextNotFound className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                0+
                              </TextNotFound>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Member Data */}
                      <div
                        className={`w-[164px] h-[180px] max-w-[164px] max-h-[180px] md:max-w-[318px] md:max-h-[412px] md:w-[276px] md:h-[370px] xl:w-[318px] xl:h-[412px] rounded-[10px] bg-bluePallete-300 ${styles.connectCardContainer}`}
                      >
                        <Image
                          className="w-[164px] h-[123px] md:w-[276px] md:h-[257px] xl:w-[318px] xl:h-[287px] rounded-t-[10px] object-cover"
                          src="assets/images/home/award_img_2.jpg"
                          alt="Member Central Computer Improvement"
                          responsive="true"
                          width={318}
                          height={287}
                        />
                        <div className="w-full h-[57px] md:h-[113px] xl:h-[125px] flex items-center justify-center p-[10px] md:p-[23px]">
                          <div className="w-full h-full items-center flex justify-between px-[10px] xl:px-[20px] my-2 md:my-4 rounded-[7px] bg-[#E1E6EE]">
                            <p className="text-[12px] md:text-[18px] xl:text-[22px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                              Members
                            </p>
                            {isLoading ? (
                              <Loading size="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]" />
                            ) : membersData?.recordsTotal !== undefined &&
                              membersData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {membersData.recordsTotal === 0
                                  ? "0"
                                  : membersData.recordsTotal}
                                +
                              </p>
                            ) : (
                              <TextNotFound className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                0+
                              </TextNotFound>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-full lg:basis-2/5">
                    <div className="flex flex-col w-auto m-0 space-y-10 lg:m-4 xl:m-5">
                      <div className="flex flex-row mt-0 flex-start md:mt-10">
                        {/* Member Data */}
                        <div className="flex flex-col items-center space-y-1 basis-1/3 sm:items-start">
                          {isLoading ? (
                            <Loading size="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" />
                          ) : membersData?.recordsTotal !== undefined &&
                            membersData?.recordsTotal !== null ? (
                            <h3 className="text-[30px] lg:text-[40px] font-bold text-mainPrimary">
                              {membersData.recordsTotal === 0
                                ? "0"
                                : membersData.recordsTotal}
                              +
                            </h3>
                          ) : (
                            <TextNotFound className="text-[30px] lg:text-[40px] font-bold text-mainPrimary">
                              0+
                            </TextNotFound>
                          )}
                          <p className="text-[18px] md:text-[24px] text-[#2f66b46b]">
                            Members
                          </p>
                        </div>
                        {/* Award Data */}
                        <div className="flex flex-col items-center space-y-1 basis-1/3 lg:items-start lg:ml-10">
                          {isLoading ? (
                            <Loading size="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" />
                          ) : awardsData?.recordsTotal !== undefined &&
                            awardsData?.recordsTotal !== null ? (
                            <h3 className="text-[30px] lg:text-[40px] pl-[5px] sm:pl-0 font-bold text-mainPrimary">
                              {awardsData.recordsTotal === 0
                                ? "0"
                                : awardsData.recordsTotal}
                              +
                            </h3>
                          ) : (
                            <TextNotFound className="text-[30px] lg:text-[40px] pl-[5px] sm:pl-0 font-bold text-mainPrimary">
                              0+
                            </TextNotFound>
                          )}
                          <p className="text-[18px] md:text-[24px] text-[#2f66b46b]">
                            Awards
                          </p>
                        </div>
                        {/* Project Data */}
                        <div className="flex flex-col items-center space-y-1 basis-1/3 sm:items-end lg:items-start lg:ml-5">
                          {isLoading ? (
                            <Loading size="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" />
                          ) : projectsData?.recordsTotal !== undefined &&
                            projectsData?.recordsTotal !== null ? (
                            <h3 className="text-[30px] lg:text-[40px] font-bold pl-[5px] sm:pl-0 text-mainPrimary">
                              {projectsData.recordsTotal === 0
                                ? "0"
                                : projectsData.recordsTotal}
                              +
                            </h3>
                          ) : (
                            <TextNotFound className="text-[30px] lg:text-[40px] font-bold pl-[5px] sm:pl-0 text-mainPrimary">
                              0+
                            </TextNotFound>
                          )}
                          <p className="text-[18px] md:text-[24px] text-[#2f66b46b]">
                            Projects
                          </p>
                        </div>
                      </div>
                      <div className="hidden lg:block">
                        <div className="flex flex-col space-y-3 pr-0 xl:pr-[29px]">
                          <h2 className="text-[40px] font-bold text-mainPrimary">
                            Penghargaan
                          </h2>
                          <p className="text-[24px] leading-10 lg:leading-9 text-mainPrimary">
                            Unit Kegiatan Mahasiswa (UKM) CCI telah berhasil meraih berbagai prestasi yang membanggakan, melalui partisipasi aktif dalam berbagai kompetisi, inovasi program, serta kontribusi nyata dalam pengembangan potensi mahasiswa di berbagai bidang, yang semakin memperkuat reputasinya sebagai salah satu UKM yang unggul di lingkungan kampus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block mt-1 lg:hidden sm:mt-14">
                  <div className="flex flex-col space-y-3 pr-0 xl:pr-[29px]">
                    <h2 className="text-[25px] lg:text-[40px] font-bold text-mainPrimary">
                      Penghargaan
                    </h2>
                    <p className="text-[15px] lg:text-[24px] text-mainPrimary">
                      Unit Kegiatan Mahasiswa (UKM) CCI telah berhasil meraih berbagai prestasi yang membanggakan, melalui partisipasi aktif dalam berbagai kompetisi, inovasi program, serta kontribusi nyata dalam pengembangan potensi mahasiswa di berbagai bidang, yang semakin memperkuat reputasinya sebagai salah satu UKM yang unggul di lingkungan kampus.
                    </p>
                  </div>
                </div>
              </div>
              {/* Layout Section Connect Kedua */}
              <div
                id="connect-second"
                className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0 pb-10 sm:pb-20 mt-10 lg:mt-40"
              >
                <div className="flex flex-row flex-wrap-reverse w-full">
                  <div className="flex items-center basis-full lg:basis-2/5">
                    <div className="flex flex-col mt-1 space-y-4 sm:mt-14 lg:mt-0">
                      <h2 className="text-[25px] md:text-[30px] lg:text-[40px] text-right lg:text-left font-bold text-mainPrimary">
                        Jumlah Project
                      </h2>
                      <div className="text-[15px] md:text-[20px] lg:text-[24px] text-left leading-5 lg:leading-10 text-mainPrimary">
                        <span>
                          UKM CCI juga melaksanakan berbagai proyek, di mana anggota UKM CCI diberikan pelatihan untuk mengembangkan keterampilan dalam merancang dan melaksanakan proyek-proyek tersebut. Melalui bimbingan dan pembelajaran langsung, mereka diajarkan untuk membuat proyek yang inovatif dan bermanfaat, baik untuk pengembangan pribadi maupun kontribusi kepada masyarakat luas. Sebanyak 
                        </span>
                        {isLoading ? (
                          <Loading size="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]" />
                        ) : projectsData?.recordsTotal !== undefined &&
                          projectsData?.recordsTotal !== null ? (
                          <span className="pl-1">
                            {projectsData.recordsTotal === 0
                              ? "0"
                              : projectsData.recordsTotal}{" "}
                            +
                          </span>
                        ) : (
                          <TextNotFound>0+</TextNotFound>
                        )}
                        <span> yang dilakukan oleh semua divisi yang ada.</span>
                      </div>
                    </div>
                  </div>
                  <div className="basis-full lg:basis-3/5">
                    <div
                      className={`w-full flex flex-row justify-evenly items-center space-x-3 sm:space-x-5 lg:space-x-10 ${styles.connectCardTeks}`}
                    >
                      {/* Award Data */}
                      <div
                        className={`w-[164px] h-[180px] max-w-[164px] max-h-[180px] md:max-w-[318px] md:max-h-[412px] md:w-[276px] md:h-[370px] xl:w-[318px] xl:h-[412px] rounded-[10px] bg-bluePallete-300 ${styles.connectCardContainer}`}
                      >
                        <Image
                          className="w-[164px] h-[123px] md:w-[276px] md:h-[257px] xl:w-[318px] xl:h-[287px] rounded-t-[10px] object-cover"
                          src="assets/images/home/connect_card.png"
                          alt="Achievement Central Computer Improvement"
                          responsive="true"
                          width={318}
                          height={287}
                        />
                        <div className="w-full h-[57px] md:h-[113px] xl:h-[125px] flex items-center justify-center p-[10px] md:p-[23px]">
                          <div className="w-full h-full items-center flex justify-between px-[10px] xl:px-[20px] my-2 md:my-4 rounded-[7px] bg-[#E1E6EE]">
                            <p className="text-[12px] md:text-[18px] xl:text-[22px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                              Achievement
                            </p>
                            {isLoading ? (
                              <Loading size="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]" />
                            ) : awardsData?.recordsTotal !== undefined &&
                              awardsData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {awardsData.recordsTotal === 0
                                  ? "0"
                                  : awardsData.recordsTotal}
                                +
                              </p>
                            ) : (
                              <TextNotFound className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                0+
                              </TextNotFound>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* Member Data */}
                      <div
                        className={`w-[164px] h-[180px] max-w-[164px] max-h-[180px] md:max-w-[318px] md:max-h-[412px] md:w-[276px] md:h-[370px] xl:w-[318px] xl:h-[412px] mb-[30px] md:mb-[80px] rounded-[10px] rotate-[5deg] xl:rotate-[8deg] bg-bluePallete-300 ${styles.connectCardContainer}`}
                      >
                        <Image
                          className="w-[164px] h-[123px] md:w-[276px] md:h-[257px] xl:w-[318px] xl:h-[287px] rounded-t-[10px] object-cover"
                          src="assets/images/home/connect_card.png"
                          alt="Member Central Computer Improvement"
                          responsive="true"
                          width={318}
                          height={287}
                        />
                        <div className="w-full h-[57px] md:h-[113px] xl:h-[125px] flex items-center justify-center p-[10px] md:p-[23px]">
                          <div className="w-full h-full items-center flex justify-between px-[10px] xl:px-[20px] my-2 md:my-4 rounded-[7px] bg-[#E1E6EE]">
                            <p className="text-[12px] md:text-[18px] xl:text-[22px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                              Members
                            </p>
                            {isLoading ? (
                              <Loading size="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]" />
                            ) : membersData?.recordsTotal !== undefined &&
                              membersData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {membersData.recordsTotal === 0
                                  ? "0"
                                  : membersData.recordsTotal}
                                +
                              </p>
                            ) : (
                              <TextNotFound className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                0+
                              </TextNotFound>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* division section */}
            <section
              id="divisionArea"
              className="w-full h-[540px] md:h-[500px] flex justify-center items-start"
            >
              <div className="w-full flex flex-row flex-wrap mt-[50px] md:mt-[70px] xl:mt-[130px]">
                {/* container tagline */}
                <div className={`w-full h-auto basis-full md:basis-[35%] lg:basis-[40%] flex justify-center items-center md:pl-[70px] lg:pl-[40px] xl:pl-[50px] 2xl:pl-[250px] ${styles.divisionContainerTagline}`}>
                  <h1 className={`font-black text-center text-[30px] lg:text-[50px] xl:text-[60px] text-bluePallete-800 leading-tight ${styles.divisionTagline}`}>
                    GET TO KNOW{" "}
                    <span className="text-secondPrimary">OUR DIVISIONS</span>
                  </h1>
                </div>
                {/* container card */}
                <div className={`basis-full md:basis-[65%] lg:basis-[59%] w-auto h-auto sm:max-w-[60%] md:max-w-[65%] lg:max-w-[60%] ${styles.divisionCardContainer}`}>
                  <div className="hidden md:block">
                    <DivisionFirstSlider divisionsData={divisionsData} isLoading={isLoading}/>
                  </div>
                  <div className="block md:hidden">
                    <DivisionSecondSlider divisionsData={divisionsData} isLoading={isLoading}/>
                  </div>
                </div>
              </div>
            </section>
            {/* project section */}               
            <section id="projects" className="w-full h-auto">
              <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0">
                <div className="w-full flex flex-col space-y-[60px] sm:space-y-[80px] lg:space-y-10 mb-12 sm:mt-0 py-0 sm:py-20">
                  <div className="flex flex-col items-center justify-between w-full h-auto space-y-4 lg:space-y-5">
                    <h1 className="font-black sm:font-extrabold text-center text-[20px] leading-tight sm:text-[26px] md:text-[50px] px-0 lg:px-52 text-bluePallete-800">
                      Showcasing Our Work: Achievements and Capabilities of
                      Central Computer Improvement
                    </h1>
                    <p className="font-semibold sm:font-medium text-center text-[12px] leading-tight sm:text-[18px] md:text-[30px] px-0 lg:px-32 text-bluePallete-800">
                      Explore our diverse projects and witness the passion,
                      creativity, and impact of Central Computer Improvement
                    </p>
                    <Link className="text-center" href="/projects">
                      <button className="w-[151px] h-[45px] md:w-[311px] md:h-[90px] text-[12px] md:text-[25px] font-bold rounded-lg text-white bg-bluePallete-800">
                          Explore Our Projects
                      </button>
                    </Link>
                    <ProjectCard projectsDataSecond={projectsDataSecond} isLoading={isLoading} />
                  </div>
                </div>
              </div>
            </section>
            {/* news section */}
            <section id="news" className="w-full h-auto">
              {/* content ini hanya akan muncul jika ukuran layar diatas ukuran layar handphone */}
              <div className="hidden sm:block">
                <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0">
                  <div className="w-full flex flex-col spaced-y-5 pb-[40px] sm:pb-[50px] items-center">
                    <h1 className="text-[22px] sm:text-[50px] lg:text-[80px] text-center font-black text-bluePallete-800">
                      Keep Up With Our Latest News
                    </h1>
                    <p className="text-[10px] sm:text-[20px] md:text-[30px] text-center font-medium md:px-[10px] lg:px-[120px] xl:px-[200px] text-bluePallete-800">
                      Contains community activities, competitions, events, and
                      Central Computer Improvement recruitment information
                    </p>
                    {/* carousel ini hanya akan muncul jika ukuran layar diatas ukuran layar handphone */}
                    <div className="static flex flex-col w-full h-full">
                      <NewsFirstSlider newsData={newsData} isLoading={isLoading} />
                    </div>
                  </div>
                </div>
              </div>
              {/* content ini hanya akan muncul jika ukuran layar masuk ke ukuran layar handphone */}
              <div className="block sm:hidden">
                <div className="flex flex-col w-full h-auto">
                  <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0">
                    <div className="w-full flex flex-col spaced-y-5 pb-[30px] sm:pb-[50px] items-center">
                      <h1 className="text-[22px] sm:text-[50px] lg:text-[80px] text-center font-[700] text-bluePallete-800">
                        Keep Up With Our Latest News
                      </h1>
                      <p className="text-[12px] sm:text-[20px] md:text-[30px] text-center font-semibold sm:font-medium md:px-[10px] lg:px-[120px] xl:px-[200px] text-black">
                        Contains community activities, competitions, events, and
                        Central Computer Improvement recruitment information
                      </p>
                    </div>
                  </div>
                  {/* carousel ini hanya akan muncul jika ukuran layar masuk ke ukuran layar handphone */}
                  <div className="h-auto">
                    <NewsSecondSlider newsData={newsData} isLoading={isLoading} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </span>
      </main>
    </>
  );
};