'use client'

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card( { campgroundName , imgSrc , setRating } : { campgroundName:string , imgSrc:string , setRating?:Function } ) {

  const [ratingValue, setRatingValue] = useState<number | null>(0);

  return (
    <InteractiveCard>

      {/* Image */}
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image src={imgSrc}
        alt="card"
        fill={true}
        className="object-cover rounded-t-lg"
        />
      </div>

      {/* Campground Name */}
      <div className="w-full h-[30%] p-[10px]">
        <h4 className="font-sans text-black text-center text-lg font-semibold">{campgroundName}</h4>
      </div>

    </InteractiveCard>
  );
}