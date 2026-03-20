import Link from "next/link";
import Card from "./Card";
import { VenueJson } from "../../interface";

export default async function VenueCatalog({venuesJson} : {venuesJson:Promise<VenueJson>}) {

  const venueJsonReady = await venuesJson;

  return (
    <div className="m-[20px] flex flex-row flex-wrap justify-evenly content-around">
        {
          venueJsonReady.data.map((venueItem) => (
            <Link href={`/venue/${venueItem.id}`}
              key={venueItem.id}
              className="w-1/5"
            >
              <Card venueName={venueItem.name} 
                imgSrc={venueItem.picture}
              />
            </Link>
          ))
        }
      </div>
  );
}