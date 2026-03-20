import Image from "next/image";
import getCampground from "@/libs/getCampground";

// TODO 

export default async function venueDetailPage ( {params} : {params:Promise<{vid:string}>} ) {

  const {vid} = await params;

  const venue = await getCampground(vid);

  return (
    <main className="text-center p-5">

      <div className="flex flex-row">
        <Image src={venue.data.picture}
          alt="Venue Image"
          width={0} height={0}
          sizes="100vw"
          className="rounded-lg w-[30%]"
        />

        <div className="text-md mx-5 text-left">
          <h1 className="text-lg font-semibold">{venue.data.name}</h1>

          <div className="font-medium mx-5">Address: {venue.data.address}</div>
          <div className="font-medium mx-5">District: {venue.data.district}</div>
          <div className="font-medium mx-5">Province: {venue.data.province}</div>
          <div className="font-medium mx-5">Postal Code: {venue.data.postalcode}</div>
          <div className="font-medium mx-5">Tel: {venue.data.tel}</div>
          <div className="font-medium mx-5">Daily Rate: {venue.data.dailyrate}</div>
        </div>
      </div>
    </main>
  )
}