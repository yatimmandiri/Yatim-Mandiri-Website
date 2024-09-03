import Image from "next/image";
import Link from "next/link";
import { Container } from "postcss";
// import React, { useState } from "react";

function Navbar() {
  // const [nav, setNav] = useState(false);
  return (
    // <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
    //   <div>
    //     {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
    //     <h1 className="text-5xl font-signature ml-2">
    //       <a
    //         className="link-underline link-underline-black"
    //         href=""
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         Logo
    //       </a>
    //     </h1>
    //   </div>

    //   <ul className="hidden md:flex">
    //     <li className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline">
    //       <Link href="/">OK</Link>
    //     </li>
    //   </ul>

    //   <div
    //     onClick={() => setNav(!nav)}
    //     className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
    //   >
    //     {nav ? <i className=""></i> : <i className=""></i>}
    //   </div>

    //   {nav && (
    //     <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
    //       <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
    //         <Link onClick={() => setNav(!nav)} href="/">
    //           Ok
    //         </Link>
    //       </li>
    //     </ul>
    //   )}
    // </div>

    <nav className="bg-white shadow w-100 px-5 md:px-auto">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
        <div className="text-black md:order-1">
          <Image
            className="px-1"
            width={88}
            height={88}
            src="/img/ym-logo.svg"
            alt="logo"
          ></Image>
        </div>
        <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
          <ul className="flex font-semibold justify-between">
            <li className="md:px-4 md:py-2 text-black">
              <a href="#">Tentang Kami</a>
            </li>
            <li className="md:px-4 md:py-2 text-black">
              <a href="#">Layanan</a>
            </li>
            <li className="md:px-4 md:py-2 text-black">
              <a href="#">Program</a>
            </li>
            <li className="md:px-4 md:py-2 text-black">
              <a href="#">Program</a>
            </li>
            <li className="md:px-4 md:py-2 text-black">
              <a href="#">Parthnership</a>
            </li>
            <li className="md:px-4 md:py-2 text-black">
              <a href="#">Media</a>
            </li>
            <div className="order-2 md:order-3">
              <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md flex items-center gap-2">
                <span className="mx-5">Donasi</span>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
