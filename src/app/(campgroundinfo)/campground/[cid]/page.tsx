import Image from "next/image";
import getCampground from "@/libs/getCampground";
import { Button } from "@mui/material";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function venueDetailPage ( {params} : {params:Promise<{cid:string}>} ) {

  const {cid} = await params;

  const campground = await getCampground(cid);

  const session = await getServerSession(authOptions);

  return (
    <main className="text-center p-5">
      <div className="m-5">
        <h1 className="text-3xl font-semibold">{campground.data.name}</h1>
      </div>

      <div className="flex flex-row">
        <Image src={campground.data.picture}
          alt="Venue Image"
          width={0} height={0}
          sizes="100vw"
          className="rounded-lg w-[50%]"
        />

        <div className="text-left text-xl font-semibold ml-5">
          <div className="m-5">Address: {campground.data.address}</div>
          <div className="m-5">District: {campground.data.district}</div>
          <div className="m-5">Province: {campground.data.province}</div>
          <div className="m-5">Postal Code: {campground.data.postalcode}</div>
          <div className="m-5">Tel: {campground.data.tel}</div>
          <div className="m-5">Region: {campground.data.region}</div>
          <Link href={`/booking?campground=${cid}`} className="m-5">
            <Button variant="contained"
              sx={{ 
              backgroundColor: '#ff5722', 
              '&:hover': {
                backgroundColor: '#e64a19',
              },
            }}
            >
              Booking
            </Button>
          </Link>
        </div>

      </div>
    </main>
  )
}