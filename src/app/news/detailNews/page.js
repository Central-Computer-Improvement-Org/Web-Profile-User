'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { host } from '@/components/host';
import request from '../../utils/request';  
import ImageNewsFirstSlider from '@/components/detailNews/imageNewsFirstSlider';
import RekomendasiNewsSlider from '@/components/detailNews/rekomendasiNewsSlider';
import Loading from '@/components/loading';
import TextNotFound from '@/components/teksNotFound';
import ImageNotFound from '@/components/imageNotFound';
import styles from '@/app/news/detailNews/detailNewsPage.module.css';


export default function DetailNews() {
  const newsId = useSearchParams().get('id');
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [thumbnail, setThumbnail] = useState('');
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [parsedHTML, setParsedHTML] = useState(null);
  const [newsTopData, setNewsTopData] = useState(null);
  const [newsAlso, setNewsAlso] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setTitle('Title not found');
    setThumbnail('assets/icon/notfound.svg');
    setImage('assets/icon/notfound.svg');
    setDescription('Description not found');
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
  
    // Mengambil detail news hanya jika `newsId` tersedia dan belum pernah diambil sebelumnya
    const fetchDetailNews = newsId ? request.get(`/news?id=${newsId}`).then((response) => {
      if (response?.data?.code === 200) {
        setTitle(response.data.data.title);
        setThumbnail(response.data.data.mediaUri);
        setImage(response.data.data.detailNewsMedia);
        setDescription(response.data.data.description);
        setDate(response.data.data.createdAt);
      } else {
        handleError();
      }
    }).catch(() => {
      handleError();
    }) : Promise.resolve(); // Kalau tidak ada newsId, skip request ini
  
    const handleDescription = () => {
      if (description) {
        const doc = new DOMParser().parseFromString(description, 'text/html');
        const htmlElement = doc.documentElement;
        const classNames = Array.from(htmlElement.classList).join(' ');
        htmlElement.setAttribute('class', classNames);
        setParsedHTML(htmlElement);
      } else {
        setParsedHTML(null);
      }
    };
  
    // Menangani request untuk data news lainnya
    const getDataNews = async () => {
      try {
        const response = await request.get('/news');
        if (response?.status === 200) {
          setNewsAlso(response.data.data || []);
          const newData = response.data.data;
          const sortedData = newData.sort((a, b) => b.visitedCount - a.visitedCount);
          setNewsTopData(sortedData);
        } else {
          console.warn('Unexpected response code :', response.data.code);
        }
      } catch (error) {
        console.error('Failed to fetch data news', error);
      }
    };
  
    // Jalanin semua request bersamaan pakai Promise.all
    Promise.all([fetchDetailNews, getDataNews()])
      .finally(() => {
        handleDescription(); // Panggil handleDescription setelah request selesai
        setIsLoading(false);
      });
  
  }, [newsId, description]);  
  
  return (
    <>
      <main className="w-full h-auto">
        <span className="block h-full bg-gradientAccentTwo">
          <span className="block h-full bg-gradientDefaultTwo">
            {/* Main News */}
            <section id="headLine" className="w-full md:pb-0 sm:pb-[111px] pb-[60px]">
              {/* Title and date news area */}
              <div
                id="title"
                className="w-full xl:max-w-[1390px] lg:max-w-[66rem] md:max-w-[48rem] sm:max-w-[38rem] max-w-[28rem] px-3 sm:px-0 mx-auto lg:pt-44 md:pt-36 sm:pt-[7rem] pt-[70px]"
              >
                {isLoading ? (
                  <Loading
                    size="w-[70px] h-[70px]"
                    textAlignment="text-center"
                  />
                ) : title ? (
                  <h1 className="mb-2 text-xl font-black leading-tight lg:text-6xl md:text-4xl text-bluePallete-800 lg:mb-6">
                    {title}
                  </h1>
                ) : (
                  <TextNotFound className="text-3xl text-transparent lg:text-6xl md:text-4xl">
                    {''}
                  </TextNotFound>
                )}
                <div className="inline-block border border-bluePallete-600 rounded-full lg:text-[25px] md:text-[14px] text-[10px] text-mainFontColor font-medium lg:px-10 px-[9px] lg:py-2 py-1 bg-[#ffff]">
                  {isLoading ? (
                    <Loading
                      size="w-[70px] h-[70px]"
                      textAlignment="text-center"
                    />
                  ) : date ? (
                    <h1 className="font-medium lg:text-[25px] md:text-[14px] text-[10px] lg:px-3 px-[9px] lg:py-[4px] sm:py-1 py-[1px] text-mainFontColor">
                      {moment(String(date)).format('MMM DD[,] YYYY')}
                    </h1>
                  ) : (
                    <TextNotFound className="font-medium lg:text-[25px] md:text-[14px] text-[10px] lg:px-3 px-[9px] lg:py-[4px] py-1 text-transparent">
                      01 MARET 2024
                    </TextNotFound>
                  )}
                </div>
              </div>
              {/* Detail news area */}
              <div className="w-full xl:pt-[60px] md:pt-[40px] pt-[19px] flex xl:flex-row flex-col gap-[40px]">
                {/* base detail news area */}
                <div className="col-span-2 w-full xl:ml-[70px] xl:max-w-[923px] ">
                  {/* hero image slider news */}
                  {image?.length ? <ImageNewsFirstSlider image={image}/> : <Image
                      src={`${host}${thumbnail}`}
                      alt="Thumbnail News"
                      width={0}
                      height={0}
                      className={`w-full h-[200px] sm:h-[400px] lg:h-[500px] xl:h-[400px] rounded-0 sm:rounded-lg object-cover object-top ${styles.projectsThumbnailImage}`}
                  />}
                  {/* description news */}
                  <div className="mt-[20px] sm:mt-[30px] md:mt-[40px] px-[15px] sm:px-[20px] md:px-[30px] lg:px-[50px] xl:px-0">
                    {parsedHTML && parsedHTML.innerHTML.trim() !== '' ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: parsedHTML.innerHTML,
                        }}
                        className="xl:text-[30px] md:text-[20px] text-[10px] text-start md:text-justify "
                      />
                    ) : (
                      <TextNotFound className="xl:text-[30px] md:text-[20px] text-[10px] text-start md:text-justify text-transparent">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </TextNotFound>
                    )}
                  </div>
                </div>
                {/* Top read of the day area */}
                <div className="w-full !px-[25px] sm:px-[20px] md:px-[30px] lg:px-[50px] xl:pl-0 pr-0 xl:pr-[40px]">
                  <div className="lg:mt-14 mt-5 sm:mt-[53px]">
                    <div className="flex items-center justify-center xl:justify-start">
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
                      <h1
                        className={`${styles.topHeadlineNews} text-center xl:text-[32px] md:text-[22px] text-[25px] pl-0 xl:pl-[5px] text-bluePallete-800 font-bold`}
                      >
                        Top Reads of The Day
                      </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-5 mt-4 lg:px-0">
                      {newsTopData &&
                        newsTopData.slice(0, 3).map((data, index) => (
                          <Link
                            key={index}
                            href={`/news/detailNews?id=${data.id}`}
                          >
                            <div className="h-[90px] sm:h-[110px] md:h-[120px] lg:h-[130px] xl:h-[100px] max-h-[90px] sm:max-h-[110px] md:max-h-[120px] lg:max-h-[130px] xl:max-h-[100px] w-full flex justify-between border border-bluePallete-600 bg-white rounded-xl">
                              <div className="basis-[70%] sm:basis-[80%] xl:basis-[70%] px-[11px] py-[8px] flex flex-col sm:justify-center self-center h-full">
                                {data?.title ? (
                                  <h1
                                    className={`!line-clamp-2 sm:!line-clamp-3 !xl:text-[20px] !md:text-[24px] text-[15px] font-semibold text-bluePallete-800 ${styles.detailTopNewsTitle}`}
                                  >
                                    {data.title}
                                  </h1>
                                ) : (
                                  <TextNotFound className="xl:text-[20px] md:text-[14px] text-[12px] text-transparent font-bold">
                                    {''}
                                  </TextNotFound>
                                )}
                                {date ? (
                                  <p className="block sm:hidden font-medium text-[12px] sm:text-[14px] text-[#6B6B6B]">
                                    {moment(date).format('DD MMMM YYYY')}
                                  </p>
                                ) : (
                                  <TextNotFound className="font-medium text-[12px] sm:text-[14px] text-transparent">
                                    {''}
                                  </TextNotFound>
                                )}
                              </div>
                              <div className="basis-[30%] sm:basis-[20%] xl:basis-[30%]">
                                {data?.mediaUri ? (
                                  <Image
                                    width={150}
                                    height={100}
                                    alt="Image News Central Computer Improvement"
                                    src={`${host}${data?.mediaUri}`}
                                    className={`w-full max-h-[90px] sm:max-h-[110px] md:max-h-[120px] lg:max-h-[130px] xl:max-h-[100px] rounded-r-xl object-cover object-center sm:object-top border-l-[1px] border-bluePallete-500`}
                                  />
                                ) : (
                                  <ImageNotFound className="w-[100px] sm:w-[250px] sm:w-max-[250px] xl:w-[150px] xl:max-w-[150px] xl:h-auto rounded-r-xl object-cover" />
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Also in News */}
            <section
              id="rekomendasiNews"
              className="w-full py-[111px] md:block hidden"
            >
              <div className="xl:pl-[107px] md:px-[36px] pr-10 flex flex-col gap-7">
                <h1 className="xl:text-[80px] md:text-[40px] text-bluePallete-500 font-black">
                  Also in News
                </h1>
                <div>
                  <RekomendasiNewsSlider newsData={newsAlso} />
                </div>
              </div>
            </section>
          </span>
        </span>
      </main>
    </>
  );
};