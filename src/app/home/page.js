"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import request from "../utils/request";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NewsFirstSlider from "@/components/Home/newsFirstSlider";
import NewsSecondSlider from "@/components/Home/newsSecondSlider";
import DivisionFirstSlider from "@/components/Home/divisionFirstSlider";
import DivisionSecondSlider from "@/components/Home/divisionSecondSlider";
import ProjectCard from "@/components/Home/projectCard";
import Loading from "@/components/loading";
import ImageNotFound from "@/components/imageNotFound";
import TextNotFound from "@/components/teksNotFound";
import styles from "@/app/home/homePage.module.css";
import { host } from "@/components/host";

export default function Home() {
  const [settingsData, setSettingsData] = useState(null);
  const [awardData, setAwardData] = useState(null);
  const [memberData, setMemberData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    request
      .get("/setting")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setSettingsData(response.data.data);
        } else {
          console.error(JSON.stringify(response.errors));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    const fetchAwardData = async () => {
      try {
        const response = await request.get("/awards");
        if (response.status === 200 || response.status === 201) {
          setAwardData(response.data);
        } else {
          console.error(JSON.stringify(response.errors));
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchMemberData = async () => {
      try {
        const response = await request.get("/users");
        if (response.status === 200 || response.status === 201) {
          setMemberData(response.data);
        } else {
          console.error(JSON.stringify(response.errors));
        }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProjectData = async () => {
      try {
        const response = await request.get("/projects");
        if (response.status === 200 || response.status === 201) {
          setProjectData(response.data);
        } else {
          console.error(JSON.stringify(response.errors));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAwardData();
    fetchMemberData();
    fetchProjectData();

    setIsLoading(false);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full h-auto">
        <section
          id="hero"
          className="w-full h-auto pb-20 sm:pb-32 pt-20 sm:pt-[200px]"
        >
          <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto flex flex-row flex-wrap">
            <div className="basis-full md:basis-[55%] flex flex-col space-y-10">
              <div className="hidden md:block">
                {isLoading ? (
                  <Loading
                    size="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]"
                    textAlignment="text-left"
                  />
                ) : settingsData?.logoUri ? (
                  <Image
                    src={`${host}${settingsData.logoUri}`}
                    alt="Logo Central Computer Improvement"
                    width={291}
                    height={180}
                    responsive="true"
                    className="w-auto h-auto md:w-full md:h-[180px] max-w-[291px] max-h-[180px] object-contain"
                  />
                ) : (
                  <ImageNotFound className="hidden md:block w-auto h-auto md:w-[400px] md:h-[300px] object-contain" />
                )}
              </div>
              <div className="flex flex-col space-y-1">
                {isLoading ? (
                  <Loading
                    size="w-[70px] h-[70px]"
                    textAlignment="text-center md:text-left"
                  />
                ) : settingsData?.name ? (
                  <h1 className="text-[40px] sm:text-[56px] text-center md:text-left font-bold px-3 sm:px-0 text-bluePallete-600">
                    {settingsData.name}
                  </h1>
                ) : (
                  <TextNotFound className="text-[40px] sm:text-[56px] text-center md:text-left font-bold px-3 sm:px-0 text-bluePallete-600"></TextNotFound>
                )}
              </div>
              {/* Deskripsi ketika desktop */}
              <div className="hidden md:block">
                {isLoading ? (
                  <Loading
                    size="w-[60px] h-[60px]"
                    textAlignment="text-left"
                  />
                ) : settingsData?.description ? (
                  <p className="text-[24px] pr-5 text-bluePallete-600">
                    {settingsData.description}
                  </p>
                ) : (
                  <TextNotFound className="text-[24px] pr-5 text-bluePallete-600"></TextNotFound>
                )}
              </div>
            </div>
            <div className="basis-full md:basis-[45%] flex flex-col flex-wrap items-center justify-center pt-10 md:pt-0">
              <Image
                src="assets/home/images/hero-banner.png"
                alt="Hero Central Computer Improvement"
                width={525}
                height={381}
                responsive="true"
                className="w-full h-full max-w-[293px] max-h-[196px] md:max-w-[525px] md:max-h-[381px] object-contain"
              />
              {/* Deskripsi ketika mobile */}
              <div className="block md:hidden">
                {isLoading ? (
                  <Loading
                    size="w-[40px] h-[40px]"
                    textAlignment="text-left"
                  />
                ) : settingsData?.description ? (
                  <p className="text-center text-[20px] sm:text-[24px] pt-10 lg:pt-0 text-bluePallete-600">
                    {settingsData.description}
                  </p>
                ) : (
                  <TextNotFound className="text-center text-[20px] sm:text-[24px] pt-10 lg:pt-0 text-bluePallete-600"></TextNotFound>
                )}
              </div>
            </div>
          </div>
        </section>
        <span className="block h-full bg-gradientAccent">
          <div className="block h-full bg-gradientDefault">
            
            <section id="connect" className="w-full h-auto">
              {/* Layout Section Connect Pertama  */}
              <div
                id="connect-first"
                className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto pt-14 sm:pt-32"
              >
                {isLoading ? (
                  <Loading
                    size="w-[20px] h-[20px] sm:w-[50px] sm:h-[50px]"
                    textAlignment="text-center"
                  />
                ) : settingsData?.name ? (
                  <h2 className="text-center text-[15px] md:text-[20px] font-semibold text-secondPrimary">
                    {settingsData.name}
                  </h2>
                ) : (
                  <TextNotFound className="text-center text-[15px] md:text-[20px] font-semibold text-secondPrimary"></TextNotFound>
                )}
                <h1 className="text-center text-[25px] md:text-[32px] font-bold text-bluePallete-500">
                  Connect Share Speak Up
                </h1>
                <div className="w-full flex flex-row flex-wrap-reverse pt-10 sm:pt-20 lg:pt-32">
                  <div className="basis-full lg:basis-3/5 mt-5 sm:mt-10 lg:mt-0">
                    <div
                      className={`w-full flex flex-row justify-evenly items-center space-x-3 lg:space-x-10 mt-10 xl:mt-0 ${styles.connectCardTeks}`}
                    >
                      {/* Award Data */}
                      <div
                        className={`w-[164px] h-[180px] max-w-[164px] max-h-[180px] md:max-w-[318px] md:max-h-[412px] md:w-[276px] md:h-[370px] xl:w-[318px] xl:h-[412px] mb-[30px] md:mb-[80px] rounded-[10px] rotate-[-5deg] xl:rotate-[-8deg] bg-bluePallete-300 ${styles.connectCardContainer}`}
                      >
                        <Image
                          className="w-[164px] h-[123px] md:w-[276px] md:h-[257px] xl:w-[318px] xl:h-[287px] rounded-t-[10px] object-cover"
                          src="assets/home/images/connect-card.png"
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
                            ) : awardData?.recordsTotal !== undefined &&
                              awardData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {awardData.recordsTotal === 0
                                  ? "0"
                                  : awardData.recordsTotal}
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
                          src="assets/home/images/connect-card.png"
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
                            ) : memberData?.recordsTotal !== undefined &&
                              memberData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {memberData.recordsTotal === 0
                                  ? "0"
                                  : memberData.recordsTotal}
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
                    <div className="w-auto flex flex-col space-y-10 m-0 lg:m-4 xl:m-5">
                      <div className="flex flex-row flex-start mt-0 md:mt-10">
                        {/* Member Data */}
                        <div className="basis-1/3 flex flex-col items-center sm:items-start space-y-1">
                          {isLoading ? (
                            <Loading size="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" />
                          ) : memberData?.recordsTotal !== undefined &&
                            memberData?.recordsTotal !== null ? (
                            <h3 className="text-[30px] lg:text-[40px] font-bold text-mainPrimary">
                              {memberData.recordsTotal === 0
                                ? "0"
                                : memberData.recordsTotal}
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
                        <div className="basis-1/3 flex flex-col items-center lg:items-start space-y-1 lg:ml-10">
                          {isLoading ? (
                            <Loading size="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" />
                          ) : awardData?.recordsTotal !== undefined &&
                            awardData?.recordsTotal !== null ? (
                            <h3 className="text-[30px] lg:text-[40px] pl-[5px] sm:pl-0 font-bold text-mainPrimary">
                              {awardData.recordsTotal === 0
                                ? "0"
                                : awardData.recordsTotal}
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
                        <div className="basis-1/3 flex flex-col items-center sm:items-end lg:items-start space-y-1 lg:ml-5">
                          {isLoading ? (
                            <Loading size="w-[20px] h-[20px] sm:w-[40px] sm:h-[40px]" />
                          ) : projectData?.recordsTotal !== undefined &&
                            projectData?.recordsTotal !== null ? (
                            <h3 className="text-[30px] lg:text-[40px] font-bold pl-[5px] sm:pl-0 text-mainPrimary">
                              {projectData.recordsTotal === 0
                                ? "0"
                                : projectData.recordsTotal}
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
                          <p className="text-[24px] leading-9 lg:leading-10 text-mainPrimary">
                            Unit Kegiatan Mahasiswa Universitas Telkom yang
                            berfokus pada bidang ICT (Information, Communication
                            and Technology).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block lg:hidden mt-1 sm:mt-14">
                  <div className="flex flex-col space-y-3 pr-0 xl:pr-[29px]">
                    <h2 className="text-[25px] lg:text-[40px] font-bold text-mainPrimary">
                      Penghargaan
                    </h2>
                    <p className="text-[15px] lg:text-[24px] text-mainPrimary">
                      Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus
                      pada bidang ICT (Information, Communication and
                      Technology).
                    </p>
                  </div>
                </div>
              </div>
              {/* Layout Section Connect Kedua */}
              <div
                id="connect-second"
                className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0 pb-10 sm:pb-20 mt-10 lg:mt-40"
              >
                <div className="w-full flex flex-row flex-wrap-reverse">
                  <div className="basis-full lg:basis-2/5 flex items-center">
                    <div className="flex flex-col space-y-4 mt-1 sm:mt-14 lg:mt-0">
                      <h2 className="text-[25px] md:text-[30px] lg:text-[40px] text-right lg:text-left font-bold text-mainPrimary">
                        Jumlah Project
                      </h2>
                      <div className="text-[15px] md:text-[20px] lg:text-[24px] text-right lg:text-left leading-5 lg:leading-10 text-mainPrimary">
                        <span>
                          Unit Kegiatan Mahasiswa Universitas Telkom Central
                          Computer Improvment telah berhasil membuat project
                          sebanyak{" "}
                        </span>
                        {isLoading ? (
                          <Loading size="w-[10px] h-[10px] sm:w-[20px] sm:h-[20px]" />
                        ) : projectData?.recordsTotal !== undefined &&
                          projectData?.recordsTotal !== null ? (
                          <span>
                            {projectData.recordsTotal === 0
                              ? "0"
                              : projectData.recordsTotal}{" "}
                            +
                          </span>
                        ) : (
                          <TextNotFound>0+</TextNotFound>
                        )}
                        <span> yang dilakukan oleh semua divisi yang ada</span>
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
                          src="assets/home/images/connect-card.png"
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
                            ) : awardData?.recordsTotal !== undefined &&
                              awardData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {awardData.recordsTotal === 0
                                  ? "0"
                                  : awardData.recordsTotal}
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
                          src="assets/home/images/connect-card.png"
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
                            ) : memberData?.recordsTotal !== undefined &&
                              memberData?.recordsTotal !== null ? (
                              <p className="text-[13px] md:text-[21px] xl:text-[25px] text-center font-bold px-0 py-3 md:py-5 text-bluePallete-700">
                                {memberData.recordsTotal === 0
                                  ? "0"
                                  : memberData.recordsTotal}
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

            <section
              id="divisionPage"
              className="w-full h-[540px] md:h-[500px] flex justify-center items-start"
            >
              <div className="w-full flex flex-row flex-wrap mt-[50px] md:mt-[70px] xl:mt-[130px]">
                <div
                  className={`w-full h-auto basis-full md:basis-[35%] lg:basis-[40%] flex justify-center items-center md:pl-[70px] lg:pl-[40px] xl:pl-[80px] ${styles.divisionContainerTagline}`}
                >
                  <h1
                    className={`font-black text-center text-[30px] lg:text-[50px] xl:text-[60px] text-bluePallete-800 ${styles.divisionTagline}`}
                  >
                    GET TO KNOW{" "}
                    <span className="text-secondPrimary">OUR DIVISIONS</span>
                  </h1>
                </div>
                <div
                  className={`basis-full md:basis-[65%] lg:basis-[59%] w-auto h-auto sm:max-w-[60%] md:max-w-[65%] lg:max-w-[60%] ${styles.divisionCardContainer}`}
                >
                  <div className="hidden md:block">
                    <DivisionFirstSlider />
                  </div>
                  <div className="block md:hidden">
                    <DivisionSecondSlider />
                  </div>
                </div>
              </div>
            </section>

            <section id="projects" className="w-full h-auto">
              <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0">
                <div className="w-full flex flex-col space-y-[60px] sm:space-y-[80px] lg:space-y-10 mb-12 sm:mt-0 py-0 sm:py-20">
                  <div className="w-full h-auto flex flex-col items-center justify-between space-y-4 lg:space-y-5">
                    <h1 className="font-black sm:font-bold text-center text-[20px] sm:text-[26px] md:text-[50px] px-0 lg:px-52 text-bluePallete-800">
                      Showcasing Our Work: Achievements and Capabilities of
                      Central Computer Improvement
                    </h1>
                    <p className="font-semibold sm:font-medium text-center text-[12px] sm:text-[18px] md:text-[30px] px-0 lg:px-32 text-bluePallete-800">
                      Explore our diverse projects and witness the passion,
                      creativity, and impact of Central Computer Improvement
                    </p>
                    <button className="w-[151px] h-[45px] md:w-[311px] md:h-[90px] text-[12px] md:text-[25px] font-bold rounded-lg text-white bg-bluePallete-800">
                      <Link className="text-center" href="/projects">
                        Explore Our Projects
                      </Link>
                    </button>
                    <ProjectCard />
                  </div>
                </div>
              </div>
            </section>

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
                    <div className="static w-full h-full flex flex-col">
                      <NewsFirstSlider />
                    </div>
                  </div>
                </div>
              </div>
              {/* content ini hanya akan muncul jika ukuran layar masuk ke ukuran layar handphone */}
              <div className="block sm:hidden">
                <div className="w-full h-auto flex flex-col">
                  <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto px-5 sm:px-0">
                    <div className="w-full flex flex-col spaced-y-5 pb-[30px] sm:pb-[50px] items-center">
                      <h1 className="text-[22px] sm:text-[50px] lg:text-[80px] text-center font-black text-bluePallete-800">
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
                    <NewsSecondSlider />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </span>
      </main>
      <Footer />
    </>
  );
}
