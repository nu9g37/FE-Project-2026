import getBookings from "@/libs/getBookings"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { BookingJson, BookingItem, CampgroundItem } from "../../../../interface";
import BookingList from "@/components/BookingList";

export default async function ManagePage() {
  const session = await getServerSession(authOptions);

  if (!session) return null;

  const bookings = await getBookings(session.user.token);

  return (
    <main className="m-10">
      <div className="text-2xl font-semibold mb-4">My Booking</div>

      <BookingList
        initialData={bookings.data}
        token={session.user.token}
      />
    </main>
  );
}