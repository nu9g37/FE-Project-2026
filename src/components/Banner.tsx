'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {

  const bannerImage = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ]

  const [index, setIndex] = useState(0);

  const router = useRouter();

  return (
    <div className="block p-5 w-[80%] h-[65vh] relative shadow-lg shadow-black rounded-lg">
      <Image src={bannerImage[index]}
        alt="banner"
        fill={true}
        priority
        objectFit="cover"
        onClick={() => setIndex((index + 1) % 4)}
        className="rounded-lg"
      />


      <button className="bg-green-800 text-white text-lg
        font-semibold p-2 m-5 rounded z-30 absolute bottom-0 right-0 
        hover:bg-[#f8f6f2] hover:text-green-800"
        onClick={(e) => {e.stopPropagation(); router.push('/campground')}}
      >
        Start Exploring
      </button>
    </div>
  );
}