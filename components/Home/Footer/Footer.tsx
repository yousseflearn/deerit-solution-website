import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className="pt-10 pb-16 bg-[#0f0715]">
      <div>
        <Link href={'/'}>
          <Image
            src="/images/logo.jpg"
            alt="log"
            width={100}
            height={100}
            className="mx-auto rounded-2xl"
          />
        </Link>
      </div>
      <div className="flex  underline  items-center flex-wrap justify-center space-x-10  mt-5 text-white font-bold">
        <div>
          <Link href={'#'}>Services</Link>
        </div>
        <div>
          <Link href={'#'}>Projects</Link>
        </div>
        <div>
          <Link href={'#'}>Reviews</Link>
        </div>
        <div>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>
      <div>
        <p className="text-white text-opacity-60 mt-6 text-center">
          © 2024 Deer IT Ltd. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
