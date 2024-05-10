'use client';
import Header from '@/components/header';
import Nav from '@/components/navbar';
import Footer from '@/components/footer';
import React, { useEffect, useState } from 'react';
import AlsoNewsSlider from '@/components/News/alsoNewsSlider';
import CarouselSlider from '@/components/News/carouselSlider';
import TopRead from '@/components/News/topRead';
import ArticleCard from '@/components/News/ArticleCard';
import HeroSection from '@/components/News/HeroSection';
import Image from 'next/image';
import HeroSectionSliderSecond from '@/components/News/HeroSectionSliderSecond';
import request from '../utils/request';
import { host } from '@/components/host';
import Link from 'next/link';

export default function News() {
  const [articleDatas, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    request
      .get('/news')
      .then(function (res) {
        if (res.data.code === 200 || res.data.code === 201) {
          setArticle(res.data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch(function (err) {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <span className="block h-full ">
        <span className="block h-full bg-gradientAccent">
          <main
            className={`block bg-gradientDefault h-full bg-fixed bg-no-repeat px-[40px] md:px-[80px] lg:px-[120px] py-[120px] md:py-[10rem] relative `}
          >
            <h1 className="text-7xl font-bold text-secondPrimary px-[15px]">
              NEWS
            </h1>
            <div className="w-full h-[5px] mt-2 bg-bluePallete-700 rounded-lg"></div>

            <section id="hero-section" className="container relative">
              <div className=" bg-transparent mt-4 ">
                <HeroSection />
              </div>
            </section>
            <div className="xl:mt-[95px] md:mt-[80px] mt-[40px]"></div>
            <section id="article">
              <div className="container">
                <div className="w-full flex flex-row flex-wrap-reverse  ">
                  <div className="sm:w-full hidden  mt-5 xl:mt-0 xl:basis-7/12 lg:flex flex-col gap-3">
                    {articleDatas &&
                      articleDatas.slice(0, 5).map((data, index) => (
                        <Link
                          key={index}
                          href={`/news/detailNews?id=${data.id}`}
                        >
                          <ArticleCard title={data.title} />
                        </Link>
                      ))}
                  </div>
                  <div className="sm:w-full xl:basis-5/12 px-0 xl:px-8 flex flex-col gap-4">
                    <div className="flex  items-center justify-center xl:justify-start mb-3">
                      <svg
                        className="xl:w-[5opx] xl:h-[50px] w-[40px] h-[40px] inline-block "
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
                      <h1 className="text-bluePallete-800 text-[25px] md:text-2xl lg:text-3xl font-bold items-baseline py-3 inline ms-3">
                        Top Read of The Day
                      </h1>
                    </div>
                    {articleDatas &&
                      articleDatas.slice(0, 3).map((data, index) => (
                        <Link
                          key={index}
                          href={`/news/detailNews?id=${data.id}`}
                        >
                          <TopRead
                            title={data.title}
                            date={data.createdAt}
                            image={host + data.mediaUri}
                          />
                        </Link>
                      ))}
                    <div />
                  </div>
                </div>
              </div>
            </section>

            <section
              id="also-in-news"
              className="w-full h-auto pb-20 sm:pb-32 pt-20 sm:pt-36 "
            >
              <div className="flex  items-center justify-center xl:justify-start">
                <h1 className="text-[25px] lg:text-6xl text-bluePallete-800 font-bold mb-7">
                  Also in News
                </h1>
              </div>
              <div className=" lg:hidden flex flex-col gap-4">
                {articleDatas &&
                  articleDatas.slice(0, 5).map((data, index) => (
                    <Link key={index} href={`/news/detailNews?id=${data.id}`}>
                      <ArticleCard title={data.title} />
                    </Link>
                  ))}
              </div>
              <div className="hidden lg:block">
                <AlsoNewsSlider />
              </div>
            </section>

            <section
              id="carousel"
              className="container hidden lg:block  mx-auto w-full relative"
            >
              {/* <div className="mx-auto  mt-4 "> */}
              {/* <CarouselSlider /> */}
              <HeroSectionSliderSecond />
              {/* </div> */}
            </section>
          </main>
        </span>
      </span>
      <Footer />
    </>
  );
}
