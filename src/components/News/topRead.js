'use client';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';

import ImageNotFound from '@/components/imageNotFound';
import TextNotFound from '@/components/teksNotFound';

const TopRead = ({ title, date, image }) => {
  return (
    <div className="border-[3px] rounded-xl border-greenPallete-400 flex flex-row">
      <div className="p-3 basis-2/3 flex flex-col justify-between">
        {
          title ? <h1 className="font-bold sm:text-md lg:text-2xl text-bluePallete-700">{title}</h1> : <TextNotFound className="font-bold sm:text-md lg:text-2xl text-transparent">Ini Judul</TextNotFound>
        }
        {
          date ? <p className="text-[12px] sm:text-[14px] text-[#6B6B6B]">{moment(date).format('DD MMMM YYYY')}</p> : <TextNotFound className="text-[12px] sm:text-[14px] text-transparent">Ini Tanggal</TextNotFound>
        }
      </div>
      <div className="ms-auto basis-1/3 ">
        {
          image ? 
            <Image
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            width={100}
            height={100}
            src={image}
            alt="Thumbnail News Central Computer Improvement"
          /> : 
          <ImageNotFound style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        }
      </div>
    </div>
  );
};

export default TopRead;