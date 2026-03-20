import getVenues from "@/libs/getVenues"
import VenueCatalog from "@/components/VenueCatalog";
import { VenueJson } from "../../../../interface";

export default async function VenuePage () {

  const venues:Promise<VenueJson> = await getVenues();
  
  return (
    <div className="m-5">
      <div className="text-center text-3xl font-semibold">Select Your Venue</div>
      <div className="text-center">Explore {(await venues).count} fabulous venues in our venue catalog</div>
      <VenueCatalog venuesJson={venues}/>
    </div>
  )
}