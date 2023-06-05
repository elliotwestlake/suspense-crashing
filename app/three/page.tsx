import { fetchUser } from "@/lib/fetchUser";

export default async function ThreeSuspense() {
  const user = await fetchUser();
  return <>{user.email}</>;
}
