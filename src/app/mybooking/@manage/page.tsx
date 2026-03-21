import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { BookingJson, BookingItem, CampgroundItem } from "../../../../interface";

export default async function ManagePage() {
  
  const session = await getServerSession(authOptions);

  if (!session) {
    return null
  }

  const bookings:Promise<BookingJson> = await getBookings(session.user.token);
  console.log(bookings)
  
  return (
    <main className="m-10">
      <div className="text-2xl font-semibold font-sans mb-2">My Booking</div>
      <div className="flex flex-row flex-wrap">
        {
          (await bookings).count?
          (await bookings).data.map((item:BookingItem) => (
            <div key={item._id} className="bg-sky-950 rounded-lg my-5 mr-auto p-5 w-[45%]">
              <div className="text-lg font-sans">User: {item.user.name}</div>
              <div className="text-lg font-sans">Campground: {item.campground.name}</div>
              <div className="text-lg font-sans">Province: {item.campground.province}</div>
              <div className="text-lg font-sans">Tel. {item.campground.tel}</div>
              <div className="text-lg font-sans">Booking Date: {(new Date(item.bookingDate)).toString()}</div>
              <div className="text-lg font-sans">Create At: {(new Date(item.createAt)).toString()}</div>
            </div>
          ))
          : 
          <div className="bg-sky-950 w-[45%] my-5 p-5 rounded-lg text-center text-lg font-semibold">
            No Campground Booking
          </div>
        }
      </div>
    </main>
  )
}