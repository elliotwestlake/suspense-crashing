import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <Link href="/two" className="underline">
        Two
      </Link>
      <Link href="/three" className="underline">
        Three
      </Link>
    </main>
  );
}
