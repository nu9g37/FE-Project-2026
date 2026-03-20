import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu () {

  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] z-30 bg-white fixed inset-x-0 top-0 border-gray-500 border-[1px] border-solid flex flex-row-reverse pr-[10px] items-center">
      <Image src={'/img/logo.png'} 
        alt="logo" 
        className="w-auto h-[40px]" 
        width={0} 
        height={0} 
        sizes="100vh"
      />
      <TopMenuItem title="Booking" pageRef="/booking"/>

      <div className="absolute left-0 top-0 items-center flex flex-row h-full text-cyan-600 underline underline-offset-1">
        {
          session? 
          <Link href={"/api/auth/signout"}>
            <div className="px-3 mx-3">
              Sign-Out
            </div>
          </Link> :
          <Link href={"/api/auth/signin"}>
            <div className="px-3 mx-3">
              Sign-In
            </div>
          </Link>
        }
        <TopMenuItem title="My Booking" pageRef="/mybooking"/>
      </div>
    </div>
  );
}