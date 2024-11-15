'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { FormatString } from '@/app/utils/stringUtils';
import { host } from '@/components/host';
import request from '@/app/utils/request';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Pagination from '@/components/projects/pagination';
import ShowcasingProjectSlider from '@/components/projects/showcasingProjectSlider';


const LIMITER = 5;

const ProjectPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const perPage = searchParams.get('perPage') ?? LIMITER;
  const start = (Number(page) - 1) * Number(perPage);
  const end = start + Number(perPage);
  const [menuActive, setMenuActive] = useState({ name: 'All', id: null });
  const [projectData, setProjectData] = useState([]);
  const [showProjectData, setShowProjectData] = useState([]);
  const [recordsTotalProject, setRecordsTotalProject] = useState();
  const [divisions, setDivisions] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const getDivisions = async () => {
    try {
      const response = await request.get('/users/divisions');
      setDivisions(response.data.data);
    } catch (error) {
      setDivisions([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDivisions();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      setIsLoadingProjects(true);
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
        setProjectData([]);
        setRecordsTotalProject(0);
      }

      try {
        const response = await request.get('projects');
        setShowProjectData(response.data.data);
      } catch (error) {
        setShowProjectData([]);
      }

      setIsLoadingProjects(false);
    };
    getProjects();
  }, [menuActive.id, menuActive.name, page]);

  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full h-auto mt-[60px] sm:mt-[90px] md:mt-[120px]">
        <div className="pt-[36px]" />
        {/* Title & desc area */}
        <section className="md:px-[0px] px-[14px]">
          <div className="">
            <h1 className="text-bluePallete-900 xl:text-[40px] lg:text-[30px] md:text-[24px] sm:text-[16px] font-black text-center 2xl:px-[350px] xl:px-[320px] lg:px-[270px] md:px-[150px] sm:px-20 leading-[20px] sm:leading-[24px] md:leading-[30px] xl:leading-[50px]">
              Showcasing Our Work: <br />
              Achievements and Capabilities of Central Computer Improvement
            </h1>
            <div className="lg:pt-[10px] md:pt-[5px] pt-[7px]" />
            <p className="text-center 2xl:text-[32px] xl:text-[24px] lg:text-[20px] md:text-[18px] sm:text-[14px] text-[10px] font-medium lg:px-[207px] md:px-[77px] sm:px-16 lg:leading-10 md:leading-[20px]">
              Explore our diverse projects and witness the passion, creativity,
              and impact of Central Computer Improvement
            </p>
          </div>
        </section>

        {/* Project image slide area */}
        <div className="lg:pt-[42px] md:pt-[38px] pt-[32px]" />
        {isLoading ? (
          <div className="w-full h-[70px] sm:h-[100px]" />
        ) : (
          <ShowcasingProjectSlider image={showProjectData} />
        )}

        {/* Menu division area */}
        <div className="lg:pt-[51px] md:pt-[45px] sm:pt-[36px] pt-[20px]" />
        {isLoading ? (
          <div className="w-full h-[70px] sm:h-[100px]"></div>
        ) : (
          <section className="xl:px-[179px] lg:px-[50px] md:px-[80px] sm:px-[40px] px-[10px]">
            <div className="flex flex-wrap lg:gap-[36px] sm:gap-[10px] gap-2 justify-center">
              {divisions !== undefined || divisions?.length > 0 || divisions !== null ? (
                divisions.map((data, index) => (
                  <div
                    key={index}
                    className={`lg:px-[30px] md:px-[20px] px-[10px] lg:py-[10px] md:py-[8px] py-[5px] ${menuActive.name == data.name ? 'bg-blue-200' : 'hover:bg-blue-200'
                      } bg-blue-100 rounded-md md:rounded-[10px] cursor-pointer`}
                    onClick={() => setMenuActive(data)}
                  >
                    <h1
                      className={`lg:text-[18px] md:text-[15px] text-[12px] ${menuActive.name == data.name ? 'md:font-medium !font-bold' : 'font-medium'
                        } text-black`}
                    >
                      {data.name}
                    </h1>
                  </div>
                ))
              ) : (
                // Handle notfound v1
                <div className="w-full h-[10px] sm:h-[20px] border-2" />
                // Handle notfound v2
                // <div className="flex items-center justify-center w-full h-[30px] sm:h-[50px]">
                //   <p className="font-bold text-center text-[14px] sm:text-[16px] lg:text-[20px] text-bluePallete-800">
                //     Data division not available
                //   </p>
                // </div>
              )}
            </div>
          </section>
        )}

        {/* Project list by menu division area */}
        <div className="pt-[40px] sm:pt-[50px]" />
        <section className="lg:px-[95px] md:px-[50px] px-[20px] ">
          <div className="flex flex-col lg:gap-[36px] md:gap-[28px] gap-[24px]">
            {isLoadingProjects ? (
              <div className="w-full h-[50px]"></div>
            ) : (
              projectData !== undefined || projectData !== null || !projectData ? (
                projectData.length !== 0 ? (
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
                                alt={`project-logo-${data.name}`}
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
                              <div className="md:px-[20px] px-[15px] md:py-[15px] py-[6px] md:w-full w-[148px] lg:rounded-[15px] rounded-[5px]  flex items-center justify-center gap-[10px] bg-bluePallete-900">
                                <Image
                                  width={0}
                                  height={0}
                                  alt="project image CCI"
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
                              <div className="md:px-[20px] px-[15px] md:py-[15px] py-[6px] md:w-full w-[148px] lg:rounded-[15px] rounded-[5px] flex items-center justify-center gap-[10px] lg:bg-bluePallete-900 bg-white lg:border-[0px] border border-bluePallete-900">
                                <Image
                                  width={0}
                                  height={0}
                                  alt="icon go to website"
                                  style={{ backgroundSize: 'contain' }}
                                  src={'assets/icon/repository.png'}
                                  className=" xl:w-[30px] lg:w-[25px] md:w-[30px] w-[13px] xl:h-[30px] lg:h-[25px] md:h-[30px] h-[13px] hidden lg:block "
                                />
                                <Image
                                  width={0}
                                  height={0}
                                  alt="icon go to repository"
                                  style={{ backgroundSize: 'contain' }}
                                  src={'assets/icon/repository_dark.png'}
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
                  ))
                ) : (
                  <div className="flex items-center justify-center w-full h-[50px]">
                    <p className="font-bold text-center text-md sm:text-xl lg:text-3xl text-bluePallete-800">
                      Project {menuActive.name} not available
                    </p>
                  </div>
                )
              ) : (
                // Handle notfound v1
                <div className="w-full h-[10px] sm:h-[20px]" />

                // Handle notfound v2
                // <div className="flex items-center justify-center w-full h-[30px] sm:h-[50px]">
                //   <p className="font-bold text-center text-[14px] sm:text-[16px] lg:text-[20px] text-bluePallete-800">
                //     Data division not available
                //   </p>
                // </div>
              ))}
          </div>
        </section>

        {/* Pagination area */}
        <div className="pt-[44px] sm:pt-[55px] lg:pt-[88px]" />
        <div className="flex justify-center">
          <Pagination
            hasNextPage={end < recordsTotalProject}
            hasPrevPage={start > 0}
            currentData={recordsTotalProject}
          />
        </div>
        <div className="pt-[44px] sm:pt-[55px] lg:pt-[88px]" />
      </main>
      <Footer />
    </>
  );
};

export default ProjectPage;