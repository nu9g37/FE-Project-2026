"use client"

import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react";

export default function LogoutPage() {

  const router = useRouter();

  return (
    <main className="flex justify-center p-5 m-10">
      <div className="m-5 bg-green-900 rounded-lg w-1/3 shadow-lg shadow-gray-700">
        <div className="bg-green-950 text-center text-2xl font-bold p-5 rounded-t-lg">Are you sure to sign out ?</div>

        <div className="flex flex-row justify-center m-5">
          <button className="bg-green-600 text-white py-2 px-5 mx-5 rounded-lg text-xl font-semibold hover:bg-green-800  shadow-lg hover:shadow-2xl w-[30%]"
            onClick={() => {signOut({ callbackUrl: "/" }); router.push("/")}}
          >Yes</button>
          <button className="bg-red-600 text-white py-2 px-5 mx-5 rounded-lg text-xl font-semibold hover:bg-red-800  shadow-lg hover:shadow-2xl w-[30%]"
            onClick={() => router.push("/")}
          >No</button>
        </div>

      </div>
    </main>
  )
}