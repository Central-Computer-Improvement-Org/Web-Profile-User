'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import request from '@/app/utils/request';
import { FormatString } from '@/app/utils/stringUtils';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Pagination from '@/components/projects/pagination';
import ShowcasingProjectSlider from '@/components/projects/showcasingProjectSlider';

const ProjectPage = () => {
  const ProjectMenus = [
    { menu: 'All' },
    { menu: 'Design' },
    { menu: 'Web Development' },
    { menu: 'Network' },
    { menu: 'Games and Gadget' },
    { menu: 'Media Management' },
    { menu: 'Data Research' },
  ];
  const [menuActive, setMenuActive] = useState('All');
  const [projectData, setProjectData] = useState([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    request
      .get('projects')
      .then(function (response) {
        setProjectData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams.get('perPage') ?? '5';
  // console.log(page, perPage);
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  // console.log(start, end);

  let entries = [];
  if (projectData.length > 0) {
    entries = projectData.slice(start, end);
  }

  if (!projectData && !entries) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="font-bold text-center text-[30px] text-bluePallete-800">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full h-auto mt-[60px] sm:mt-[90px] md:mt-[120px]">
        <div className="pt-[36px]" />
        <section className="md:px-[0px] px-[24px]">
          <div className="">
            <h1 className="lg:text-[50px] md:text-[35px] text-[20px] font-black text-center xl:px-[357px] md:px-[107px]">
              Showcasing Our Work: Achievements and Capabilities of Central
              Computer Improvement
            </h1>
            <div className="lg:pt-[24px] md:pt-[20px] pt-[10px]" />
            <p className="text-center lg:text-[40px] md:text-[20px] text-[12px] font-medium lg:px-[207px] md:px-[77px]">
              Explore our diverse projects and witness the passion, creativity,
              and impact of Central Computer Improvement
            </p>
            <div className="lg:pt-[61px] md:pt-[45px] pt-[32px]" />
            <ShowcasingProjectSlider image={projectData} />
            <div className="lg:pt-[61px] md:pt-[45px]pt-[36px]" />
          </div>
        </section>
        <section className="xl:px-[179px] lg:px-[50px] md:px-[80px] px-[20px]">
          <div className="flex flex-wrap lg:gap-[36px] gap-[2px] justify-center ">
            {ProjectMenus.map((data, index) => (
              <div
                key={index}
                className={`lg:px-[30px] md:px-[20px] px-[10px] lg:py-[10px] md:py-[8px] py-[5px] ${
                  menuActive == data.menu
                    ? 'md:bg-blue-100 bg-transparent'
                    : 'bg-transparent'
                } rounded-[10px] `}
                onClick={() => setMenuActive(data.menu)}
              >
                <h1
                  className={`lg:text-[24px] md:text-[18px] text-[15px] ${
                    menuActive == data.menu
                      ? 'md:font-medium font-bold'
                      : 'font-medium'
                  } lg:text-black text-[#4F4F4F] `}
                >
                  {data.menu}
                </h1>
              </div>
            ))}
          </div>
        </section>
        <div className="pt-[39px]" />
        <section className="lg:px-[95px] md:px-[50px] px-[20px] ">
          <div className="flex flex-col lg:gap-[36px] md:gap-[28px] gap-[24px]">
            {entries &&
              entries.map((data, index) => (
                <div
                  key={index}
                  className="w-full lg:px-[35px] lg:py-[38px] lg:border border-black rounded-[20px] flex lg:flex-row flex-col lg:gap-[40px] gap-[12px]"
                >
                  <div className="rounded-[10px]">
                    <Image
                      alt="project-img"
                      src={data.imageUri}
                      width={467}
                      height={284}
                      responsive="true"
                      className={`w-full h-[189px] sm:w-[480px] sm:h-[267px] md:w-full md:h-[350px] lg:w-[455px]  lg:h-[311px]  lg:max-w-[455px]  lg:max-h-[311px] rounded-[10px]  object-cover `}
                    />
                  </div>
                  <div className="w-full ">
                    <div className="h-full flex flex-col lg:justify-between lg:gap-0 md:gap-[20px] gap-[9px]">
                      <div className="flex flex-col lg:gap-[14px] md:gap-[10px] gap-[6px]">
                        <div className="flex items-center justify-between">
                          <Image
                            width={0}
                            height={0}
                            alt="project-img"
                            src={data.iconUri}
                            className="max-w-[50px] max-h-[50px] lg:w-[50px] lg:h-[50px] w-[25px] h-[25px] lg:block hidden "
                          />
                          <h1 className="lg:text-[30px] md:text-[30px] text-[18px] lg:font-semibold font-bold text-black">
                            {data.name}
                          </h1>
                        </div>
                        <div>
                          <p className="lg:text-[30px] md:text-[25px] text-[15px] font-medium text-black">
                            {FormatString(data.description, 165)}
                          </p>
                        </div>
                      </div>
                      <div className="flex lg:flex-row md:flex-row flex-col md:gap-[19px] gap-[7px]">
                        <Link
                          href={data.productionUri}
                          className="flex cursor-pointer"
                        >
                          <div className="md:px-[20px] px-[15px] md:py-[15px] py-[6px] md:w-full w-[142px] lg:rounded-[15px] rounded-[5px]  flex items-center justify-center gap-[10px] bg-bluePallete-900">
                            <Image
                              width={0}
                              height={0}
                              alt="project-img"
                              src={'assets/icon/website.png'}
                              className=" lg:w-[30px] md:w-[30px] w-[13px] lg:h-[30px] md:h-[30px] h-[13px] "
                            />
                            <h1 className="lg:text-[25px] md:text-[25px] text-[10px] text-bluePallete-100 font-semibold">
                              Go to Website
                            </h1>
                          </div>
                        </Link>
                        <Link
                          href={data.repositoryUri}
                          className="flex cursor-pointer"
                        >
                          <div className="md:px-[20px] px-[15px] md:py-[15px] py-[6px] md:w-full w-[142px] lg:border-[0px] border border-bluePallete-900  lg:rounded-[15px] rounded-[5px]  flex items-center justify-center gap-[10px] lg:bg-bluePallete-900 bg-white">
                            <Image
                              width={0}
                              height={0}
                              alt="project-img"
                              src={'assets/icon/repository.png'}
                              className=" lg:w-[30px] md:w-[30px] w-[13px] lg:h-[30px] md:h-[30px] h-[13px] lg:block hidden"
                            />
                            <Image
                              width={0}
                              height={0}
                              alt="project-img"
                              src={'assets/icon/repository-dark.png'}
                              className=" lg:w-[30px] md:w-[30px] w-[13px] lg:h-[30px] md:h-[30px] h-[13px] lg:hidden "
                            />
                            <h1 className="lg:text-[25px] md:text-[25px] text-[10px] lg:text-bluePallete-100 text-bluePallete-900 font-semibold">
                              Check Repository
                            </h1>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
        <div className="pt-[88px]" />
        <div className="flex justify-center">
          <Pagination
            hasNextPage={end < projectData.length}
            hasPrevPage={start > 0}
            currentData={projectData.length}
          />
        </div>
        <div className="pt-[88px]" />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
