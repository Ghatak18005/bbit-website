import Image from 'next/image';
import React from 'react';

const MessageCard = ({ title, name, message, imageSrc }) => {
  return (
    <div className="bg-[#D8D1FF] rounded-xl p-5 w-80 md:w-full mx-auto mt-10 md:mt-0 relative">
      <div className="flex flex-col md:flex-row items-start md:items-start">
        <div className="flex-1">
          <h2 className="text-[#27066F] text-xl font-bold">{title}</h2>
          <h3 className="text-[#27066F] font-semibold mt-5">{name}</h3>
          <p className="text-[#27066F] font-semibold mt-1">{message}</p>
        </div>
        <div className="absolute top-0 right-0 mt-4 lg:-mt-10 mr-4 md:-mt-5 md:mr-0 lg:mr-5 w-14 h-14 md:w-16 md:h-16 lg:h-28 lg:w-28">
          <Image
            src={imageSrc}
            alt={`${name} Image`}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
