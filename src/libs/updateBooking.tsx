export default async function updateBooking(
  bookingId: string,
  // campground:string,
  bookingDate: string,
  token: string
) {
  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      bookingDate: bookingDate,
      // campground: campground,
    }),
  });

  if (!response.ok) {
    throw new Error("Cannot update Booking");
  }

  return await response.json();
}