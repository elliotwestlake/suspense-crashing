import User from "@/components/user";
import { Suspense } from "react";

const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

  if (!res.ok) {
    throw new Error("Error fetching user");
  }

  return await res.json();
};

export default function TwoSuspense() {
  const userPromise = fetchUser();
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <User userPromise={userPromise} />
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <User userPromise={userPromise} />
      </Suspense>
    </>
  );
}
