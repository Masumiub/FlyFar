"use client";

import React, { useEffect, useState } from "react";

import { CgDarkMode } from "react-icons/cg";
import { IoHomeOutline, IoMailUnreadOutline, IoPersonOutline } from "react-icons/io5";
import { SlPlane } from "react-icons/sl";
import { MdNotes } from "react-icons/md";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="mx-auto flex justify-center w-full">
      <div className="navbar px-3 mt-3 w-full md:w-10/12 fixed top-0 z-50 shadow-2xl bg-base-100 rounded-2xl">
        {/* Left Side */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutus">About us</Link>
              </li>
              <li>
                <Link href="/TourPackages">Tours</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="ml-2">
            <Image src={logo} alt="logo" className="w-12" />
          </Link>
          <Link
            href="/"
            className="text-3xl font-bold ml-2 hidden md:block"
          >
            <span className="text-blue-500">Fly</span>Far
          </Link>
        </div>

        {/* Center Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link href="/">
                <IoHomeOutline /> Home
              </Link>
            </li>
            <li>
              <Link href="/TourPackages">
                <SlPlane /> Tours
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                <IoPersonOutline /> About us
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <IoMailUnreadOutline />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">
          {/* Dark Mode Toggle */}
          <div className="form-control mt-1">
            <label className="label cursor-pointer">
              <CgDarkMode size={25} />
              <input
                type="checkbox"
                className="toggle theme-controller"
                onChange={toggleTheme}
                checked={theme === "dark"}
              />
            </label>
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-2">
            <Link
              href="/login"
              className="btn rounded-full bg-blue-500 text-white border-0"
            >
              Login
            </Link>
            <Link href="/register" className="btn rounded-full">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
