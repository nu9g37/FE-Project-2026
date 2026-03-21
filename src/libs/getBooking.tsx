export default async function getBooking(bookingId: string, token: string) {
  const response = await fetch(`http://localhost:5000/api/v1/bookings/${bookingId}`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Cannot get Booking");
  }

  return await response.json();
}