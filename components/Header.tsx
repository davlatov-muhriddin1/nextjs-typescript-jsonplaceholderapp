"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface NavItems {
  id: number;
  path: string;
  text: string;
}

function Header() {
  const [navItems, setNavItems] = useState<NavItems[]>([
    {
      id: 1,
      path: "/",
      text: "users",
    },
    {
      id: 2,
      path: "/posts",
      text: "posts",
    },
    {
      id: 3,
      path: "/todos",
      text: "todos",
    },
    {
      id: 4,
      path: "/comments",
      text: "comments",
    },
  ]);

  const pathName = usePathname();

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              MD
            </span>
          </Link>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navItems.length &&
                navItems.map((navItem) => (
                  <li key={navItem.id}>
                    <Link
                      href={navItem.path}
                      className={`capitalize block  py-2 pr-4 pl-3 ${
                        navItem.path === pathName
                          ? "text-gray-400"
                          : "text-white"
                      } rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 `}
                      aria-current="page"
                    >
                      {navItem.text}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
