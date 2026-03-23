export default async function getCampground(cid:string) {

  const campground = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds/${cid}`);

  if (!campground) {
    throw new Error ("Cannot fetch Campground");
  }

  return campground.json();
}