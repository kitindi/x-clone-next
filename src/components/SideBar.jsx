import Link from "next/link";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
const SideBar = () => {
  return (
    <div className="flex flex-col gap-x-4">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer p-3.5 hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link href="/" className="flex items-center gap-2 py-3 px-6 mt-4 hover:bg-gray-100 rounded-full transition-all duration-200 w-fit">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="#000000" viewBox="0 0 256 256">
          <path d="M224,120v96a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V164a4,4,0,0,0-4-4H108a4,4,0,0,0-4,4v52a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120a16,16,0,0,1,4.69-11.31l80-80a16,16,0,0,1,22.62,0l80,80A16,16,0,0,1,224,120Z"></path>
        </svg>
        <span className="font-bold hidden xl:inline">Home</span>
      </Link>
      <button className="flex items-center gap-2 px-8 py-2 mt-4 font-semibold bg-blue-400 rounded-full transition-all duration-200 w-fit">Sign In</button>
    </div>
  );
};

export default SideBar;
