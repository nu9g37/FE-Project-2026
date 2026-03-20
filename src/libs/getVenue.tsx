export default async function getVenue(vid:string) {

  const venue = await fetch(`https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${vid}`);

  if (!venue) {
    throw new Error ("Cannot fetch Venue");
  }

  return venue.json();
}