import getCampgrounds from "@/libs/getCampgrounds";
import VenueCatalog from "@/components/CampgroundCatalog";
import { CampgroundJson } from "../../../../interface";

// TODO 

export default async function CampgroundPage () {

  const campgrounds:Promise<CampgroundJson> = await getCampgrounds();
  
  return (
    <div className="m-5">
      <div className="text-green-800 text-center text-4xl font-bold mt-15 mx-10">Select Your Campground Place</div>
      <div className="text-green-800 text-center text-xl font-semibold opacity-90 mt-5 mb-15">Explore {(await campgrounds).count} fabulous campgrounds in our campground catalog</div>
      <VenueCatalog campgroundsJson={campgrounds}/>
    </div>
  )
}