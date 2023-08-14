import { useLoaderData } from "react-router-dom";

export async function loader() {
  const currentUser = await fetch("http://localhost:8080/users/current",{
    credentials: "include"}).then(response => response.json());
  return { currentUser };
}

export default function Root() {
  const { currentUser } = useLoaderData();

  return (
    <>
      <div>Logged in: {currentUser?.name}</div>
    </>
  );
}