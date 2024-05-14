'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import CrewSlider from '@/components/credit/crewSlider';
import request from '../utils/request';
import CardCreditProfile from '@/components/credit/cardCreditProfile';
import NotFound from '@/components/imageNotFound';
import Loading from '@/components/loading';
import { host } from '@/components/host';

export default function Credits() {
  const presidentDatas = [
    { posisition: 'Ketua Devisi', name: 'Muhammad Firmansyah Syaputrah' },
    { posisition: 'Ketua Devisi', name: 'Muhammad Ardiansyah' },
  ];
  const crewDatas = [
    { posisition: 'Crew', name: 'Kenzo Tiyu' },
    { posisition: 'Crew', name: 'Kenzo Tiyu' },
    { posisition: 'Crew', name: 'Kenzo Tiyu' },
    { posisition: 'Crew', name: 'Kenzo Tiyu' },
    { posisition: 'Crew', name: 'Kenzo Tiyu' },
    { posisition: 'Crew', name: 'Kenzo Tiyu' },
  ];
  const [contributors, setContributors] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request
      .get('/projects?id=PJT-20240508164541859997')
      .then(function (res) {
        console.log(res.data.data);
        if (res.data.code === 200 || res.data.code === 201) {
          setContributors(res.data.data.contributors);
          console.log(res.data.data[0], 'asd');
          setIsLoading(false);
        } else {
          // console.log(res);
          setIsLoading(false);
        }
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const ketuaDesignDatas = contributors
    ?.map((data, index) => {
      if (index <= 2) {
        if (data.division != null) {
          return data;
        }
      }
    })

    .filter(
      (v) =>
        v !== undefined &&
        v.role?.name !== 'Employee Experience' &&
        v.division?.name === 'Design'
    );
  const ketuaWebDatas = contributors
    ?.map((data, index) => {
      if (index <= 2) {
        if (data.division != null) {
          return data;
        }
      }
    })

    .filter(
      (v) =>
        v !== undefined &&
        v.role?.name !== 'Employee Experience' &&
        v.division?.name === 'Web Development'
    );

  return (
    <div>
      <Header />
      <Navbar />
      <main className="w-full h-auto mt-[60px] sm:mt-[90px] md:mt-[120px]">
        <div className="mt-[96px]" />
        <section>
          <h1 className="xl:text-[100px] md:text-[70px] text-[32px] font-black text-greenPallete-400 text-center">
            CREDIT
          </h1>
          <div className="xl:mt-[47px] md:mt-[38px] mt-[20px]" />
          <div className="xl:w-[1147px] xl:h-[108px] md:w-[700px] md:h-[88px] w-[311px] h-[44px] rounded-[15px] bg-bluePallete-900 text-white font-bold xl:text-[40px] md:text-[30px] text-[20px] m-auto flex justify-center items-center">
            <h1>Meet Our Creators</h1>
          </div>
        </section>
        <div className="xl:mt-[102px] md:mt-[102px] mt-[40px]" />
        <section className="">
          <div className="xl:w-[594px] xl:h-[108px] md:w-[300px] md:h-[88px] w-[250px] h-[54px] rounded-[15px] bg-bluePallete-300 text-bluePallete-800 font-bold xl:text-[40px] md:text-[30px] text-[20px] m-auto flex justify-center items-center">
            <h1>UI/UX</h1>
          </div>
          <div className="xl:mt-[45px] md:mt-[35px] mt-[25px]" />
          {isLoading ? (
            <div className="w-full h-[200px] flex justify-center items-center">
              <Loading width={80} height={80} />
            </div>
          ) : contributors ? (
            <div>
              <div className="flex xl:gap-[40px] md:gap-[30px] gap-[16px] md:flex-row flex-col justify-center items-center">
                {/* {contributors
                  .filter(
                    (data) =>
                      data.role?.name !== 'Employee Experience' &&
                      data.division?.name === 'Design'
                  )
                  .map((data, index) => (
                    <CardCreditProfile
                      color={'bg-greenPallete-300'}
                      image={host + data.profileUri}
                      jobdes={data.role?.name}
                      name={data.name}
                      key={index}
                    />
                  ))} */}
                {ketuaDesignDatas.length ? (
                  ketuaDesignDatas.length &&
                  ketuaDesignDatas.map((data, index) => (
                    <CardCreditProfile
                      color={'bg-greenPallete-300'}
                      image={host + data.profileUri}
                      jobdes={data.role?.name}
                      name={data.name}
                      key={index}
                    />
                  ))
                ) : (
                  <div className="flex justify-center w-[100%]">
                    <NotFound className="flex justify-center w-[200px]" />
                  </div>
                )}
              </div>
              <div className="mt-[74px]" />
              <div className="">
                <CrewSlider
                  crewDatas={contributors
                    ?.map((data) => {
                      if (data.division != null) {
                        return data;
                      }
                    })
                    .filter(
                      (v) =>
                        v !== undefined &&
                        v.role?.name === 'Employee Experience' &&
                        v.division?.name === 'Design'
                    )}
                />
              </div>
            </div>
          ) : (
            <div>
              <NotFound />
            </div>
          )}
        </section>
        <div className="xl:mt-[180px] md:mt-[120px] mt-[60px]" />
        <section className="">
          <div className="xl:w-[594px] xl:h-[108px] md:w-[300px] md:h-[88px] w-[250px] h-[54px] rounded-[15px] bg-bluePallete-300 text-bluePallete-800 font-bold xl:text-[40px] md:text-[30px] text-[20px] m-auto flex justify-center items-center">
            <h1>Web Development</h1>
          </div>
          <div className="xl:mt-[45px] md:mt-[35px] mt-[25px]" />
          {isLoading ? (
            <div className="w-full h-[200px] flex justify-center items-center">
              <Loading width={80} height={80} />
            </div>
          ) : contributors ? (
            <div>
              <div className="flex xl:gap-[40px] md:gap-[30px] gap-[16px] md:flex-row flex-col justify-center items-center">
                {ketuaWebDatas.length ? (
                  ketuaWebDatas.length &&
                  ketuaWebDatas.map((data, index) => (
                    <CardCreditProfile
                      color={'bg-greenPallete-300'}
                      image={host + data.profileUri}
                      jobdes={data.role?.name}
                      name={data.name}
                      key={index}
                    />
                  ))
                ) : (
                  <div className="flex justify-center w-[100%]">
                    <NotFound className="flex justify-center w-[200px]" />
                  </div>
                )}
              </div>
              <div className="mt-[74px]" />
              <div className="">
                <CrewSlider
                  crewDatas={contributors
                    ?.map((data) => {
                      if (data.division != null) {
                        return data;
                      }
                    })
                    .filter(
                      (v) =>
                        v !== undefined &&
                        v.role?.name === 'Employee Experience' &&
                        v.division?.name === 'Web Development'
                    )}
                />
              </div>
            </div>
          ) : (
            <NotFound />
          )}
        </section>
        <div className="mt-[90px]" />
      </main>
      <Footer />
    </div>
  );
}
