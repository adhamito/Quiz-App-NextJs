"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import logo from "/public/saveanytime.png";
import logo2 from "/public/saveanywhere.png";

export default function Navbar() {
  // State for authentication and user points
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [points, setPoints] = useState(120); // Example points

  // Function to toggle login/logout state
  const handleLoginLogout = () => {
    setIsSignedIn(!isSignedIn);
    if (isSignedIn) {
      setPoints(0);
    } else {
      setPoints(120);
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-black via-indigo-500 to-black"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon className="hidden h-6 w-6" aria-hidden="true" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              {/* Default logo for larger screens */}
              <Image
                alt="Logo"
                src={logo}
                className="h-8 w-auto hidden sm:block"
                width={180}
                height={90}
              />
              {/* Logo for small devices */}
              <Image
                alt="Logo for small devices"
                src={logo2}
                className="h-8 w-auto sm:hidden"
                width={200}
                height={90}
              />
            </div>
            <div className="hidden sm:block sm:ml-6"></div>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleLoginLogout}
              className="text-white bg-blue-500 px-4 py-2 rounded-2xl  
               hover:bg-gradient-to-r from-bleu via-indigo-800 to-blue-900  transition font-bold text-md "
            >
              {isSignedIn ? "Logout" : "Login"}
            </button>
            {isSignedIn && (
              <span className="text-white text-sm ml-4">Points: {points}</span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Disclosure.Button
            as="a"
            href="#"
            className="text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Home
          </Disclosure.Button>
          <Disclosure.Button
            as="a"
            href="#"
            className="text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Features
          </Disclosure.Button>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
