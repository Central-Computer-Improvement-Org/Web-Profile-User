'use client';
import React, { Suspense } from 'react';
import ProjectPage from '@/components/projects/projectsPage';

export default function DivisionPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center text-[32px] text-bluePallete-800">
          Loading...
        </div>
      }
    >
      <ProjectPage />
    </Suspense>
  );
}
