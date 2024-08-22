import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full top-0 z-50 bg-[#F3F2FF]">
      <div className="flex justify-between items-center text-black px-5 py-3 md:px-10">
        <Link href="/">
          <img
            src="../home/bbit.svg"
            className="w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-25 lg:h-16"
            alt="Logo"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#27066F]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex space-x-6 lg:space-x-14 text-[#27066F] font-normal text-xl">
          <Link href="/" className="font-semibold">
            Home
          </Link>
          <Link href="/">About</Link>
          <Link href="admission">Admissions</Link>
          <Link href="courses">Department</Link>
          <Link href="/">Placements</Link>
          <Link href="/">Downloads</Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#F3F2FF] text-[#27066F] font-normal text-lg flex flex-col justify-center items-center space-y-4">
          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 text-[#27066F]"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href="/" className="block px-5 py-2 hover:bg-gray-200 font-medium">
            Home
          </Link>
          <Link href="/" className="block px-5 py-2 hover:bg-gray-200">
            About
          </Link>
          <Link href="/" className="block px-5 py-2 hover:bg-gray-200">
            Admissions
          </Link>
          <Link href="courses" className="block px-5 py-2 hover:bg-gray-200">
            Department
          </Link>
          <Link href="/" className="block px-5 py-2 hover:bg-gray-200">
            Placements
          </Link>
          <Link href="/" className="block px-5 py-2 hover:bg-gray-200">
            Downloads
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;