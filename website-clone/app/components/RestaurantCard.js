
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const fallbackImg = '/file.svg'; // fallback image in public folder

const RestaurantCard = ({ id, image, name, cuisines, price, rating, time, description }) => {
  // fallback for broken images
  const [imgSrc, setImgSrc] = React.useState(image);
  return (
    <Link href={`/restaurant/${id}`} className="block">
      <div className="bg-white rounded-lg shadow hover:shadow-lg transition w-60 min-h-[260px] flex flex-col overflow-hidden cursor-pointer">
        <div className="relative w-full h-32">
          <Image
            src={imgSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="240px"
            onError={() => setImgSrc(fallbackImg)}
            priority={true}
            unoptimized={imgSrc.startsWith('http') ? true : false}
          />
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-semibold text-lg mb-1 text-black">{name}</h3>
            {description && <p className="text-xs text-gray-500 mb-1">{description}</p>}
            {cuisines && <p className="text-xs text-gray-500 mb-1">{cuisines}</p>}
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">{rating} Rating</span>
            <span className="text-xs text-gray-400">{time} mins</span>
          </div>
          {price && <div className="text-xs text-gray-600 mt-1">{price}</div>}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
