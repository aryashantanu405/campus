"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import logo from "./assets/2.png";
import menulogo from "./assets/icons8-menu.svg";
import usericon from "./assets/user_accounts_15362.png";
import { UserButton, useUser, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { UserContext } from "@/Context/usercontext";

export default function Header() {
  const {user}=useContext(UserContext);
  console.log(user);
  const { isSignedIn } = useUser();
  const [isOpen, setIsOpen] = useState(false); // Track menu state

  return (
    <nav className=" bg-orange-500 border-gray-200 dark:bg-gray-900 dark:border-gray-700 ml-1 mr-1 rounded-md">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image src={logo} width={50} height={50} alt="Unify Logo" className="rounded-full" />
          <span className="hidden sm:block text-2xl font-semibold text-white">Unify</span>
        </Link>

        {/* Desktop Navigation (Ensuring Vertical Center Alignment) */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 font-semibold text-white">
            <li><Link href="/" className="py-2 px-3 hover:text-red-700">Home</Link></li>
            <li><Link href="#" className="py-2 px-3 hover:text-red-700">Explore</Link></li>
            <li><Link href="#" className="py-2 px-3 hover:text-red-700">Upcoming</Link></li>
            <li>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignUpButton >
                  <button className="py-2 px-3 text-white rounded-lg flex items-center">
                    <Image src={usericon} height={40} width={40} alt="User Icon" />
                  </button>
                </SignUpButton>
              )}
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-lg flex items-center"
        >
          <Image src={menulogo} width={40} height={40} alt="Menu Logo" />
        </button>
      </div>

      {/* Mobile Menu (Appears when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white p-4 rounded-lg">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="block py-2 px-4 hover:text-red-700">Home</Link></li>
            <li><Link href="#" className="block py-2 px-4 hover:text-red-700">Explore</Link></li>
            <li><Link href="#" className="block py-2 px-4 hover:text-red-700">Upcoming</Link></li>
            <li>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignUpButton>
                  <button className="py-2 px-3 text-white rounded-lg flex items-center">
                    <Image src={usericon} height={40} width={40} alt="User Icon" />
                  </button>
                </SignUpButton>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
