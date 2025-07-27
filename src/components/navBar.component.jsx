import React from "react";
import { HomeIcon, UserIcon, MoonIcon, SunIcon, ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

function NavBar() {
  return (
    <div className="flex flex-col  items-center pt-8">
      <div className="border border-gray-300 py-3 flex gap-1 items-center shadow-xl rounded-4xl w-[40%] h-[50px]">
        <p className="p-4 mr-50">ETOMOJI</p>
        <div className="group relative px-4 cursor-pointer ml-40">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <HomeIcon className="w-6 h-6" />
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-md">
            Home
          </span>
        </div>

       

        <div className="group relative px-4 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <UserIcon className="w-6 h-6" />
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-md">
            User
          </span>
        </div>

        <div className="group relative px-4 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <ArrowLeftEndOnRectangleIcon className="w-6 h-6" />
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-md">
            Logout
          </span>
        </div>

         <div className="group relative px-4 cursor-pointer">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
            <SunIcon className="w-6 h-6" />
          </div>
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-md">
            bright
          </span>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
