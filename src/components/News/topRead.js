'use client';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

import ImageNotFound from '@/components/imageNotFound';
import TextNotFound from '@/components/teksNotFound';
import styles from '@/components/News/newsComponent.module.css';

const TopRead = ({ title, date, image }) => {
  return (
    <div className="w-full h-[100px] max-h-[100px] flex flex-row rounded-xl border-[2px] border-bluePallete-400">
      <div className="p-3 basis-[70%] flex flex-col justify-between">
        {title ? (
          <h1
            className={`font-semibold sm:text-[15px] lg:text-[20px] leading-[25px] overflow-hidden text-bluePallete-700 ${styles.topNewsTitle}`}
          >
            {title}
          </h1>
        ) : (
          <TextNotFound className="font-semibold sm:text-[15px] lg:text-[20px] leading-[25px] text-transparent">
            {''}
          </TextNotFound>
        )}
        {date ? (
          <p className="font-medium text-[12px] sm:text-[14px] text-[#6B6B6B]">
            {moment(date).format('DD MMMM YYYY')}
          </p>
        ) : (
          <TextNotFound className="font-medium text-[12px] sm:text-[14px] text-transparent">
            {''}
          </TextNotFound>
        )}
      </div>
      <div className="basis-[30%]">
        {image ? (
          <Image
            width={100}
            height={100}
            src={image}
            alt="Thumbnail News Central Computer Improvement"
            className="w-full h-full max-h-[100px] xl:max-w-[150px] object-cover aspect-video rounded-r-[10px] border-l-[2px] border-bluePallete-500"
          />
        ) : (
          <ImageNotFound
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        )}
      </div>
    </div>
  );
};

export default TopRead;
