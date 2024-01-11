'use client';
import React, {useEffect, useState} from 'react';

import Image from 'next/image';
import Link from 'next/link';

const nav = [
  {name: 'PORTFOLIO', link: '/PortFolio'},
  {name: 'ABOUT US', link: '/AboutUs'},
  {name: 'CONTACT US', link: '/ContactUs'},
];

function Header() {
  const [position, setPosition] = useState(0);
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 z-10 w-full h-[105px] flex justify-between items-center px-10 ${
        position === 0 ? 'bg-transparent' : 'bg-black'
      }`}>
      <Link href={'/'}>
        <Image
          src="/sunstar_logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100%"
          style={{maxHeight: '105px', width: '90%'}}
        />
      </Link>
      <nav className="flex gap-8">
        {nav.map(el => {
          return (
            <Link key={el.name} href={el.link}>
              <p className="font-barlow">{el.name}</p>
            </Link>
          );
        })}
      </nav>
      <div className="w-[350px] h-105 max-xl:hidden"></div>
    </header>
  );
}

export default Header;
