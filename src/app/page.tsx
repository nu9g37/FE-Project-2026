import Banner from "@/components/Banner";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <main>
      {
        session ? 
        <div className="text-black text-xl font-semibold my-5 ml-5">
          Welcome {session.user.name}
        </div> : null
      }
      <div className="text-green-800 text-center my-15">
        <h1 className="text-5xl font-bold">Escape the Ordinary, Embrace the Wild.</h1>
        <h1 className="text-2xl opacity-90 font-semibold mt-5">Discover hidden gems and wake up to the soundtrack of nature.</h1>
      </div>

      <div className="flex justify-center mb-10">
        <Banner/>
      </div>
    </main>
  );
}
