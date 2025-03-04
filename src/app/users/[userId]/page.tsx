import { Metadata } from "next";
import Link from "next/link";
import { invoke } from "src/app/blitz-server";
import getUser from "../queries/getUser";

export async function generateMetadata({
  params,
}: UserPageProps): Promise<Metadata> {
  const user = await invoke(getUser, { id: params.userId });
  return {
    title: `User ${user.id} - ${user.name}`,
  };
}

type UserPageProps = {
  params: { userId: string };
};

export default async function Page({ params }: UserPageProps) {
  const user = await invoke(getUser, { id: params.userId });

  return (
    <div>
      <p>
        <Link href={"/"}>Users</Link>
      </p>
      <p>{user.email}</p>
    </div>
  );
}
