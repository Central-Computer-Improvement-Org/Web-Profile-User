"use client";
import React from "react";
import Image from "next/image";

import styles from "@/app/home/homePage.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="w-full h-auto">
                <section id="hero" className="w-full h-auto pb-20 sm:pb-32 pt-20 sm:pt-36">
                    <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto flex flex-row flex-wrap">
                        <div className="basis-full md:basis-3/5 flex flex-col space-y-10">
                            <Image
                                src="/assets/images/logo.svg"
                                alt="Logo"
                                width={300}
                                height={200}
                                className="hidden md:block"
                            />
                            <div className="flex flex-col space-y-1">
                                <h1 className="text-[40px] sm:text-[56px] text-center md:text-left font-bold px-3 sm:px-0 text-bluePallete-600">
                                    Central Computer Improvement
                                </h1>
                            </div>
                            <p className="hidden md:block text-[24px] pr-20 text-bluePallete-600">
                                Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada
                                bidang ICT (Information, Communication and Technology).
                            </p>
                        </div>
                        <div className="basis-full md:basis-2/5 flex flex-col flex-wrap items-center justify-center pt-10 md:pt-0">
                            <Image
                                src="/assets/images/home/hero-banner.png"
                                alt="Hero CCI"
                                sizes="100vw"
                                responsive
                                width={1200}
                                height={800}
                                className="max-w-full h-auto"
                            />
                            <p className="text-center block md:hidden text-[18px] sm:text-[24px] pt-10 lg:pt-0 text-bluePallete-600">
                                Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada
                                bidang ICT (Information, Communication and Technology).
                            </p>
                        </div>
                    </div>
                </section>
                <span className="block h-full bg-gradientAccent">
                    <div className="bg-gradientDefault h-full bg-fixed bg-no-repeat relative">
                        <section id="connect" className="w-full h-auto">
                            <div
                                id="connect-first"
                                className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 pt-32 mx-auto"
                            >
                                <h2 className="text-center text-xl font-semibold text-secondPrimary">
                                    Central Computer Improvement
                                </h2>
                                <h1 className="text-center text-3xl font-bold text-bluePallete-500">
                                    Connect Share Speak Up
                                </h1>
                                <div className="w-full flex flex-row flex-wrap-reverse pt-10 sm:pt-20 lg:pt-32">
                                    <div className="basis-full lg:basis-3/5 mt-5 sm:mt-10 lg:mt-0">
                                        <div className="w-full flex flex-row justify-evenly items-center space-x-5 lg:space-x-10 mt-10 xl:mt-0">
                                            <div class="rotate-[-5deg] md:rotate-[-8deg] w-max-[164px] h-max-[180px] md:w-max-[318px] md:h-max-[412px] bg-bluePallete-300 border rounded-lg">
                                                <a href="#">
                                                    <Image
                                                        class="rounded-t-lg"
                                                        src="/assets/images/home/connect-card.png"
                                                        alt="CardHome Central Computer Improvement"
                                                        sizes="100vw"
                                                        responsive
                                                        width={50}
                                                        height={50}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                </a>
                                                <div class="flex items-center justify-center">
                                                    <div className="w-11/12 my-2 md:my-4 rounded-lg bg-[#E1E6EE]">
                                                        <p class="text-[12px] md:text-[24px] text-center font-bold lg:px-2 xl:px-5 py-3 md:py-5 text-bluePallete-700">
                                                            Achievement 100 +
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-max-[164px] h-max-[180px] md:w-max-[318px] md:h-max-[412px] bg-bluePallete-300 border rounded-lg">
                                                <a href="#">
                                                    <Image
                                                        class="rounded-t-lg"
                                                        src="/assets/images/home/connect-card.png"
                                                        alt="CardHome Central Computer Improvement"
                                                        sizes="100vw"
                                                        responsive
                                                        width={50}
                                                        height={50}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                </a>
                                                <div class="flex items-center justify-center">
                                                    <div className="w-11/12 my-2 md:my-4 rounded-lg bg-[#E1E6EE]">
                                                        <p class="text-[12px] md:text-[24px] text-center font-bold lg:px-2 xl:px-5 py-3 md:py-5 text-bluePallete-700">
                                                            Member 100 +
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="basis-full lg:basis-2/5">
                                        <div className="w-auto flex flex-col space-y-10 m-0 lg:m-4 xl:m-5">
                                            <div className="flex flex-row flex-start lg:space-x-5">
                                                <div className="basis-1/3 flex flex-col items-start lg:items-start space-y-1 md:space-y-5">
                                                    <h3 className="text-[30px] lg:text-[40px] font-bold text-mainPrimary">
                                                        100+
                                                    </h3>
                                                    <p className="text-[16px] md:text-[20px] lg:text-[24px] opacity-50 text-mainPrimary">
                                                        Members
                                                    </p>
                                                </div>
                                                <div className="basis-1/3 flex flex-col items-center lg:items-start space-y-1 md:space-y-5">
                                                    <h3 className="text-[30px] lg:text-[40px] font-bold text-mainPrimary">
                                                        40+
                                                    </h3>
                                                    <p className="text-[16px] md:text-[20px] lg:text-[24px] opacity-50 text-mainPrimary">
                                                        Awards
                                                    </p>
                                                </div>
                                                <div className="basis-1/3 flex flex-col items-end lg:items-start space-y-1 md:space-y-5">
                                                    <h3 className="text-[30px] lg:text-[40px] font-bold text-mainPrimary">
                                                        100+
                                                    </h3>
                                                    <p className="text-[16px] md:text-[20px] lg:text-[24px] opacity-50 text-mainPrimary">
                                                        Projects
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="hidden lg:block">
                                                <div className="flex flex-col space-y-3 pr-0 xl:pr-[29px]">
                                                    <h2 className="text-[40px] font-bold text-mainPrimary">
                                                        Penghargaan
                                                    </h2>
                                                    <p className="text-[24px] text-mainPrimary">
                                                        Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus
                                                        pada bidang ICT (Information, Communication and
                                                        Technology).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block lg:hidden mt-14">
                                    <div className="flex flex-col space-y-3 pr-0 xl:pr-[29px]">
                                        <h2 className="text-[25px] lg:text-[40px] font-bold text-mainPrimary">
                                            Penghargaan
                                        </h2>
                                        <p className="text-[15px] lg:text-[24px] text-mainPrimary">
                                            Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada
                                            bidang ICT (Information, Communication and Technology).
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div
                                id="connect-second"
                                className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 pb-20 mx-auto lg:mt-40 mt-10"
                            >
                                <div className="w-full flex flex-row flex-wrap-reverse">
                                    <div className="basis-full lg:basis-2/5 flex items-center">
                                        <div className="flex flex-col space-y-4 mt-14 lg:mt-0">
                                            <h2 className="text-[25px] md:text-[30px] lg:text-[40px] text-right lg:text-left font-bold text-mainPrimary">
                                                Jumlah Project
                                            </h2>
                                            <p className="text-[15px] md:text-[20px] lg:text-[24px] text-right lg:text-left leading-5 lg:leading-10 text-mainPrimary">
                                                Unit Kegiatan Mahasiswa Universitas Telkom Central Computer
                                                Improvment telah berhasil membuat project sebanyak ... yang
                                                dilakukan oleh semua divisi yang ada
                                            </p>
                                        </div>
                                    </div>
                                    <div className="basis-full lg:basis-3/5">
                                        <div className="w-full flex flex-row justify-evenly items-center space-x-5 lg:space-x-10">
                                            <div class="w-max-[164px] h-max-[180px] md:w-max-[318px] md:h-max-[412px] bg-bluePallete-300 border rounded-lg">
                                                <a href="#">
                                                    <Image
                                                        class="rounded-t-lg"
                                                        src="/assets/images/home/connect-card.png"
                                                        alt="CardHome Central Computer Improvement"
                                                        sizes="100vw"
                                                        responsive
                                                        width={50}
                                                        height={50}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                </a>
                                                <div class="flex items-center justify-center">
                                                    <div className="w-11/12 my-2 md:my-4 rounded-lg bg-[#E1E6EE]">
                                                        <p class="text-[12px] md:text-[24px] text-center font-bold lg:px-2 xl:px-5 py-3 md:py-5 text-bluePallete-700">
                                                            Achievement 100 +
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="rotate-[5deg] md:rotate-[8deg] w-max-[164px] h-max-[180px] lg:w-[288px] lg:h-[382px] lg:w-max-[288px] lg:h-max-[382px] xl:w-max-[318px] xl:h-max-[412px] border rounded-lg bg-bluePallete-300">
                                                <a href="#">
                                                    <Image
                                                        class="rounded-t-lg"
                                                        src="/assets/images/home/connect-card.png"
                                                        alt="CardHome Central Computer Improvement"
                                                        sizes="100vw"
                                                        responsive
                                                        width={50}
                                                        height={50}
                                                        style={{
                                                            width: "100%",
                                                            height: "auto",
                                                        }}
                                                    />
                                                </a>
                                                <div class="flex items-center justify-center">
                                                    <div className="w-11/12 my-2 md:my-4 rounded-lg bg-[#E1E6EE]">
                                                        <p class="text-[12px] md:text-[24px] text-center font-bold lg:px-2 xl:px-5 py-3 md:py-5 text-bluePallete-700">
                                                            Member 100 +
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="projects" className="w-full h-auto">
                            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto">
                                <div className="w-full flex flex-col space-y-32 lg:space-y-10 py-20">
                                    <div className="w-full h-auto flex flex-col items-center justify-between space-y-4 lg:space-y-5">
                                        <h1 className="text-center font-bold text-[20px] sm:text-[26px] md:text-[50px] px-0 lg:px-52 text-bluePallete-800">Showcasing Our Work: Achievements and Capabilities of Central Computer Improvement</h1>
                                        <p className="text-center text-[12px] sm:text-[18px] md:text-[30px] px-0 lg:px-32 text-bluePallete-800">Explore our diverse projects and witness the passion, creativity, and impact of Central Computer Improvement</p>
                                        <button className="text-[10px] lg:text-[25px] font-bold rounded-lg p-[15px] lg:p-[30px] text-white bg-bluePallete-800">Explore Our Projects</button>
                                    </div>
                                    <div className="static w-full h-auto lg:h-[340px] xl:h-auto flex flex-row flex-wrap py-8 px-10 rounded-[20px] sm:rounded-lg lg:border-[3px] lg:border-bluePallete-600 bg-bluePallete-800 lg:bg-transparent">
                                        <div className={`absolute inset-x-0 top-[1690px] sm:top-[1900px] md:top-[2350px] lg:inset-x-full lg:top-full lg:static  basis-full lg:basis-2/5 flex items-center justify-center ${styles.outerThumbnail}`}>
                                            <Image
                                                src="/assets/images/home/projects-thumbnail.png"
                                                alt="Thumbnail Project Central Computer Improvement"
                                                width={1000}
                                                height={1000}
                                                responsive
                                                className={`image-thumbnail w-[290px] h-[240px] sm:w-3/5 sm:h-2/5 lg:w-full lg:h-full rounded-[20px] sm:rounded-lg ${styles.imageThumbnail}`}
                                            >
                                            </Image>
                                        </div>
                                        <div className={`basis-full lg:basis-3/5 mt-[200px] sm:mt-[180px] md:mt-[300px] lg:mt-0 pl-0 lg:pl-7 flex flex-col justify-between space-y-2 sm:space-y-5 lg:space-y-0 ${styles.outerDesc}`}>
                                            <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                                                <p className="block sm:hidden text-[8px] sm:text-[15px] lg:text-[18px] font-bold px-[8px] sm:px-[0px] py-[6px] sm:py-[0px] text-white lg:text-black bg-[#9f9f9f6e] sm:bg-none rounded-[10px]">Nama Team</p>
                                                <div className="flex flex-row items-center space-x-3 px-[10px] sm:px-0 py-[5px] sm:py-0 bg-white sm:bg-none rounded-[15px]">
                                                    <Image
                                                        src="/assets/images/home/projects-logo.png"
                                                        alt="Logo Project Central Computer Improvement"
                                                        width={50}
                                                        height={50}
                                                        responsive
                                                        className="w-[25px] h-[25px] sm:w-auto sm:h-auto"
                                                    >
                                                    </Image>
                                                    <p className="block sm:hidden text-[18px] font-bold text-bluePallete-600">Nama Project</p>
                                                </div>
                                                <p className="hidden sm:block text-[8px] sm:text-[15px] lg:text-[18px] font-bold text-white lg:text-black">Nama Team</p>
                                            </div>
                                            <p className="text-[15px] lg:text-[20px] font-medium text-white lg:text-black">Postify is the SMM management platform that lets them create a comprehensive social media strategy they can manage all in one place.</p>
                                            <div className="flex flex-row flex-wrap justify-between lg:justify-start items-center space-x-0 md:space-x-5 space-y-2 md:space-y-0">
                                                <div className="flex flex-row justify-between items-center space-x-5 py-2 xl:py-3 px-3 sm:px-5 rounded-[5px] sm:rounded-[15px] bg-bluePallete-900 hover:bg-white transition-colors text-bluePallete-100 hover:text-black duration-300 ease-in-out cursor-pointer">
                                                    <svg className="w-6 h-6 lg:w-7 lg:h-7" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Icon Website Central Computer Improvement">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.50488 0.5C1.13429 0.5 0 1.62616 0 2.99674V22.9967C0 24.3673 1.13429 25.5 2.50488 25.5H22.5033C23.8738 25.5 25 24.3673 25 22.9967V2.99674C25 1.62616 23.8738 0.5 22.5033 0.5H2.50488ZM2.50488 2.16016H22.5033C22.9793 2.16016 23.3398 2.52065 23.3398 2.99674V7.16341H7.50325C6.37683 7.14766 6.37683 8.84548 7.50325 8.83008H23.3398V22.9967C23.3398 23.4728 22.9793 23.8333 22.5033 23.8333H2.50488C2.0288 23.8333 1.66667 23.4728 1.66667 22.9967V8.83008H4.16992C5.29634 8.84583 5.29634 7.14801 4.16992 7.16341H1.66667V2.99674C1.66667 2.52065 2.0288 2.16016 2.50488 2.16016ZM4.16992 3.83008C3.70968 3.83008 3.33658 4.20316 3.33659 4.66341C3.33659 5.12363 3.70969 5.49674 4.16992 5.49674C4.63016 5.49674 5.00325 5.12363 5.00325 4.66341C5.00327 4.20316 4.63017 3.83008 4.16992 3.83008ZM7.50325 3.83008C7.04301 3.83008 6.66991 4.20316 6.66992 4.66341C6.66993 5.12363 7.04302 5.49674 7.50325 5.49674C7.96349 5.49674 8.33658 5.12363 8.33659 4.66341C8.3366 4.20316 7.9635 3.83008 7.50325 3.83008ZM10.8366 3.83008C10.3763 3.83008 10.0032 4.20316 10.0033 4.66341C10.0033 5.12363 10.3764 5.49674 10.8366 5.49674C11.2968 5.49674 11.6699 5.12363 11.6699 4.66341C11.6699 4.20316 11.2968 3.83008 10.8366 3.83008ZM7.50488 12.1634C7.39387 12.1609 7.28348 12.1806 7.1802 12.2214C7.07691 12.2621 6.98281 12.3231 6.90342 12.4008C6.82403 12.4784 6.76095 12.5711 6.71788 12.6734C6.67481 12.7758 6.65263 12.8857 6.65263 12.9967C6.65263 13.1078 6.67481 13.2177 6.71788 13.32C6.76095 13.4224 6.82403 13.5151 6.90342 13.5927C6.98281 13.6704 7.07691 13.7313 7.1802 13.7721C7.28348 13.8129 7.39387 13.8326 7.50488 13.8301H17.5016C17.6126 13.8326 17.723 13.8129 17.8263 13.7721C17.9296 13.7313 18.0237 13.6704 18.1031 13.5927C18.1825 13.5151 18.2456 13.4224 18.2886 13.32C18.3317 13.2177 18.3539 13.1078 18.3539 12.9967C18.3539 12.8857 18.3317 12.7758 18.2886 12.6734C18.2456 12.5711 18.1825 12.4784 18.1031 12.4008C18.0237 12.3231 17.9296 12.2621 17.8263 12.2214C17.723 12.1806 17.6126 12.1609 17.5016 12.1634H7.50488ZM7.41862 15.4967C7.19739 15.5082 6.98977 15.607 6.84142 15.7716C6.69308 15.9361 6.61616 16.1528 6.6276 16.374C6.63904 16.5953 6.7379 16.8029 6.90242 16.9512C7.06694 17.0996 7.28365 17.1765 7.50488 17.165H17.5016C17.7229 17.165 17.935 17.0772 18.0915 16.9207C18.2479 16.7643 18.3358 16.5521 18.3358 16.3309C18.3358 16.1097 18.2479 15.8975 18.0915 15.7411C17.935 15.5846 17.7229 15.4967 17.5016 15.4967H7.50488C7.47615 15.4953 7.44735 15.4953 7.41862 15.4967ZM7.41862 18.8317C7.20106 18.8478 6.99846 18.9485 6.85419 19.1121C6.70992 19.2757 6.63546 19.4894 6.64673 19.7072C6.65801 19.9251 6.75413 20.1299 6.91452 20.2777C7.07491 20.4256 7.28682 20.5048 7.50488 20.4984H12.5C12.611 20.5009 12.7214 20.4812 12.8247 20.4404C12.928 20.3996 13.0221 20.3386 13.1015 20.261C13.1809 20.1834 13.2439 20.0907 13.287 19.9883C13.3301 19.886 13.3523 19.7761 13.3523 19.665C13.3523 19.554 13.3301 19.4441 13.287 19.3417C13.2439 19.2394 13.1809 19.1467 13.1015 19.0691C13.0221 18.9914 12.928 18.9304 12.8247 18.8897C12.7214 18.8489 12.611 18.8292 12.5 18.8317H7.50488C7.47615 18.8302 7.44735 18.8302 7.41862 18.8317Z" fill="#EAF0F8" />
                                                    </svg>
                                                    <p className="text-[16px] xl:text-[18px] font-medium ">Go to Website</p>
                                                </div>
                                                <div className={`flex flex-row justify-between items-center space-x-5 py-2 xl:py-3 px-3 sm:px-5 rounded-[5px] sm:rounded-[15px] bg-bluePallete-900 hover:bg-white transition-colors text-bluePallete-100 hover:text-black duration-300 ease-in-out cursor-pointer ${styles.repositoryContainer}`}>
                                                    <svg className="w-6 h-6 lg:w-7 lg:h-7" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Icon Repository Central Computer Improvement">
                                                        <path d="M7.6438 19.9369L3.99336 16.1526L7.6438 12.3683L8.8374 13.521L6.29314 16.1526L8.8374 18.7843L7.6438 19.9369ZM17.3451 19.9469L16.1715 18.7732L18.7931 16.1515L16.1715 13.5299L17.3451 12.3562L21.1394 16.1504L17.3451 19.9469ZM11.1471 19.8153L9.75994 18.906L13.9635 12.4901L15.3507 13.3994L11.1471 19.8153ZM0 0.5H25V25.5H0V0.5ZM23.3407 2.1593H1.6593V23.8407H23.3407V2.1593ZM25 8.57522H0V0.5H25V8.57522ZM1.6593 6.91594H23.3407V2.15925H1.65933L1.6593 6.91594ZM6.13938 5.36726H4.03757V3.70793H6.13938V5.36726ZM10.4535 5.36726H8.24111V3.70793H10.4535V5.36726ZM14.6571 5.36726H12.5553V3.70793H14.6571V5.36726Z" fill="#EAF0F8"/>
                                                    </svg>
                                                    <p className={`text-[16px] xl:text-[18px] font-medium ${styles.buttonRepository}`}>Check Repository</p>
                                                </div>
                                            </div>
                                            <div className="w-full flex justify-end items-center space-x-2 sm:space-x-4">
                                                <svg className="w-[30px] h-[30px] sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Icon Arrow Left Central Computer Improvement">
                                                    <circle cx="25" cy="25" r="25" transform="rotate(-180 25 25)" fill="#10243F"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.7899 33.6234C25.2432 34.1255 24.3568 34.1255 23.8101 33.6234L15.4101 25.9091C14.8633 25.407 14.8633 24.593 15.4101 24.0909L23.8101 16.3766C24.3568 15.8745 25.2432 15.8745 25.7899 16.3766C26.3367 16.8787 26.3367 17.6927 25.7899 18.1949L19.7799 23.7143H34.6C35.3732 23.7143 36 24.2899 36 25C36 25.7101 35.3732 26.2857 34.6 26.2857H19.7799L25.7899 31.8051C26.3367 32.3073 26.3367 33.1213 25.7899 33.6234Z" fill="white"/>
                                                </svg>
                                                <svg className="w-[30px] h-[30px] sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" alt="Icon Arrow Right Central Computer Improvement">
                                                    <circle cx="25" cy="25" r="25" fill="#10243F"/>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2101 16.3766C24.7568 15.8745 25.6432 15.8745 26.1899 16.3766L34.5899 24.0909C35.1367 24.593 35.1367 25.407 34.5899 25.9091L26.1899 33.6234C25.6432 34.1255 24.7568 34.1255 24.2101 33.6234C23.6633 33.1213 23.6633 32.3073 24.2101 31.8051L30.2201 26.2857H15.4C14.6268 26.2857 14 25.7101 14 25C14 24.2899 14.6268 23.7143 15.4 23.7143H30.2201L24.2101 18.1949C23.6633 17.6927 23.6633 16.8787 24.2101 16.3766Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
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
