import React from 'react';
import { Suspense } from 'react';
import Layout from "@/app/layout"

import Home from '@/app/home/page';

export default function Index() {
  return (
    <Suspense fallback={<Layout/>}>
      <Home />
    </Suspense>
  )
}
