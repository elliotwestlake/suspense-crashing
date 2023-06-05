type Props = {
  userPromise: Promise<{ name: string }>;
};

export default async function User({ userPromise }: Props) {
  const user = await userPromise;
  return <h1>{user.name}</h1>;
}
