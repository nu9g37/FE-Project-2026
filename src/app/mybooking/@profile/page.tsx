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
      <div className="text-2xl font-semibold font-sans mb-2">Profile</div>

      <div className="bg-sky-950 w-1/2 rounded-lg p-5 my-5">
        <div className="text-lg font-sans">Name: {profileReady.data.name}</div>
        <div className="text-lg font-sans">Email: {profileReady.data.email}</div>
        <div className="text-lg font-sans">Tel. {profileReady.data.tel}</div>
        <div className="text-lg font-sans">Member Since {createdAt.toString()}</div>
      </div>
    </main>
  )
}