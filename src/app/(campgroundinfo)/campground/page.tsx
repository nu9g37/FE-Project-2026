import getCampgrounds from "@/libs/getCampgrounds";
import VenueCatalog from "@/components/CampgroundCatalog";
import { CampgroundJson } from "../../../../interface";

// TODO 

export default async function CampgroundPage () {

  const campgrounds:Promise<CampgroundJson> = await getCampgrounds();
  
  return (
    <div className="m-5">
      <div className="text-white text-center text-3xl font-bold m-5">Select Your Campground Place</div>
      <div className="text-white text-center text-lg font-semibold">Explore {(await campgrounds).count} fabulous campgrounds in our campground catalog</div>
      <VenueCatalog campgroundsJson={campgrounds}/>
    </div>
  )
}