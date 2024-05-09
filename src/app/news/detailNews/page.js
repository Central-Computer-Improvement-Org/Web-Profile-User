'use client';
import ImageNewsFirstSlider from '@/components/detailNews/imageNewsFirstSlider';
import RekomendasiNewsSlider from '@/components/detailNews/rekomendasiNewsSlider';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import request from '../../utils/request';
import moment from 'moment';
import { FormatString } from '../../utils/stringUtils';

export default function DetailNews() {
  // const [newsDetailData, setNewsDetailData] = useState();
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [parsedHTML, setParsedHTML] = useState(null);
  const [newsOfTheDay, setNewsOfTheDay] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [newsNewData, setNewsNewData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    request
      .get('/detail')
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setNewsNewData(response.data);
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
    request
      .get('detailNews')
      .then(function (response) {
        setTitle(response.data.data.title);
        setImage(response.data.data.image);
        setDescription(response.data.data.description);
        setDate(response.data.data.createdAt);
      })
      .catch(function (error) {
        console.log(error);
      });

    request
      .get('news')
      .then(function (response) {
        setNewsOfTheDay(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [description]);

  useEffect(() => {
    const doc = new DOMParser().parseFromString(description, 'text/html');
    const htmlElement = doc.documentElement;
    const classNames = Array.from(htmlElement.classList).join(' ');
    htmlElement.setAttribute('class', classNames);
    setParsedHTML(htmlElement);
  }, [description]);

  return (
    <>
      <Header />
      <Navbar />
      <main className="w-full h-auto">
        <span className="block h-full bg-gradientAccent">
          <div className="bg-gradientDefault h-full bg-fixed bg-no-repeat relative">
            <section id="headLine" className="w-full md:pb-0 pb-[111px] ">
              <div
                id="title"
                className="w-full xl:px-20 md:px-12 px-4 sm:pt-44 pt-24  mx-auto"
              >
                <h1 className="lg:text-6xl md:text-4xl text-xl text-bluePallete-800 font-black lg:mb-6 mb-2 leading-tight">
                  <span className="lg:text-6xl md:text-4xl text-3xl "></span>{' '}
                  {title}
                </h1>
                <div className="inline-block border border-bluePallete-600 rounded-full bg-white lg:text-[25px] md:text-[18px] text-[10px] text-mainFontColor font-medium lg:px-10 px-[9px] lg:py-3 py-1">
                  {moment(date).format('MMM DD[,] YYYY')}
                </div>
              </div>
              <div className="w-full xl:pl-[78px] md:pl-0 xl:pr-[29px] md:pr-0 xl:pt-[60px] md:pt-[40px] pt-[19px] flex xl:flex-row  flex-col gap-[14px] ">
                <div className="col-span-2  xl:w-[923px] md:w-full">
                  <ImageNewsFirstSlider image={image} />
                  <div className="mt-[40px] xl:px-0 md:px-[50px] px-[30px]">
                    {parsedHTML && parsedHTML != 'undefined' ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: parsedHTML.innerHTML,
                        }}
                        className="xl:text-[30px] md:text-[20px] text-[10px] text-start md:text-justify "
                      />
                    ) : (
                      <h1>Loading...</h1>
                    )}
                  </div>
                </div>
                <div className="xl:w-[396px] md:w-full">
                  <div className="lg:mt-14 mt-[53px]">
                    <div className="flex items-center  lg:justify-start justify-center">
                      <svg
                        className="xl:w-[5opx] xl:h-[50px] w-[40px] h-[40px] "
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M45.7031 10.9375H40.625V40.625C40.625 41.4538 40.9542 42.2487 41.5403 42.8347C42.1263 43.4208 42.9212 43.75 43.75 43.75C44.5788 43.75 45.3737 43.4208 45.9597 42.8347C46.5458 42.2487 46.875 41.4538 46.875 40.625V12.1094C46.875 11.7986 46.7515 11.5005 46.5318 11.2807C46.312 11.061 46.0139 10.9375 45.7031 10.9375Z"
                          fill="#0F9848"
                        />
                        <path
                          d="M42.1045 46.6553C40.7827 46.2927 39.6165 45.5064 38.7847 44.4171C37.953 43.3277 37.5016 41.9956 37.5 40.625V4.29688C37.5 3.98607 37.3765 3.688 37.1568 3.46823C36.937 3.24846 36.6389 3.125 36.3281 3.125H4.29688C3.98607 3.125 3.688 3.24846 3.46823 3.46823C3.24846 3.688 3.125 3.98607 3.125 4.29688V41.4062C3.125 42.8567 3.70117 44.2477 4.72676 45.2732C5.75235 46.2988 7.14335 46.875 8.59375 46.875H42.0752C42.1029 46.8761 42.13 46.8668 42.1512 46.8489C42.1724 46.8311 42.1862 46.8059 42.1898 46.7785C42.1935 46.751 42.1868 46.7231 42.171 46.7004C42.1552 46.6776 42.1315 46.6615 42.1045 46.6553ZM9.375 20.3125V10.9375H18.75V20.3125H9.375ZM31.25 39.0625H9.375V35.9375H31.25V39.0625ZM31.25 32.8125H9.375V29.6875H31.25V32.8125ZM31.25 26.5625H9.375V23.4375H31.25V26.5625ZM31.25 20.3125H21.875V17.1875H31.25V20.3125ZM31.25 14.0625H21.875V10.9375H31.25V14.0625Z"
                          fill="#0F9848"
                        />
                      </svg>
                      <h1 className="xl:text-[32px] lg:text-[22px] text-[25px] text-bluePallete-800 font-bold">
                        Top Reads of The Day
                      </h1>
                    </div>
                    <div className="mt-4 lg:px-0 px-[34px] grid grid-cols-1 gap-5">
                      {newsOfTheDay &&
                        newsOfTheDay.slice(0, 3).map((data, index) => (
                          <div
                            key={index}
                            className="lg:h-[100%] md:h-[150px] h-[90px] flex justify-between border border-bluePallete-600 rounded-xl"
                          >
                            <div className=" px-[11px] py-[8px] flex flex-col justify-between ">
                              <h1 className="xl:text-[20px] text-[15px] md:text-[24px] font-semibold text-bluePallete-800">
                                {FormatString(data.title, 39)}
                              </h1>
                              <p className="lg:text-sm md:text-[20px] text-[12px] text-mainFontColor font-medium xl:hidden md:block">
                                {moment(data.createdAt).format(
                                  'MMM DD[,] YYYY'
                                )}
                              </p>
                            </div>
                            <Image
                              width={0}
                              height={0}
                              alt="imgNews"
                              src={data.mediaUri}
                              className="xl:w-[150px] lg:w-[120px] md:w-[200px] w-[100px] rounded-r-xl "
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              id="rekomendasiNews "
              className="w-full py-[111px] md:block hidden "
            >
              <div className="xl:pl-[107px] md:px-[36px] pr-10 flex flex-col gap-7">
                <h1 className="xl:text-[80px] md:text-[40px] text-bluePallete-500 font-black">
                  Also in News
                </h1>
                <div>
                  <RekomendasiNewsSlider newsData={newsOfTheDay} />
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
