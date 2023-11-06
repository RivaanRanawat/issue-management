"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoIssueReopened } from "react-icons/go";
import AuthState from "./components/AuthState";
import { Flex } from "@radix-ui/themes";

const NavBar = () => {
  const navbarItems = [
    {
      href: "/",
      title: "Dashboard",
    },
    {
      href: "/issues",
      title: "Issues",
    },
  ];

  const path = usePathname();

  return (
    <nav className="border-b px-5 mb-5 py-3">
      <Flex justify={"between"}>
        <Flex justify={"center"} gap={"5"}>
          <Link href="/" className="py-1">
            <GoIssueReopened />
          </Link>
          <ul className="flex space-x-6">
            {navbarItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`hover:text-zinc-800 ${
                  item.href == path ? "text-zinc-900" : "text-zinc-500"
                }`}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </Flex>
        <AuthState />
      </Flex>
    </nav>
  );
};

export default NavBar;
