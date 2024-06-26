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
import { host } from '../host';

const LIMITER = 5;

const ProjectPage = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams.get('perPage') ?? LIMITER;
  console.log(page, perPage);
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);

  //   let ProjectMenus = [{ menu: 'All', id: nulls }];
  const [menuActive, setMenuActive] = useState({ name: 'All', id: null });
  const [projectData, setProjectData] = useState([]);
  const [showProjectData, setShowProjectData] = useState([]);
  const [recordsTotalProject, setRecordsTotalProject] = useState();
  const [divisions, setDivisions] = useState([]);

  const getDivisions = async () => {
    request.get('/users/divisions').then((v) => {
      setDivisions(v.data.data);
    });
  };

  useEffect(() => {
    getDivisions();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      let payload = {
        limit: LIMITER,
        page: page,
      };

      if (menuActive.name !== 'All') {
        payload = {
          ...payload,
          page: 1,
          divisionId: menuActive.id,
        };
      }

      try {
        const response = await request.get('projects', payload);
        setProjectData(response.data.data);
        setRecordsTotalProject(response.data.recordsTotal);
      } catch (error) {
        // Handle error
      }

      try {
        const response = await request.get('projects');
        setShowProjectData(response.data.data);
      } catch (error) {
        // Handle error
      }
    };
    getProjects();
  }, [menuActive.id, menuActive.name, page]);

  if (!projectData) {
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
            <h1 className="xl:text-[50px] lg:text-[40px] md:text-[30px] text-[20px] font-black text-center xl:px-[216px] lg:px-[156px] md:px-[107px]">
              Showcasing Our Work: <br />
              Achievements and Capabilities of Central Computer Improvement
            </h1>
            <div className="lg:pt-[24px] md:pt-[20px] pt-[10px]" />
            <p className="text-center xl:text-[40px] lg:text-[26px] md:text-[20px] text-[12px] font-medium lg:px-[207px] md:px-[77px]">
              Explore our diverse projects and witness the passion, creativity,
              and impact of Central Computer Improvement
            </p>
          </div>
        </section>
        <div className="lg:pt-[61px] md:pt-[45px] pt-[32px]" />
        <ShowcasingProjectSlider image={showProjectData} />
        <div className="lg:pt-[61px] md:pt-[45px] pt-[36px]" />
        <section className="xl:px-[179px] lg:px-[50px] md:px-[80px] px-[20px]">
          <div className="flex flex-wrap lg:gap-[36px] gap-[2px] justify-center ">
            {divisions.map((data, index) => (
              <div
                key={index}
                className={`lg:px-[30px] md:px-[20px] px-[10px] lg:py-[10px] md:py-[8px] py-[5px] ${
                  menuActive.name == data.name
                    ? 'md:bg-blue-100 bg-transparent'
                    : 'bg-transparent'
                } rounded-[10px] `}
                style={{ cursor: 'pointer' }}
                onClick={() => setMenuActive(data)}
              >
                <h1
                  className={`lg:text-[24px] md:text-[18px] text-[15px] ${
                    menuActive.name == data.name
                      ? 'md:font-medium font-bold'
                      : 'font-medium'
                  } lg:text-black text-[#4F4F4F] `}
                >
                  {data.name}
                </h1>
              </div>
            ))}
          </div>
        </section>
        <div className="pt-[39px]" />
        <section className="lg:px-[95px] md:px-[50px] px-[20px] ">
          <div className="flex flex-col lg:gap-[36px] md:gap-[28px] gap-[24px]">
            {projectData &&
              projectData.map((data, index) => (
                <div
                  key={index}
                  className="w-full lg:px-[35px] lg:py-[38px] lg:border border-black rounded-[20px] flex lg:flex-row flex-col lg:gap-[40px] gap-[12px]"
                >
                  <div className="rounded-[10px]">
                    <Image
                      alt="project-img"
                      src={host + data.imageUri}
                      width={467}
                      height={284}
                      responsive="true"
                      style={{ backgroundSize: 'contain' }}
                      className={`w-full h-[189px] sm:w-[480px] sm:h-[267px] md:w-full md:h-[350px] lg:!w-[400px]  lg:h-[261px] xl:w-[455px]  xl:h-[311px]  xl:max-w-[455px]  xl:max-h-[311px] rounded-[10px] object-contain`}
                    />
                  </div>
                  <div className="w-full ">
                    <div className="h-full flex flex-col lg:justify-between lg:gap-0 md:gap-[20px] gap-[9px] object-contain">
                      <div className="flex flex-col lg:gap-[14px] md:gap-[10px] gap-[6px]">
                        <div className="flex items-center justify-between object-contain">
                          <Image
                            width={0}
                            height={0}
                            alt="project-img"
                            style={{ backgroundSize: 'contain' }}
                            src={host + data.iconUri}
                            className="max-w-[50px] max-h-[50px] lg:w-[50px] lg:h-[50px] w-[25px] h-[25px] lg:block hidden object-contain"
                          />
                          <h1 className="xl:text-[30px] lg:text-[25px] md:text-[25px] text-[18px] lg:font-semibold font-bold text-black">
                            {data.name}
                          </h1>
                        </div>
                        <div>
                          <p className="xl:text-[30px] lg:text-[25px] md:text-[25px] text-[15px] font-medium text-black">
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
                              style={{ backgroundSize: 'contain' }}
                              src={'assets/icon/website.png'}
                              className=" xl:w-[30px] lg:w-[25px] md:w-[30px] w-[13px] xl:h-[30px] lg:h-[25px] md:h-[30px] h-[13px] "
                            />
                            <h1 className="xl:text-[25px] lg:text-[18px] md:text-[25px] text-[10px] text-bluePallete-100 font-semibold">
                              Go to Website
                            </h1>
                          </div>
                        </Link>
                        <Link
                          href={data.repositoryUri}
                          className="flex cursor-pointer"
                        >
                          <div className="md:px-[20px] px-[15px] md:py-[15px] py-[6px] md:w-full w-[142px] lg:rounded-[15px] rounded-[5px]  flex items-center justify-center gap-[10px] lg:bg-bluePallete-900 bg-white lg:border-[0px] border border-bluePallete-900">
                            <Image
                              width={0}
                              height={0}
                              alt="project-img"
                              style={{ backgroundSize: 'contain' }}
                              src={'assets/icon/repository.png'}
                              className=" xl:w-[30px] lg:w-[25px] md:w-[30px] w-[13px] xl:h-[30px] lg:h-[25px] md:h-[30px] h-[13px] hidden lg:block "
                            />
                            <Image
                              width={0}
                              height={0}
                              alt="project-img"
                              style={{ backgroundSize: 'contain' }}
                              src={'assets/icon/repository-dark.png'}
                              className=" xl:w-[30px] lg:w-[25px] md:w-[30px] w-[13px] xl:h-[30px] lg:h-[25px] md:h-[30px] h-[13px] lg:hidden "
                            />
                            <h1 className="xl:text-[25px] lg:text-[18px] md:text-[25px] text-[10px] lg:text-white text-bluePallete-900 font-semibold">
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
            hasNextPage={end < recordsTotalProject}
            hasPrevPage={start > 0}
            currentData={recordsTotalProject}
          />
        </div>
        <div className="pt-[88px]" />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;
