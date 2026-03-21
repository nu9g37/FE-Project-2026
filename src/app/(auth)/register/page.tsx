"use client"

import { useRouter } from "next/navigation"
import userRegister from "@/libs/userRegister"
import Link from "next/link";

export default function RegisterPage() {

  const router = useRouter();

  const handleSubmit = async (e:React.SubmitEvent) => {
    e.preventDefault(); 
    const formData = new FormData(e.target);

    try {
      const result = await userRegister(
        formData.get("userName") as string,
        formData.get("userTel") as string,
        formData.get("userEmail") as string,
        formData.get("userPassword") as string
      );

      alert("Register Successfully");

      router.push("/login");

    } catch (error) {
      console.error(error);
      alert("Register Failed");
    }
  };

  return (
    <main className="flex justify-center p-5">
      <div className="m-5 bg-sky-900 rounded-lg w-1/3">
        <div className="bg-sky-950 text-center text-2xl font-bold p-5 rounded-t-lg">Create Account</div>

        <form className="my-10" onSubmit={handleSubmit}>
          <div className="flex justify-center my-10">
            <input type="text" id="userName" name="userName" placeholder="Name" 
            className="bg-white py-2 px-5 mx-5 rounded-lg 
            w-[70%] placeholder-gray-500 text-black focus:border-2 focus:border-blue-400 focus:outline-none shadow-lg focus:shadow-2xl"/>
          </div>

          <div className="flex justify-center my-10">
            <input type="tel" id="userTel" name="userTel" placeholder="Tel" 
            className="bg-white py-2 px-5 mx-5 rounded-lg 
            w-[70%] placeholder-gray-500 text-black focus:border-2 focus:border-blue-400 focus:outline-none shadow-lg focus:shadow-2xl"/>
          </div>

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
            <button type="submit" className="bg-green-600 font-sans text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-800 shadow-lg hover:shadow-2xl w-[70%]">
              Register
            </button>
          </div>

          <div className="mt-30 flex justify-center">
            Don't have an account ?
            <Link href={"/login"} className="mx-2">
              <h1 className="underline underline-offset-1">Signin Here</h1>
            </Link>
          </div>

        </form>
      </div>
    </main>
  )
}