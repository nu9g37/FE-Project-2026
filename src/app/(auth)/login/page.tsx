"use client"

import { useRouter } from "next/navigation"
import userRegister from "@/libs/userRegister"

export default function RegisterPage() {

  const router = useRouter();

  

  return (
    <main className="flex justify-center p-5">
      <div className="m-5 bg-sky-900 rounded-lg w-1/3">
        <div className="bg-sky-950 text-center text-2xl font-bold p-5 rounded-t-lg">Login</div>

        <form className="my-10">

          <div className="flex justify-center my-10">
            <input type="email" id="userEmail" name="userEmail" placeholder="Email" 
            className="bg-white py-2 px-5 mx-5 rounded-lg 
            w-[70%] placeholder-gray-500 text-black focus:border-2 focus:border-blue-400 focus:outline-none shadow-lg focus:shadow-2xl"/>
          </div>

          <div className="flex justify-center my-10">
            <input type="password" id="userPassword" name="userPassword" placeholder="Password" 
            className="bg-white py-2 px-5 mx-5 rounded-lg 
            w-[70%] placeholder-gray-500 text-black focus:border-2 focus:border-blue-400 focus:outline-none shadow-lg focus:shadow-2xl"/>
          </div>
          
          <div className="flex justify-center my-10">
            <button type="submit" className="bg-green-600 text-lg text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-800 shadow-lg hover:shadow-2xl">
              Submit
            </button>
          </div>

        </form>

        <div>
          Don't have an account?
        </div>
      </div>
    </main>
  )
}