export default async function getCampgrounds() {
  
  const campgrounds = await fetch(`${process.env.BACKEND_URL}/api/v1/campgrounds`);

  if (!campgrounds) {
    throw new Error ("Cannot fetch Campground");
  }

  return campgrounds.json();
};