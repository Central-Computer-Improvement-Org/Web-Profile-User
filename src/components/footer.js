"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import request from "../app/utils/request";

const Footer = () => {
  const [settingsData, setSettingsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    request
      .get("/settings")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setSettingsData(response.data);
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
  return (
    <footer className="w-full h-auto bg-bluePallete-800">
      <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto">
        <div className="w-full h-full flex flex-col flex-wrap space-y-8 lg:space-y-20 justify-between pt-10 lg:pt-32 pb-10">
          <div className="w-full flex flex-col lg:items-start items-center space-y-5">
            <Image
              src="/assets/logo/images/logo.svg"
              alt="Logo Central Computer Improvement"
              width={90}
              height={90}
              className="w-30 h-30 md:w-[150px] md:h-[80px] cursor-pointer"
            />
            <div className="w-auto flex flex-col">
              <p className="text-center text-[16px] font-bold uppercase text-white">
                Central Computer
              </p>
              <p className="text-center text-[16px] font-bold uppercase text-white">
                Improvement
              </p>
            </div>
          </div>
          <div className="w-full flex flex-row flex-wrap lg:space-y-0 space-y-5">
            <div className="w-full h-full basis-full lg:basis-3/5 flex flex-col space-y-5">
              <div className="flex flex-row items-center justify-center lg:justify-start md:items-center space-x-1 sm:space-x-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="white"
                    d="M10 3a5 5 0 0 0-5 5c0 1.128.67 2.444 1.61 3.71c.926 1.246 2.047 2.36 2.818 3.067a.835.835 0 0 0 1.144 0c.77-.708 1.892-1.82 2.818-3.067C14.33 10.444 15 9.128 15 8a5 5 0 0 0-5-5M4 8a6 6 0 1 1 12 0c0 1.468-.843 3.007-1.807 4.306c-.98 1.319-2.152 2.48-2.945 3.207a1.835 1.835 0 0 1-2.496 0c-.793-.727-1.966-1.888-2.945-3.207C4.843 11.007 4 9.468 4 8m6-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M7.5 8a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m6.92 5.638a22.48 22.48 0 0 1-.715.826c.254.072.492.15.712.235c.554.213.969.455 1.236.698c.267.243.347.447.347.603c0 .156-.08.36-.347.603c-.267.243-.682.485-1.236.698c-1.106.426-2.667.7-4.417.7s-3.311-.274-4.417-.7c-.554-.213-.969-.455-1.236-.698C4.08 16.36 4 16.156 4 16c0-.156.08-.36.347-.603c.267-.243.682-.485 1.236-.698a8.18 8.18 0 0 1 .712-.235a22.432 22.432 0 0 1-.715-.826a8.57 8.57 0 0 0-.356.128c-.621.239-1.159.536-1.55.891C3.284 15.012 3 15.466 3 16c0 .535.284.988.674 1.343c.391.355.929.652 1.55.892C6.471 18.715 8.16 19 10 19c1.84 0 3.529-.286 4.776-.765c.621-.24 1.159-.537 1.55-.892c.39-.355.674-.808.674-1.343c0-.534-.284-.988-.674-1.343c-.391-.355-.929-.652-1.55-.891a8.564 8.564 0 0 0-.356-.128"
                  ></path>
                </svg>
                <p className="text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-bold text-white">
                  {isLoading
                    ? "Loading..."
                    : settingsData?.data[0]?.address ||
                      "Telkom University, Bandung"}
                </p>
              </div>
              <p className="flex justify-center items-center text-center lg:text-left text-[12px] sm:text-[16px] lg:text-[24px] pr-0 lg:pr-24 text-white">
                Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada
                bidang ICT (Information, Communication and Technology).
              </p>
            </div>
            <div className="w-full h-full basis-full lg:basis-2/5 flex flex-col justify-between items-center space-y-5 pl-0 lg:pl-20">
              <div className="w-[75%] lg:w-full flex flex-row justify-between">
                <a
                  href="mailto:cci.unitel@gmail.com?subject=Subject%20of%20the%20email&body="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1 sm:p-3 rounded border-2 border-white"
                >
                  <Image
                    src="/assets/logo/images/logo-gmail.png"
                    alt="Logo Email CCI"
                    width={35}
                    height={35}
                    className="w-[27px] h-[21px] sm:w-[54px] sm:h-[42px] cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.instagram.com/cciunitel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1 sm:p-3 rounded border-2 border-white "
                >
                  <Image
                    src="/assets/logo/images/logo-instagram.png"
                    alt="Logo Instagram CCI"
                    width={35}
                    height={35}
                    className="w-[25px] h-[25px] sm:w-[52px] sm:h-[50px] cursor-pointer"
                  />
                </a>
                <a
                  href="https://line.me/R/ti/p/~buz0214o"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1 sm:p-3 rounded border-2 border-white"
                >
                  <Image
                    src="/assets/logo/images/logo-line.png"
                    alt="Logo Line CCI"
                    width={35}
                    height={35}
                    className="w-[25px] h-[25px] sm:w-[52px] sm:h-[50px] cursor-pointer"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/cci-telkomuniversity/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1 sm:p-3 rounded border-2 border-white"
                >
                  <Image
                    src="/assets/logo/images/logo-linkedin.png"
                    alt="Logo Linkedin CCI"
                    width={35}
                    height={35}
                    className="w-[25px] h-[25px] sm:w-[52px] sm:h-[50px] cursor-pointer"
                  />
                </a>
              </div>
              <button className="w-[75%] lg:w-full rounded-lg bg-white">
                <p className="sm:text-[20px] text-[12px] font-bold py-1 sm:px-20 sm:py-3 text-bluePallete-700">
                  <Link href="/credit">Credit</Link>
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="w-auto text-center text-[10px] sm:text-[14px] font-bold text-white">
              Copyright © 2024 • Telkom University
            </p>
            <p className="w-auto text-center text-[10px] sm:text-[14px] font-bold text-white">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
