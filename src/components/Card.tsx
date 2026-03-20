'use client'

import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";
import { useState } from "react";

export default function Card( { venueName , imgSrc , setRating } : { venueName:string , imgSrc:string , setRating?:Function } ) {

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

      {/* Venue Name */}
      <div className="w-full h-[15%] p-[10px]">
        <h4 className="underline underline-offset-1 font-sans">{venueName}</h4>
      </div>
      
      {/* Rating */}
      {
        setRating? <div className="w-full h-[10%] mx-[5px]"
          onClick={(e) => {e.stopPropagation();}}
        >
          <Rating
            id={venueName + " Rating"}
            name={venueName + " Rating"}
            data-testid={venueName + " Rating"}
            value={ratingValue}
            onChange={(event, newRating) => {
              setRatingValue(newRating);
              setRating(venueName, newRating);
            }}
          />
        </div> : ""
      }

    </InteractiveCard>
  );
}