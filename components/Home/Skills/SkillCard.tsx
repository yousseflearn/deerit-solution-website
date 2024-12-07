import Image from 'next/image';
import React from 'react';

type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, title, percent } = skill;
  return (
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all text-center cursor-pointer bg-gray-900 rounded-lg ">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-[18px] mt-4 text-white font-[600]">{title}</h1>
      <div className="bg-black mt-4 text-white p-2 rounded-lg opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
