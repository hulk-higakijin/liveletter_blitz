"use client";
import { useMutation, useQuery } from "@blitzjs/rpc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import getUser from "../queries/getUser";

export const User = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const [user] = useQuery(getUser, { id: userId });

  return (
    <>
      <div>
        <h1>Project {user.id}</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
};
