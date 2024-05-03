"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import request from "@/app/utils/request";
import styles from "@/components/Home/homeComponent.module.css";

const ProjectData = () => {
  const [projectData, setProjectData] = useState(null);
  const [positionIndex, setPositionIndex] = useState(0);
  const [isMovingData, setIsMovingData] = useState(false);
  const [circleColor, setCircleColor] = useState("#152e51");
  const [pathColor, setPathColor] = useState("white");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setProjectData(null);

    request
      .get("/projects")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          const sortedData = response.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setProjectData(sortedData);
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

  // handle di bagian pergantian warna icon arrow
  useEffect(() => {
    const handleCircleColor = () => {
      if (window.innerWidth > 1024) {
        setCircleColor("#152e51");
      } else {
        setCircleColor("white");
      }
    };

    const handlePathColor = () => {
      if (window.innerWidth > 1024) {
        setPathColor("white");
      } else {
        setPathColor("#152e51");
      }
    };

    window.addEventListener("resize", handleCircleColor);
    window.addEventListener("resize", handlePathColor);
    handleCircleColor();
    handlePathColor();

    return () => {
      window.removeEventListener("resize", handleCircleColor);
    };
  }, []);

  // handle fungsi pergantian data project
  const handleProjectArrow = useCallback(
    (type) => {
      setIsMovingData(true);
      setIsLoading(true);

      if (type === "left") {
        setPositionIndex((prevData) =>
          prevData === 0 ? projectData.length - 1 : prevData - 1
        );
      } else if (type === "right") {
        setPositionIndex((prevData) =>
          prevData === projectData.length - 1 ? 0 : prevData + 1
        );
      }
    },
    [projectData]
  );

  // handle penambahan skeleton loading saat data berpindah
  useEffect(() => {
    if (isMovingData) {
      const timeout = setTimeout(() => {
        setIsMovingData(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isMovingData]);

  // handle rendering data yang tadinya loading setelah data berpindah
  useEffect(() => {
    if (!isMovingData) {
      setIsLoading(false);
    }
  }, [isMovingData]);

  // handle pemotongan nama project maksimal 12 char
  const cutNameProject = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return `${str.substring(0, maxLength)}...`;
  };

  return (
    <>
      <div
        className={`static w-full h-auto lg:h-[340px] xl:h-auto flex flex-row flex-wrap py-8 px-8 sm:px-10 rounded-[20px] sm:rounded-lg lg:border-[3px] lg:border-bluePallete-600 bg-bluePallete-800 lg:bg-transparent ${styles.projectContainer}`}
      >
        <div
          className={`absolute lg:top-full lg:static basis-full lg:basis-2/5 flex items-center justify-center inset-x-0 lg:inset-x-full top-[1790px] sm:top-[2160px] md:top-[2970px] ${styles.projectsContainerThumbnail}`}
        >
          {isMovingData || isLoading || !projectData ? (
            <Skeleton
              width="auto"
              height="auto"
              style={{ borderRadius: "20px" }}
            />
          ) : (
            <Image
              src={projectData[positionIndex].imageUri || "Loading..."}
              alt="Thumbnail Project Central Computer Improvement"
              width={467}
              height={284}
              responsive="true"
              className={`w-[290px] h-[270px] sm:w-[480px] sm:h-[267px] md:w-full md:h-[350px] max-w-[650px] max-h-[370px] lg:max-w-[467px] lg:max-h-[284px] rounded-[20px] sm:rounded-lg object-cover ${styles.projectsThumbnailImage}`}
            />
          )}
        </div>
        <div
          className={`basis-full lg:basis-3/5 mt-[180px] sm:mt-[230px] md:mt-[300px] lg:mt-0 pl-0 lg:pl-7 flex flex-col justify-between space-y-2 sm:space-y-5 lg:space-y-0 ${styles.projectContainerInfo}`}
        >
          {/* Project Judul Container */}
          <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center space-y-2 sm:space-y-0">
            <div className="w-auto h-[39px] sm:h-auto flex flex-row justify-center sm:justify-normal items-center px-3 py-1 space-x-1 sm:space-x-2 rounded-[10px] bg-white lg:bg-transparent">
              {/* Project Icon  */}
              <div className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px]">
                {isMovingData || isLoading || !projectData ? (
                  <Skeleton circle={true} width="100%" height="100%" />
                ) : (
                  <Image
                    src={projectData[positionIndex].iconUri}
                    alt="Logo Project Central Computer Improvement"
                    width={50}
                    height={50}
                    responsive="true"
                    className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px] lg:w-[50px] lg:h-[50px] object-cover"
                  />
                )}
              </div>
              {/* Project Title */}
              <div className="hidden sm:block ml-[10px] font-bold text-[8px] sm:text-[18px] text-bluePallete-600 lg:text-black">
                {isMovingData || isLoading || !projectData ? (
                  <Skeleton width={200} height={20} />
                ) : (
                  <p>{cutNameProject(projectData[positionIndex].name, 21)}</p>
                )}
              </div>
              {/* Project Title Mobile */}
              <div className={`block sm:hidden font-bold text-[18px] text-bluePallete-600 ${styles.projectTitleMobile}`}>
                {isMovingData || isLoading || !projectData ? (
                  <Skeleton width={100} height={20} />
                ) : (
                  <p>{cutNameProject(projectData[positionIndex].name, 21)}</p>
                )}
              </div>
            </div>
          </div>
          {/* Project Deskripsi */}
          <div
            className={`h-auto font-medium text-start text-[15px] !mt-4 md:!mt-0 lg:text-[20px] leading-[20px] sm:leading-7 md:text-justify overflow-hidden  text-white lg:text-black ${styles.projectsDesc}`}
          >
            {isMovingData || isLoading || !projectData ? (
              <Skeleton count={3} />
            ) : (
              <p>{projectData[positionIndex].description}</p>
            )}
          </div>
          <div
            className={`flex flex-row flex-wrap justify-between lg:justify-start items-center space-x-0 md:space-x-5`}
          >
            {/* Button go to website */}
            <div
              onClick={() =>
                window.open(projectData[positionIndex].productionUri, "_blank")
              }
              className={`w-[168px] h-[39px] sm:w-auto sm:h-auto flex flex-row justify-start sm:justify-between items-center py-1 sm:py-2 xl:py-3 px-2 sm:px-5 rounded-[5px] sm:rounded-[15px] bg-white lg:bg-bluePallete-900 sm:hover:bg-white transition-colors text-black lg:text-bluePallete-100 sm:hover:text-black duration-300 ease-in-out cursor-pointer ${styles.projectsContainerRepository}`}
            >
              <svg
                className="hidden lg:block lg:w-[25px] lg:h-[25px]"
                width="25"
                height="25"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="Icon Website Central Computer Improvement"
              >
                <path
                  className={`${styles.projectsIconRepository}`}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.50488 0.5C1.13429 0.5 0 1.62616 0 2.99674V22.9967C0 24.3673 1.13429 25.5 2.50488 25.5H22.5033C23.8738 25.5 25 24.3673 25 22.9967V2.99674C25 1.62616 23.8738 0.5 22.5033 0.5H2.50488ZM2.50488 2.16016H22.5033C22.9793 2.16016 23.3398 2.52065 23.3398 2.99674V7.16341H7.50325C6.37683 7.14766 6.37683 8.84548 7.50325 8.83008H23.3398V22.9967C23.3398 23.4728 22.9793 23.8333 22.5033 23.8333H2.50488C2.0288 23.8333 1.66667 23.4728 1.66667 22.9967V8.83008H4.16992C5.29634 8.84583 5.29634 7.14801 4.16992 7.16341H1.66667V2.99674C1.66667 2.52065 2.0288 2.16016 2.50488 2.16016ZM4.16992 3.83008C3.70968 3.83008 3.33658 4.20316 3.33659 4.66341C3.33659 5.12363 3.70969 5.49674 4.16992 5.49674C4.63016 5.49674 5.00325 5.12363 5.00325 4.66341C5.00327 4.20316 4.63017 3.83008 4.16992 3.83008ZM7.50325 3.83008C7.04301 3.83008 6.66991 4.20316 6.66992 4.66341C6.66993 5.12363 7.04302 5.49674 7.50325 5.49674C7.96349 5.49674 8.33658 5.12363 8.33659 4.66341C8.3366 4.20316 7.9635 3.83008 7.50325 3.83008ZM10.8366 3.83008C10.3763 3.83008 10.0032 4.20316 10.0033 4.66341C10.0033 5.12363 10.3764 5.49674 10.8366 5.49674C11.2968 5.49674 11.6699 5.12363 11.6699 4.66341C11.6699 4.20316 11.2968 3.83008 10.8366 3.83008ZM7.50488 12.1634C7.39387 12.1609 7.28348 12.1806 7.1802 12.2214C7.07691 12.2621 6.98281 12.3231 6.90342 12.4008C6.82403 12.4784 6.76095 12.5711 6.71788 12.6734C6.67481 12.7758 6.65263 12.8857 6.65263 12.9967C6.65263 13.1078 6.67481 13.2177 6.71788 13.32C6.76095 13.4224 6.82403 13.5151 6.90342 13.5927C6.98281 13.6704 7.07691 13.7313 7.1802 13.7721C7.28348 13.8129 7.39387 13.8326 7.50488 13.8301H17.5016C17.6126 13.8326 17.723 13.8129 17.8263 13.7721C17.9296 13.7313 18.0237 13.6704 18.1031 13.5927C18.1825 13.5151 18.2456 13.4224 18.2886 13.32C18.3317 13.2177 18.3539 13.1078 18.3539 12.9967C18.3539 12.8857 18.3317 12.7758 18.2886 12.6734C18.2456 12.5711 18.1825 12.4784 18.1031 12.4008C18.0237 12.3231 17.9296 12.2621 17.8263 12.2214C17.723 12.1806 17.6126 12.1609 17.5016 12.1634H7.50488ZM7.41862 15.4967C7.19739 15.5082 6.98977 15.607 6.84142 15.7716C6.69308 15.9361 6.61616 16.1528 6.6276 16.374C6.63904 16.5953 6.7379 16.8029 6.90242 16.9512C7.06694 17.0996 7.28365 17.1765 7.50488 17.165H17.5016C17.7229 17.165 17.935 17.0772 18.0915 16.9207C18.2479 16.7643 18.3358 16.5521 18.3358 16.3309C18.3358 16.1097 18.2479 15.8975 18.0915 15.7411C17.935 15.5846 17.7229 15.4967 17.5016 15.4967H7.50488C7.47615 15.4953 7.44735 15.4953 7.41862 15.4967ZM7.41862 18.8317C7.20106 18.8478 6.99846 18.9485 6.85419 19.1121C6.70992 19.2757 6.63546 19.4894 6.64673 19.7072C6.65801 19.9251 6.75413 20.1299 6.91452 20.2777C7.07491 20.4256 7.28682 20.5048 7.50488 20.4984H12.5C12.611 20.5009 12.7214 20.4812 12.8247 20.4404C12.928 20.3996 13.0221 20.3386 13.1015 20.261C13.1809 20.1834 13.2439 20.0907 13.287 19.9883C13.3301 19.886 13.3523 19.7761 13.3523 19.665C13.3523 19.554 13.3301 19.4441 13.287 19.3417C13.2439 19.2394 13.1809 19.1467 13.1015 19.0691C13.0221 18.9914 12.928 18.9304 12.8247 18.8897C12.7214 18.8489 12.611 18.8292 12.5 18.8317H7.50488C7.47615 18.8302 7.44735 18.8302 7.41862 18.8317Z"
                  fill="#EAF0F8"
                />
              </svg>
              <svg
                className="block lg:hidden w-[20px] h-[20px]"
                width="22"
                height="22"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.30254 0C0.589833 0 0 0.540558 0 1.19844V10.7984C0 11.4563 0.589833 12 1.30254 12H11.7017C12.4144 12 13 11.4563 13 10.7984V1.19844C13 0.540558 12.4144 0 11.7017 0H1.30254ZM1.30254 0.796875H11.7017C11.9493 0.796875 12.1367 0.969912 12.1367 1.19844V3.19844H3.90169C3.31595 3.19088 3.31595 4.00583 3.90169 3.99844H12.1367V10.7984C12.1367 11.0269 11.9493 11.2 11.7017 11.2H1.30254C1.05498 11.2 0.866667 11.0269 0.866667 10.7984V3.99844H2.16836C2.7541 4.006 2.7541 3.19104 2.16836 3.19844H0.866667V1.19844C0.866667 0.969912 1.05498 0.796875 1.30254 0.796875ZM2.16836 1.59844C1.92903 1.59844 1.73502 1.77752 1.73503 1.99844C1.73503 2.21934 1.92904 2.39844 2.16836 2.39844C2.40768 2.39844 2.60169 2.21934 2.60169 1.99844C2.6017 1.77752 2.40769 1.59844 2.16836 1.59844ZM3.90169 1.59844C3.66237 1.59844 3.46835 1.77752 3.46836 1.99844C3.46836 2.21934 3.66237 2.39844 3.90169 2.39844C4.14101 2.39844 4.33502 2.21934 4.33503 1.99844C4.33503 1.77752 4.14102 1.59844 3.90169 1.59844ZM5.63503 1.59844C5.3957 1.59844 5.20169 1.77752 5.20169 1.99844C5.2017 2.21934 5.3957 2.39844 5.63503 2.39844C5.87435 2.39844 6.06836 2.21934 6.06836 1.99844C6.06837 1.77752 5.87435 1.59844 5.63503 1.59844ZM3.90254 5.59844C3.84481 5.59724 3.78741 5.6067 3.7337 5.62627C3.68 5.64583 3.63106 5.6751 3.58978 5.71237C3.5485 5.74963 3.51569 5.79413 3.4933 5.84325C3.4709 5.89238 3.45937 5.94514 3.45937 5.99844C3.45937 6.05174 3.4709 6.1045 3.4933 6.15362C3.51569 6.20275 3.5485 6.24725 3.58978 6.28451C3.63106 6.32177 3.68 6.35104 3.7337 6.37061C3.78741 6.39017 3.84481 6.39963 3.90254 6.39844H9.10085C9.15857 6.39963 9.21597 6.39017 9.26968 6.37061C9.32339 6.35104 9.37232 6.32177 9.41361 6.28451C9.45489 6.24725 9.48769 6.20275 9.51009 6.15362C9.53248 6.1045 9.54402 6.05174 9.54402 5.99844C9.54402 5.94514 9.53248 5.89238 9.51009 5.84325C9.48769 5.79413 9.45489 5.74963 9.41361 5.71237C9.37232 5.6751 9.32339 5.64583 9.26968 5.62627C9.21597 5.6067 9.15857 5.59724 9.10085 5.59844H3.90254ZM3.85768 7.19844C3.74264 7.20393 3.63468 7.25138 3.55754 7.33035C3.4804 7.40932 3.44041 7.51334 3.44635 7.61953C3.4523 7.72572 3.50371 7.82538 3.58926 7.89659C3.67481 7.96779 3.7875 8.00471 3.90254 7.99922H9.10085C9.21589 7.99922 9.32621 7.95704 9.40756 7.88195C9.4889 7.80686 9.5346 7.70502 9.5346 7.59883C9.5346 7.49264 9.4889 7.3908 9.40756 7.31571C9.32621 7.24062 9.21589 7.19844 9.10085 7.19844H3.90254C3.8876 7.19772 3.87262 7.19772 3.85768 7.19844ZM3.85768 8.79922C3.74455 8.80695 3.6392 8.85527 3.56418 8.93381C3.48916 9.01236 3.45044 9.11489 3.4563 9.21947C3.46216 9.32404 3.51215 9.42234 3.59555 9.49332C3.67896 9.56429 3.78915 9.60231 3.90254 9.59922H6.5C6.55772 9.60042 6.61513 9.59095 6.66884 9.57139C6.72254 9.55182 6.77148 9.52255 6.81276 9.48529C6.85404 9.44803 6.88685 9.40353 6.90924 9.3544C6.93164 9.30528 6.94317 9.25252 6.94317 9.19922C6.94317 9.14592 6.93164 9.09316 6.90924 9.04403C6.88685 8.99491 6.85404 8.95041 6.81276 8.91315C6.77148 8.87589 6.72254 8.84661 6.66884 8.82705C6.61513 8.80748 6.55772 8.79802 6.5 8.79922H3.90254C3.8876 8.7985 3.87262 8.7985 3.85768 8.79922Z"
                  fill="#10243F"
                />
              </svg>
              <a
                rel="noopener noreferrer"
                className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold pl-[5px] sm:pl-[20px]"
              >
                Go to Website
              </a>
            </div>
            {/* Button go to repository */}
            <div
              onClick={() =>
                window.open(projectData[positionIndex].repositoryUri, "_blank")
              }
              className={`w-[168px] h-[39px] sm:w-auto sm:h-auto flex flex-row justify-start sm:justify-between items-center space-x-1 sm:space-x-5 py-1 sm:py-2 xl:py-3 px-2 sm:px-5 rounded-[5px] sm:rounded-[15px] bg-bluePallete-900 sm:hover:bg-white transition-colors text-bluePallete-100 sm:hover:text-black border-[2px] border-white lg:border-none duration-300 ease-in-out cursor-pointer ${styles.projectsContainerRepository}`}
            >
              <svg
                className="w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                width="25"
                height="25"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="Icon Repository Central Computer Improvement"
              >
                <path
                  className={`${styles.projectsIconRepository}`}
                  d="M7.6438 19.9369L3.99336 16.1526L7.6438 12.3683L8.8374 13.521L6.29314 16.1526L8.8374 18.7843L7.6438 19.9369ZM17.3451 19.9469L16.1715 18.7732L18.7931 16.1515L16.1715 13.5299L17.3451 12.3562L21.1394 16.1504L17.3451 19.9469ZM11.1471 19.8153L9.75994 18.906L13.9635 12.4901L15.3507 13.3994L11.1471 19.8153ZM0 0.5H25V25.5H0V0.5ZM23.3407 2.1593H1.6593V23.8407H23.3407V2.1593ZM25 8.57522H0V0.5H25V8.57522ZM1.6593 6.91594H23.3407V2.15925H1.65933L1.6593 6.91594ZM6.13938 5.36726H4.03757V3.70793H6.13938V5.36726ZM10.4535 5.36726H8.24111V3.70793H10.4535V5.36726ZM14.6571 5.36726H12.5553V3.70793H14.6571V5.36726Z"
                  fill="#EAF0F8"
                />
              </svg>
              <a
                rel="noopener noreferrer"
                className="text-[14px] sm:text-[16px] lg:text-[20px] font-semibold"
              >
                Check Repository
              </a>
            </div>
          </div>
          {/* Icon Arrow */}
          <div className="w-full flex justify-end items-center space-x-3 sm:space-x-4">
            {/* Arrow Kiri */}
            <svg
              onClick={() => handleProjectArrow("left")}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] cursor-pointer"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Icon Arrow Left Central Computer Improvement"
            >
              <circle cx="25" cy="25" r="25" fill={circleColor} />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.7899 33.6234C25.2432 34.1255 24.3568 34.1255 23.8101 33.6234L15.4101 25.9091C14.8633 25.407 14.8633 24.593 15.4101 24.0909L23.8101 16.3766C24.3568 15.8745 25.2432 15.8745 25.7899 16.3766C26.3367 16.8787 26.3367 17.6927 25.7899 18.1949L19.7799 23.7143H34.6C35.3732 23.7143 36 24.2899 36 25C36 25.7101 35.3732 26.2857 34.6 26.2857H19.7799L25.7899 31.8051C26.3367 32.3073 26.3367 33.1213 25.7899 33.6234Z"
                fill={pathColor}
              />
            </svg>
            {/* Arrow Kanan */}
            <svg
              onClick={() => handleProjectArrow("right")}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] cursor-pointer"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Icon Arrow Right Central Computer Improvement"
            >
              <circle cx="25" cy="25" r="25" fill={circleColor} />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.2101 16.3766C24.7568 15.8745 25.6432 15.8745 26.1899 16.3766L34.5899 24.0909C35.1367 24.593 35.1367 25.407 34.5899 25.9091L26.1899 33.6234C25.6432 34.1255 24.7568 34.1255 24.2101 33.6234C23.6633 33.1213 23.6633 32.3073 24.2101 31.8051L30.2201 26.2857H15.4C14.6268 26.2857 14 25.7101 14 25C14 24.2899 14.6268 23.7143 15.4 23.7143H30.2201L24.2101 18.1949C23.6633 17.6927 23.6633 16.8787 24.2101 16.3766Z"
                fill={pathColor}
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectData;
