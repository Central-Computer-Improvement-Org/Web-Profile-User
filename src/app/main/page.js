"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify-icon/react';

import request from "../utils/request";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import styles from "@/app/main/mainPage.module.css";

export default function Hero() {
  const [settingsData, setSettingsData] = useState(null);
  const [awardData, setAwardData] = useState(null);
  const [memberData, setMemberData] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    request
      .get("/settings/setting/")
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
        const response = await request.get("/awards/");
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
        const response = await request.get("/members/");
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
        const response = await request.get("/projects/");
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
        <div>
          <Image
            className={`${styles.homeGradasiKanan} !w-[700px] !h-[700px]`}
            src="assets/circleLeft.png"
            alt="Icon Gradasi Right"
            width={787}
            height={787}
            layout="responsive"
            responsive="true"
          />
          <section
            id="hero"
            className="w-full h-auto pb-20 sm:pb-32 pt-20 sm:pt-[170px]"
          >
            <div className="w-full xl:max-w-[1300px] lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md px-5 sm:px-0 mx-auto flex flex-row flex-wrap">
              <div className="basis-full md:basis-[55%] flex flex-col space-y-8">
                <Image
                  src={
                    isLoading
                      ? "Loading..."
                      : settingsData?.logoUri || "assets/logo/images/logo.svg"
                  }
                  alt="Logo Central Computer Improvement"
                  width={291}
                  height={180}
                  responsive="true"
                  className="hidden md:block w-auto h-auto md:w-full md:h-[180px] max-w-[291px] max-h-[180px] object-contain"
                />
                <div className="flex flex-col space-y-1">
                  <h1 className="text-[40px] sm:text-[56px] text-center md:text-left font-bold px-3 sm:px-0 text-bluePallete-600">
                    {isLoading
                      ? "Loading..."
                      : settingsData?.titleWebsite ||
                        "Central Computer Improvement"}
                  </h1>
                </div>
                {/* Deskripsi ketika desktop */}
                <p className="hidden md:block text-[24px] pr-5 text-bluePallete-600">
                  {isLoading
                    ? "Loading..."
                    : settingsData?.description ||
                      "Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada bidang ICT (Information, Communication and Technology)."}
                </p>
                <div className="w-[206px] sm:w-[250px] h-[55px] md:h-[60px] flex items-center justify-around border-2 border-[#1c3e6c] rounded-[15px] sm:rounded-[10px] cursor-pointer bg-white">
                  <Link href="home" className="!text-[22px] font-bold text-bluePallete-700">
                    Selengkapnya
                  </Link>
                  <Icon icon="mingcute:arrow-right-line" width="23" height="30" classID="w-[20px] h-[26px] sm:w-[23px] sm:h-[30px]"  style={{color: "#265290"}} />
                </div>
              </div>
              {/* Data hero bagian kanan */}
              <div className="basis-full md:basis-[45%] flex flex-wrap items-center pt-10 md:pt-0">
                <div className="w-full flex justify-end">
                  <Image
                    src="assets/home/images/hero-banner.png"
                    alt="Hero Central Computer Improvement"
                    width={525}
                    height={381}
                    responsive="true"
                    className="w-full h-full max-w-[293px] max-h-[196px] md:max-w-[525px] md:max-h-[381px] object-cover"
                  />
                </div>
                {/* Data Member, Award, dan Project */}
                <div className="w-full md:width-[45%] h-auto hidden sm:block">
                  <div className="w-full flex flex-row flex-end mt-0 md:mt-10">
                    <div className="basis-1/3 flex flex-col items-center space-y-1">
                      <h3 className="text-[30px] lg:text-[40px] font-bold text-bluePallete-700">
                        {memberData?.recordsTotal || "..."}+
                      </h3>
                      <p className="text-[18px] md:text-[24px] text-bluePallete-700">
                        Members
                      </p>
                    </div>
                    <div className="basis-1/3 flex flex-col items-center space-y-1">
                      <h3 className="text-[30px] lg:text-[40px] pl-[5px] sm:pl-0 font-bold text-bluePallete-700">
                        {awardData?.recordsTotal ||
                        awardData?.recordsTotal === 0
                          ? awardData?.recordsTotal
                          : "..."}
                        +
                      </h3>
                      <p className="text-[18px] md:text-[24px] text-bluePallete-700">
                        Awards
                      </p>
                    </div>
                    <div className="basis-1/3 flex flex-col items-center space-y-1">
                      <h3 className="text-[30px] lg:text-[40px] font-bold pl-[5px] sm:pl-0 text-bluePallete-700">
                        {projectData?.recordsTotal || "..."}+
                      </h3>
                      <p className="text-[18px] md:text-[24px] text-bluePallete-700">
                        Projects
                      </p>
                    </div>
                  </div>
                </div>
                {/* Deskripsi ketika mobile */}
                <p className="text-center block md:hidden text-[20px] sm:text-[24px] pt-10 lg:pt-0 text-bluePallete-600">
                  {isLoading
                    ? "Loading..."
                    : settingsData?.description ||
                      "Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada bidang ICT (Information, Communication and Technology)."}
                </p>
              </div>
            </div>
          </section>
          <Image
            className={`${styles.homeGradasiKiri} !w-[700px] !h-[700px]`}
            src="assets/circleRight.png"
            alt="Icon Gradasi Left"
            width={787}
            height={787}
            layout="responsive"
            responsive="true"
          />
        </div>
      </main>
    </>
  );
}
