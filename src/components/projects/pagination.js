import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

const Pagination = ({ hasPrevPage, hasNextPage, currentData }) => {
   const router = useRouter();
   const searchParams = useSearchParams();
   const page = Number(searchParams.get('page')) || 1;
   const perPage = Number(searchParams.get('perPage')) || 5;
   const totalPages = Math.ceil(currentData / perPage);

   // Function to generate an array of page numbers
   const generatePageNumbers = () => {
      const maxPagesToShow = 5; // Maximum number of pages to show in pagination
      const pages = [];
      let startPage, endPage;

      if (totalPages <= maxPagesToShow) {
         startPage = 1;
         endPage = totalPages;
      } else if (page <= Math.floor(maxPagesToShow / 2)) {
         startPage = 1;
         endPage = maxPagesToShow;
      } else if (page >= totalPages - Math.floor(maxPagesToShow / 2)) {
         startPage = totalPages - maxPagesToShow + 1;
         endPage = totalPages;
      } else {
         startPage = page - Math.floor(maxPagesToShow / 2);
         endPage = page + Math.floor(maxPagesToShow / 2);
      }

      for (let i = startPage; i <= endPage; i++) {
         pages.push(i);
      }

      return pages;
   };

   return (
      <Suspense
         fallback={
            <div className="text-center text-[32px] text-bluePallete-800">
               Loading...
            </div>
         }
      >
         <div className="flex lg:gap-[20px] md:gap-[18px] gap-[10px] items-center ">
            <button
               disabled={!hasPrevPage}
               onClick={() => {
                  router.push(`projects/?page=${page - 1}&perPage=${perPage}`);
               }}
               className="lg:px-[30px] md:px-[20px] px-[10px] lg:h-[64px] md:h-[50px] h-[32px] bg-white shadow-xl rounded-[10px]"
            >
               <Image
                  width={0}
                  height={0}
                  alt="prevIcon"
                  src={'assets/icon/prevIcon.png'}
                  className="lg:w-[25px] lg:h-[21px] w-[15px] h-[17px]"
               />
            </button>
            {generatePageNumbers().map((pageNumber, index) => (
               <div key={pageNumber}>
                  {index !== 0 &&
                     pageNumber - generatePageNumbers()[index - 1] !== 1 &&
                     '...'}
                  <button
                     className={`${pageNumber === page ? 'bg-blue-200' : ''
                        } lg:text-[30px] text-[15px] lg:font-semibold font-bold lg:px-[35px] md:px-[25px] px-[15px] lg:h-[64px] md:h-[50px] h-[32px] lg:rounded-[10px] rounded-[5px] `}
                     onClick={() => {
                        router.push(`projects/?page=${pageNumber}&perPage=${perPage}`);
                     }}
                  >
                     {pageNumber}
                  </button>
               </div>
            ))}
            <button
               disabled={!hasNextPage}
               onClick={() => {
                  router.push(`projects/?page=${page + 1}&perPage=${perPage}`);
               }}
               className="lg:px-[30px] md:px-[20px] px-[10px] lg:h-[64px] md:h-[50px] h-[32px] bg-white shadow-xl rounded-[10px]"
            >
               <Image
                  width={0}
                  height={0}
                  alt="prevIcon"
                  src={'assets/icon/nextIcon.png'}
                  className="lg:w-[25px] lg:h-[21px] w-[15px] h-[17px]"
               />
            </button>
         </div>
      </Suspense>
   );
};

export default Pagination;
