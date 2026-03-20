import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu () {

  const session = await getServerSession(authOptions);

  return (
    <div className="h-[60px] w-full z-40 bg-blue-950 fixed inset-x-0 top-0
    flex flex-row pl-[10px] items-center justify-between mx-auto">

      {/* Left Side */}
      <div className=" left-0 top-0 items-center flex flex-row h-full text-cyan-600">
        <h1 className="w-[120px] text-center text-white text-2xl font-bold font-sans">LOGO</h1>
        <TopMenuItem title="Home" pageRef="/"/>
        <TopMenuItem title="Booking" pageRef="/booking"/>
        <TopMenuItem title="Campground" pageRef="/campground"/>
      </div>

      {/* Right Side */}
      <div className="right-0 top-0 items-center flex flex-row h-full">
        <TopMenuItem title="My Booking" pageRef="/mybooking"/>
        {
          session? 
          <Link href={"/api/auth/signout"}>
            <div className="w-[120px] text-center my-auto font-sans text-white font-bold hover:text-gray-500">
              Sign-Out
            </div>
          </Link> :
          <Link href={"/api/auth/signin"}>
            <div className="w-[120px] text-center my-auto font-sans text-white font-bold hover:text-gray-500">
              Sign-In
            </div>
          </Link>
        }
      </div>

    </div>
  );
}