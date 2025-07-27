import React from "react";
import {
  HomeIcon,
  UserIcon,
  SunIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/outline";

function NavIcon(props) {
  const Icon = props.icon;
  const label = props.label;

  return (
    <div className="group relative cursor-pointer">
      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500">
        <Icon className="w-6 h-6" />
      </div>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-md border border-gray-300 bg-white px-2 py-1 text-xs shadow-md whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function NavBar() {
  return (
    <div className="w-full px-4 py-2">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border border-gray-300 shadow-xl rounded-3xl px-4 py-2 overflow-hidden">
        {/* Logo */}
        <p className="font-chewy text-xl md:text-2xl">ETOMOJI</p>

        {/* Icons Section */}
        <div className="flex gap-3 md:gap-6 items-center flex-wrap justify-end">
          <NavIcon icon={HomeIcon} label="Home" />
          <NavIcon icon={UserIcon} label="User" />
          <NavIcon icon={ArrowLeftEndOnRectangleIcon} label="Logout" />
          <NavIcon icon={SunIcon} label="Bright" />
        </div>
      </div>
    </div>
  );
}



export default NavBar;
