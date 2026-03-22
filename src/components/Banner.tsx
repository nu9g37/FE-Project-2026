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
    <div className="block p-5 w-[80%] h-[65vh] relative">
      <Image src={bannerImage[index]}
        alt="banner"
        fill={true}
        priority
        objectFit="cover"
        onClick={() => setIndex((index + 1) % 4)}
        className="rounded-lg"
      />

      {/* <div className="relative top-25 z-20 text-center text-white">
        <h1 className="text-4xl font-sans font-bold mb-1">where every event finds its venue</h1>
        <h3 className="text-xl font-serif">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
      </div> */}

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