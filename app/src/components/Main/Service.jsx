import React from 'react';

function Service() {
  return (
    <section id="service" className="min-h-screen py-20">
      {/* title */}
      <div className="px-4 py-6 space-y-4 border-l-4">
        <h2 className="font-normal font-barlow">Service</h2>
        <p className="ml-2">SUNSTAR에서 제공하는 서비스</p>
      </div>
      {/* content */}
      <div className="grid items-center justify-center grid-cols-1 gap-8 mt-20 md:grid-cols-2">
        <div className="p-2 rounded-2xl bg-gradient-to-bl from-[#FFFFFF] via-[#3B3486] to-[#3B3486] ">
          <div className="p-4 space-y-4 bg-[#332941] rounded-2xl">
            <h4 className="font-normal text-center">
              <span className="text-[#4b88ee]">1:1 맞춤</span> 기획 및 디자인
            </h4>
            <p>- 기획이나 디자인이 없어도 제작 가능.</p>
          </div>
        </div>
        <div className="p-2 rounded-2xl bg-gradient-to-bl from-[#FFFFFF] via-[#3B3486] to-[#3B3486]">
          <div className="p-4 space-y-4 bg-[#332941] rounded-2xl">
            <h4 className="font-normal text-center">
              모바일<span className="text-[#4b88ee]"> 반응형</span>
            </h4>
            <p>- PC와 모바일 둘다 최적의 UI를 적용가능하도록 모바일 반응형 디자인과 개발을 제공.</p>
          </div>
        </div>
        <div className="p-2 rounded-2xl bg-gradient-to-bl from-[#FFFFFF] via-[#3B3486] to-[#3B3486]">
          <div className="p-4 space-y-4 bg-[#332941] rounded-2xl">
            <h4 className="font-normal text-center">
              <span className="text-[#4b88ee]">호스팅 / 도메인 / SSL</span> 무료 적용
            </h4>
            <p>- 맞춤 호스팅과 도메인, 홈페이지 보안을 위한 SSL을 1년동안 무상으로 지원.</p>
          </div>
        </div>
        <div className="p-2 rounded-2xl bg-gradient-to-bl from-[#FFFFFF] via-[#3B3486] to-[#3B3486]">
          <div className="p-4 space-y-4 bg-[#332941] rounded-2xl">
            <h4 className="font-normal text-center">
              <span className="text-[#4b88ee]">SEO </span>최적화
            </h4>
            <p>- 포털사이트 노출을 위한 검색엔진 최적화를 제공</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
