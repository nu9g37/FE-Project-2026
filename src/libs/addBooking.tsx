export default async function addBooking(
  campgroundId: string,
  bookingDate: string,
  token: string
) {
  const response = await fetch(
    `http://localhost:5000/api/v1/campgrounds/${campgroundId}/bookings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        bookingDate: bookingDate
      })
    }
  );

  if (!response.ok) {
    throw new Error("Cannot create Booking");
  }

  return await response.json();
}