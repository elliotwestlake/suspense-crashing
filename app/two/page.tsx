import User from "@/components/user";
import { fetchUser } from "@/lib/fetchUser";
import Link from "next/link";
import { Suspense } from "react";

export default function TwoSuspense() {
  const userPromise = fetchUser();
  return (
    <>
      <Suspense fallback={<>Loading user...</>}>
        <User userPromise={userPromise} />
      </Suspense>
    </>
  );
}
