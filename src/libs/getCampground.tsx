export default async function getCampground(cid:string) {

  const campground = await fetch(`http://localhost:5000/api/v1/campgrounds/${cid}`);

  if (!campground) {
    throw new Error ("Cannot fetch Campground");
  }

  return campground.json();
}