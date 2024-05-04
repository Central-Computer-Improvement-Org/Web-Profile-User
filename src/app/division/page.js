"use client";
import React, { Suspense } from "react";
import DetailDvision from "@/components/Division/DetailDivision";

export default function DivisionPage() {
  return (
    <Suspense fallback={<div className="text-center text-[32px] text-bluePallete-800">Loading...</div>}>
      <DetailDvision />
    </Suspense>
  );
}