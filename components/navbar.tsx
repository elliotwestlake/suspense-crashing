type Props = {
  userPromise: Promise<{ name: string }>;
};

export default async function NavBar({ userPromise }: Props) {
  const user = await userPromise;

  return <nav>User: {user.name}</nav>;
}
