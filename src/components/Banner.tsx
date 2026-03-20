'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {

  const bannerImage = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ]

  const [index, setIndex] = useState(0);

  const router = useRouter();

  const {data: session} = useSession();

  return (
    <div className="block p-5 w-full h-[65vh] relative">
      <Image src={bannerImage[index]}
        alt="banner"
        fill={true}
        priority
        objectFit="cover"
        onClick={() => setIndex((index + 1) % 4)}
      />

      <div className="relative top-25 z-20 text-center text-white">
        <h1 className="text-4xl font-sans font-bold mb-1">where every event finds its venue</h1>
        <h3 className="text-xl font-serif">Finding the perfect venue has never been easier. Whether it's a wedding, corporate event, or private party, we connecting people to the perfect place.</h3>
      </div>

      {
        session? <div className="z-30 absolute top-5 right-10 font-semibold text-white text-xl">Welcome {session.user.name}</div> : null
      }

      <button className="bg-white text-indigo-600 border border-indigo-600 
        font-semibold p-2 m-2 rounded z-30 absolute bottom-0 right-0 
        hover:bg-indigo-600 hover:text-white hover:border-transparent"
        onClick={(e) => {e.stopPropagation(); router.push('/campground')}}
      >
        Select Campground
      </button>
    </div>
  );
}