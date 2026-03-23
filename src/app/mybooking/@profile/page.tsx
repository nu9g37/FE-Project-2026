import getUserProfile from "@/libs/getUserProfile"
import { getServerSession, User } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"
import { UserItem, UserJson } from "../../../../interface";

export default async function ProfilePage() {
  
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user.token) {
    return null
  }

  const profile:Promise<UserJson> = await getUserProfile(session.user.token);
  const profileReady = await profile;

  var createdAt = new Date(profileReady.data.createAt);

  return (
    <main className="m-10">
      <div className="text-green-800 text-2xl font-bold mb-2">Profile</div>

      <div className="bg-emerald-800 w-full rounded-lg p-5 my-5 shadow-2xl text-white text-lg font-semibold">
        <div className="my-2">Name: {profileReady.data.name}</div>
        <div className="my-2">Email: {profileReady.data.email}</div>
        <div className="my-2">Tel. {profileReady.data.tel}</div>
        <div className="my-2">Member Since {createdAt.toString()}</div>
      </div>
    </main>
  )
}