import React, { useState, useEffect } from 'react';
import { useWindowSize } from '@uidotdev/usehooks';

import { host } from '../host';
import CardCreditProfile from './cardCreditProfile';
import NotFound from '../imageNotFound';
import styles from './credit.module.css';

export default function CrewSlider({
  crewDatas = [],
  color = 'bg-bluePallete-300',
}) {
  const size = useWindowSize();
  const [page, setPage] = useState(1)
  const [splittedDatas, setSplittedDatas] = useState([])
  const [datas, setDatas] = useState([]);
  const [buttonNext, setButtonNext] = useState("bottom-[250px]");
  const [isTransition, setIsTransition] = useState(false);

  const handleNext = () => {
    // Jika 'page' sudah mencapai jumlah halaman yang ada di 'splittedDatas',
    // maka kembalikan ke halaman pertama (1). Jika belum, naikkan halaman ke berikutnya.
    setIsTransition(true);
    setTimeout(() => {
      setPage(prevPage => (prevPage >= splittedDatas.length ? 1 : prevPage + 1));
      setIsTransition(false);
    }, 400);
  };
  
  useEffect(() => {
    // Olah untuk memecah/dipisah data bagian yang lebih kecil
    // dari 'crewDatas' menjadi kelompok-kelompok berisi 4 item
    const splitDataIntoChunks = (data, chunkSize) => {
      let result = [];
      for (let i = 0; i < data.length; i += chunkSize) {
        result.push(data.slice(i, i + chunkSize)); // Disini data akan diproses dan dimasukan ke kelompok berisi 4 item
      }
      return result; // Kembalikan array untuk hasil dari beberapa kelompok data tadi
    };
  
    const splited = splitDataIntoChunks(crewDatas, 4);
    setSplittedDatas(splited);
  }, [crewDatas]);
  
  useEffect(() => {
    // Disini data akan ditampilkan di halaman sesuai dengan 'page' yang dipilih
    // 'page - 1' digunakan karena array menggunakan indeks 0
    setDatas(splittedDatas[page - 1] || []); // Jika tidak ada data, default ke array kosong
  }, [splittedDatas, page]);  

  useEffect(() => {
    if (size.width < 640) {
      if (datas?.length < 3) {
        setButtonNext("bottom-[50px] right-[-5%]")
      } else {
        setButtonNext("bottom-[330px] right-0 ")
      }
    } else if (size.width < 1024) {
      if (datas?.length < 3) {
        setButtonNext("bottom-[60px] right-0")
      } else {
        setButtonNext("bottom-[160px] right-0")
      }
    } else {
      if (datas?.length < 3) {
        setButtonNext("bottom-[100px] right-0")
      } else {
        setButtonNext("bottom-[250px] right-0")
      }
    }
  }, [datas, size.width]);

  return crewDatas.length ? (
    <div className="relative mt-[21px]">
      <div
        className={`w-full h-auto flex flex-wrap justify-around items-center gap-5 sm:gap-1 lg:gap-7 
          ${isTransition ? 'opacity-0 transition-opacity duration-300' : 'opacity-100 transition-opacity duration-300'}`}
      >
        {datas?.map((crew, index) => (
          <CardCreditProfile
            key={index}
            color={color}
            image={`${host}${crew?.profileUri}`}
            jobdes={`${crew.role?.name}`}
            name={crew?.name}
          />
        ))}
      </div>
      {/* Custom button Next */}
      {crewDatas.length > 4 && (
        <div className={`absolute flex items-center justify-center w-fit ${buttonNext}`}>
          <button
            className={`${styles.crewButton} w-full flex justify-center hover:opacity-75 mt-[20px] sm:mt-[54px] text-white`}
            onClick={handleNext}
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
            >
              <circle cx="50" cy="50" r="50" fill="#265290" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.9661 33.2082C49.9729 32.2014 51.6053 32.2014 52.6121 33.2082L68.0808 48.677C69.0876 49.6838 69.0876 51.3162 68.0808 52.323L52.6121 67.7918C51.6053 68.7986 49.9729 68.7986 48.9661 67.7918C47.9592 66.7849 47.9592 65.1526 48.9661 64.1457L60.0337 53.0781H32.7422C31.3183 53.0781 30.1641 51.9239 30.1641 50.5C30.1641 49.0761 31.3183 47.9219 32.7422 47.9219H60.0337L48.9661 36.8543C47.9592 35.8474 47.9592 34.2151 48.9661 33.2082Z"
                fill="white"
              />
            </svg>
          </button>
      </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center w-[100%]">
      <NotFound className="flex justify-center w-[200px]" />
    </div>
  );
};