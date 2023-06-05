type Props = {
  userPromise: Promise<{ email: string }>;
};

export default async function User({ userPromise }: Props) {
  const user = await userPromise;
  return <h1>{user.email}</h1>;
}
