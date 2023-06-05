export const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    cache: "no-cache",
  });

  await new Promise((resolve) => setTimeout(resolve, 3000));
  if (!res.ok) {
    throw new Error("Error fetching user");
  }

  return await res.json();
};
