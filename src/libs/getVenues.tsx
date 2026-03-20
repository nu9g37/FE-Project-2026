export default async function getVenues() {
  
  const venues = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/venues");

  if (!venues) {
    throw new Error ("Cannot fetch Venue");
  }

  return venues.json();
};