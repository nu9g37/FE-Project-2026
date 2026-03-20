import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export default async function ProfilePage() {
  
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user.token) {
    return null
  }

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);

  return (
    <main className="m-10">
      <div className="text-2xl font-semibold font-sans mb-2">Profile</div>

      <div className="bg-sky-950 w-1/3 rounded-lg p-5 my-5">
        <div className="text-lg font-sans">Name: {profile.data.name}</div>
        <div className="text-lg font-sans">Email: {profile.data.email}</div>
        <div className="text-lg font-sans">Tel. {profile.data.tel}</div>
      </div>
    </main>
  )
}