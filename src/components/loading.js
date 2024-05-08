'use client';
import { Spinner } from 'flowbite-react';
import { ColorRing } from 'react-loader-spinner';

const Loading = ({ width, height }) => {
  return (
    <div>
      <ColorRing
        visible={true}
        height={`${width}`}
        width={`${height}`}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#1c3e6c', '#1c3e6c', '#1c3e6c', '#1c3e6c', '#1c3e6c']}
      />
    </div>
  );
};

export default Loading;
