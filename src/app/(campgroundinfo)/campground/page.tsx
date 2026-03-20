import getCampgrounds from "@/libs/getCampgrounds";
import VenueCatalog from "@/components/VenueCatalog";
import { CampgroundJson } from "../../../../interface";

// TODO 

export default async function CampgroundPage () {

  const venues:Promise<CampgroundJson> = await getCampgrounds();
  
  return (
    <div className="m-5">
      <div className="text-center text-3xl font-semibold">Select Your Venue</div>
      <div className="text-center">Explore {(await venues).count} fabulous venues in our venue catalog</div>
      <VenueCatalog venuesJson={venues}/>
    </div>
  )
}