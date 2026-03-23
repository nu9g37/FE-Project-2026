export default async function userRegister(userName:string, userTel:string, userEmail:string, userPassword:string) {

  const user = {
    name: userName,
    tel: userTel,
    email: userEmail,
    password: userPassword
  }

  const response = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/register`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Cannot Register");
  }

  return await response.json();
}