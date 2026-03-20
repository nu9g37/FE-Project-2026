export default async function getCampgrounds() {
  
  const campgrounds = await fetch("http://localhost:5000/api/v1/campgrounds");

  if (!campgrounds) {
    throw new Error ("Cannot fetch Campground");
  }

  return campgrounds.json();
};