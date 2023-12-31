import { Avatar, Box, DropdownMenu, Text } from "@radix-ui/themes";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";

const AuthState = () => {
  const { status, data: session } = useSession();

  if (status == "loading") {
    return <Skeleton circle={true} height={28} width={28} />;
  }

  if (status == "unauthenticated") {
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Sign In
      </Link>
    );
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          src={session!.user!.image!}
          fallback="?"
          size="2"
          radius="full"
          className="cursor-pointer"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>
          <Text size="2">{session!.user!.name}</Text>
        </DropdownMenu.Label>
        <DropdownMenu.Item>
          <Link href="/api/auth/signout">Log out</Link>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default AuthState;
