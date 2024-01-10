import React from 'react';

import Image from 'next/image';

function Banner() {
  return (
    <div className="w-full h-screen">
      <Image src={'/bg-img/main4.jpg'} alt="main banner" fill objectFit="cover" />
      <div className="absolute space-y-20 text-3xl text-center -translate-x-1/2 -translate-y-1/2 text-nowrap top-1/2 left-1/2">
        <p className="">가격과 기간을 뻥튀기하고 제작 후 나몰라라 하는 개발업체를 찾으신다면</p>
        <p className="">함께 고민하고 끝까지 책임지는 파트너를 찾으신다면 잘 오셨습니다.</p>
        <p className="">웹 서비스를 개발하는 SunStar입니다.</p>
      </div>
    </div>
  );
}

export default Banner;
