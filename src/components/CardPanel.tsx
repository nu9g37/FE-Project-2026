'use client'

import Link from "next/link";
import Card from "./Card";
import { useEffect, useState } from "react";
import getCampgrounds from "@/libs/getCampgrounds";
import { CampgroundJson, CampgroundItem } from "../../interface";

export default function CardPanel () {

  const [campgroundResponse, setCampgroundResponse] = useState<CampgroundJson | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const campgrounds = await getCampgrounds();

      setCampgroundResponse(campgrounds);
    }

    fetchData();

  }, []);

  if (!campgroundResponse) return(<p>Campground Panel is Loading ...</p>)

  return (
    <div>

      {/* Card */}
      <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
        {
          campgroundResponse.data.map((campgroundItem:CampgroundItem) => (
            <Link href={`/campground/${campgroundItem.id}`}
              key={campgroundItem.id}
              className="w-1/5"
            >
              <Card venueName={campgroundItem.name} 
                imgSrc={campgroundItem.picture}
              />
            </Link>
          ))
        }
      </div>
    </div>
  ); 
}