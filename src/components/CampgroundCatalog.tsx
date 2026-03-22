import Link from "next/link";
import Card from "./Card";
import { CampgroundJson, CampgroundItem } from "../../interface";

export default async function CampgroundCatalog({campgroundsJson} : {campgroundsJson:Promise<CampgroundJson>}) {

  const campgroundJsonReady = await campgroundsJson;

  return (
    <div className="m-[20px] flex flex-row flex-wrap justify-evenly content-around">
        {
          campgroundJsonReady.data.map((campgroundItem:CampgroundItem) => (
            <Link href={`/campground/${campgroundItem.id}`}
              key={campgroundItem.id}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] xl:w-[450px]:"
            >
              <Card campgroundName={campgroundItem.name} 
                imgSrc={campgroundItem.picture}
              />
            </Link>
          ))
        }
      </div>
  );
}