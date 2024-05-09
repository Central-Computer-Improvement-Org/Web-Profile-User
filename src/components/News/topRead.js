'use client';

import { dateFormater } from '@/app/utils/dateFormater';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const TopRead = ({ title, date, image }) => {
  return (
    <div className="border-[3px] rounded-xl border-greenPallete-400 flex flex-row">
      <div className="p-3 basis-2/3 flex flex-col justify-between">
        <h2 className="font-bold sm:text-md lg:text-2xl text-bluePallete-700">
          {title}
        </h2>
        <p className="sm:text-sm">
          {moment(dateFormater(date)).format('MMM DD[,] YYYY')}
        </p>
      </div>
      <div className="ms-auto basis-1/3 ">
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          width={100}
          height={100}
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default TopRead;
