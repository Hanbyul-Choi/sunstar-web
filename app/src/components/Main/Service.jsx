import React from 'react';

function Service() {
  return (
    <section id="service" className="h-screen">
      {/* title */}
      <div className="px-4 py-6 space-y-4 border-l-4">
        <h2 className="font-normal font-barlow">Service</h2>
        <p className="ml-2">SUNSTAR에서 제공하는 서비스</p>
      </div>
      {/* content */}
      <div className="grid justify-center grid-cols-1 gap-8 mt-20 md:grid-cols-2">
        <div className="p-4 space-y-4 text-nowrap">
          <h4 className="font-normal text-center">
            - <span className="text-[#4b88ee]">1:1 맞춤</span> 기획 및 디자인
          </h4>
        </div>
        <div className="p-4 space-y-4 text-nowrap">
          <h4 className="font-normal text-center">
            모바일<span className="text-[#4b88ee]"> 반응형</span>
          </h4>
        </div>
        <div className="p-4 space-y-4 text-nowrap">
          <h4 className="font-normal text-center">
            호스팅 / 도메인 / SSL <span className="text-[#4b88ee]"> 1년 무상 적용</span>
          </h4>
        </div>
        <div className="p-4 space-y-4 text-nowrap">
          <h4 className="font-normal text-center">
            <span className="text-[#4b88ee]">SEO </span>최적화
          </h4>
        </div>
      </div>
    </section>
  );
}

export default Service;
