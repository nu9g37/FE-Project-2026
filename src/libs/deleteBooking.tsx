export default async function deleteBooking(bookingId: string, token: string) {
  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/bookings/${bookingId}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Cannot delete Booking");
  }

  return await response.json();
}