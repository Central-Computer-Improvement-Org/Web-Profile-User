import { Suspense } from "react";
import { Inter } from "next/font/google";

import { Providers } from "./provider";
import request from "./utils/request";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
export async function generateMetadata() {
  const response = await request
    .get('/setting')
    .then((response) => {
      if (response.status === 200) {
        return response?.data?.data[0]?.name;
      } else {
        console.error(response.errors);
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
      'test',
  };
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <Navbar />
            <main className="flex-grow">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center text-center">
                    Loading...
                  </div>
                }
              >
                {children}
              </Suspense>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
};