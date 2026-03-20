'use client'

import Link from "next/link";
import Card from "./Card";
import { useReducer } from "react";

export default function CardPanel () {

  function ratingReducer (venueRating:Map<string, number>, action:{type:string, venueName:string, rating:number}) {

    console.log(venueRating);

    switch (action.type) {
      case "change" : {
        let newVenueRating = new Map(venueRating);  
        newVenueRating.set(action.venueName, action.rating);

        return newVenueRating;
      }
      case "delete" : {
        let newVenueRating = new Map(venueRating);  
        newVenueRating.delete(action.venueName);

        return newVenueRating;
      }
      default : {
        return venueRating;
      }
    }
  }

  const initialMap = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);

  const mockVenue = [
    {vid: "001", name: "The Bloom Pavilion", image:"/img/bloom.jpg"},
    {vid: "002", name: "Spark Space", image:"/img/sparkspace.jpg"},
    {vid: "003", name: "The Grand Table", image:"/img/grandtable.jpg"},
  ] 

  const [venueRating, dispatchRating] = useReducer(ratingReducer, initialMap);

  return (
    <div>

      {/* Card */}
      <div className="m-[20px] flex flex-row flex-wrap justify-around content-around">
        {
          mockVenue.map((venueItem) => (
            <Link href={`/venue/${venueItem.vid}`}
              key={venueItem.vid}
              className="w-1/5"
            >
              <Card venueName={venueItem.name} 
                imgSrc={venueItem.image} 
                setRating={(venueName:string, newValue:number) => dispatchRating({type:"change", venueName:venueName, rating:newValue})}
              />
            </Link>
          ))
        }
      </div>

      <div className="m-[20px] text-center">
        <div className="text-xl font-bold">
          Venue List with Ratings : {venueRating.size}
        </div>

        {/* Rating */}
        { Array.from(venueRating).map(([name, rating]) => 
          <div key={name} 
            data-testid={name} 
            onClick={() => dispatchRating({type:"delete", venueName:name, rating:rating})}
            className="w-fit mx-auto"
          >
            {name} : {rating}
          </div>) }
      </div>
    </div>
  ); 
}