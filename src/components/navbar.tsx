"use client"
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";


// interface NavbarProps {
//   backgroundShow?: boolean;
// }

export function Navbar(){

  const [showNavbarBackground, setShowNavbarBackGround] = useState(false);

  function handleWindowScroll (){
    if(!window) return;
  
    if(window.scrollY === 0) setShowNavbarBackGround(false);
    else setShowNavbarBackGround(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  },[])

  return (
    <div className={clsx(
      `md:px-36 `,
      `fixed z-10 right-0 left-0 flex transition-all justify-between gap-2 text-white px-10 py-2 `,      
      (showNavbarBackground ? "backdrop-filter backdrop-blur-lg bg-black bg-opacity-30" : "bg-green-600")
      )
    }>
      <h1 className={"font-bold text-white text-xl  "}>Banyuwangi Supplier</h1>
      <ul className="hidden md:flex gap-5">
        <li>
          <a className="hover:underline underline-offset-2" href="https://wa.me/6281217692430">
          Contact Us
          </a>
        </li>

        {/* <li>Profile</li> */}
      </ul>
    </div>
  )
}