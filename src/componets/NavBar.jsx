"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session, status } = useSession();
  return (
    <header className="bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* left: logo */}
          <div className="flex items-center flex-col gap-4">
            {/* replace /logo.svg with your image in public/ */}
            <Link href="/" className="flex items-center gap-3">
              {/* Uncomment if needed */}
              {/* <img src="/logo.svg" alt="Logo" className="h-10 w-auto" /> */}

              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* center: menu (desktop) */}
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
            {status == "authenticated" ? (
              <>
              <li>
                <Image src={session?.user?.image} width={20} height={20} alt="user logo" />
              </li>
              <button className="cursor-pointer" onClick={() => signOut()}>LogOut</button>
              </>
            ) : (
              <>
                <Link href={"/register"}>Register</Link>
                <Link href={"/login"}>Login</Link>
              </>
            )}

            {/* <Link href={"/register"}>Register</Link> */}
          </ul>

          {/* right: icons + appointment */}
          <div className="flex items-center gap-4">
            {/* simple icons (SVG) */}
            <button className="hidden sm:inline-flex items-center p-2 rounded hover:bg-gray-100">
              {/* cart icon */}
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5M9 21h.01M15 21h.01"
                />
              </svg>
            </button>

            <button className="hidden sm:inline-flex items-center p-2 rounded hover:bg-gray-100">
              {/* search icon */}
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M10.5 18A7.5 7.5 0 1 1 10.5 3a7.5 7.5 0 0 1 0 15z"
                />
              </svg>
            </button>

            {/* appointment button */}
            <a
              href="#"
              className="hidden sm:inline-block px-4 py-2 border rounded-md text-sm font-medium text-orange-600 border-orange-300 hover:bg-orange-50"
              aria-label="Appointment"
            >
              Appointment
            </a>

            {/* mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden bg-white border-t ${open ? "block" : "hidden"}`}
      >
        <ul className="px-4 py-3 space-y-2 text-sm">
          <li>
            <a href="#" className="block text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="block text-gray-700">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block mt-2 px-4 py-2 border rounded-md text-center text-orange-600 border-orange-300"
            >
              Appointment
            </a>
          </li>
          <Link href={"/register"}>Register</Link>
        </ul>
      </div>
    </header>
  );
}
