"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { GoIssueReopened } from "react-icons/go";

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
    <nav className="flex space-x-6 border-b px-5 mb-5 h-14 items-center">
      <Link href="/">
        <GoIssueReopened />
      </Link>
      <ul className="space-x-6">
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
    </nav>
  );
};

export default NavBar;
