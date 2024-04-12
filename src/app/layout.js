"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { metadata } from "./layout";
import request from "./utils/request";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [settingsData, setSettingsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    request
      .get("/settings")
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setSettingsData(response.data);
          if (response.data && response.data[0]) {
            if (response.data[0].name) {
              metadata.title = response.data[0].name;
            }
            if (response.data[0].description) {
              metadata.description = response.data[0].description;
            }
          }
        } else {
          console.error(JSON.stringify(response.errors));
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}