'use client'

import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const TopRead = () => {

  const [topReads, setTopReads] = useState([]);

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  useEffect(() => {
    const fetchTopReads = async () => {
      try {
        const response = await fetch('/api/top-read')
        const data = await response.json()
        if (data && data.data) {
          setTopReads(data.data)
        }
      } catch (error) {
        console.error("Error fetching top reads data")
      }
    }

    fetchTopReads()

  }, [])


  return (
    topReads.map((top) => (
      <div className="border-[3px] rounded-xl border-greenPallete-400 flex flex-row" key={top.id}>
        <div className="p-3 basis-2/3 flex flex-col justify-between">
          <h2 className="font-bold sm:text-md lg:text-2xl text-bluePallete-700">{top.title}</h2>
          <p className='sm:text-sm'>{formatDate(top.createdAt)}</p>
        </div>
        <div className="ms-auto basis-1/3 ">
          <Image style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            width={100}
            height={100}
            src={top.media_uri} alt="" />
        </div>
      </div>
    ))
  );

}

export default TopRead