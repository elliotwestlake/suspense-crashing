import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Link href="/two-supense" className="underline">
        Two Suspense
      </Link>
      <Link href="/three-supense" className="underline">
        Three Suspense
      </Link>
    </main>
  );
}
