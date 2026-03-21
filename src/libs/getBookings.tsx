export default async function getBookings(token:string) {

  console.log(`Bearer ${token}`);

  const response = await fetch("http://localhost:5000/api/v1/bookings", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  if (!response.ok) {
    throw new Error("Cannot get Booking");
  }

  return await response.json();
}

