import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import request from "./utils/request";
import Loading from "@/components/loading";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
   const response = await request
      .get('/setting')
      .then((response) => {
         if (response.status === 200 || response.status === 201) {
            return response?.data?.data[0]?.name;
         } else {
            console.error(JSON.stringify(response.errors));
            return 'Central Computer Improvement';
         }
      })
      .catch((error) => {
         console.error(error);
         return 'Central Computer Improvement';
      });

   return {
      title: response,
      description:
         'Unit Kegiatan Mahasiswa Universitas Telkom yang berfokus pada bidang ICT (Information, Communication and Technology).',
   };
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Suspense
               fallback={
                  <div>
                     Loading...
                  </div>
               }
            >
               {children}
            </Suspense>
         </body>
      </html>
   );
}
