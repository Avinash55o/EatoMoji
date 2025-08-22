import React from "react";
import {
  HomeIcon,
  UserIcon,
  SunIcon,
  ArrowLeftEndOnRectangleIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DarkThemeContext } from "../contextAPI/darkThemeContext";
import { useNavigate } from "react-router-dom";

function NavIcon(props) {
  const Icon = props.icon;
  const label = props.label;
  const onClick= props.onClick

  return (
    <div className="group relative cursor-pointer" onClick={onClick}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-blue-500 text-light-accent dark:text-dark-accent ">
        <Icon className="w-6 h-6" />
      </div>
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 rounded-md border border-gray-300 bg-white px-3 py-2 text-xs shadow-md whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function NavBar() {
  const { isDark, setIsDark } = useContext(DarkThemeContext);
  const navigate = useNavigate();

  //logout handle function
  const handle_logout= ()=>{
    localStorage.removeItem("user")
    navigate("/",{replace:true})
  };

  const toggleDark = () => {
    if (isDark === "dark") {
      setIsDark("");
    } else {
      setIsDark("dark");
    }
  };
  return (
    <div className="w-full px-4 py-2  dark:bg-transparent">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between border border-gray-300 dark:border-gray-600 shadow-xl rounded-3xl px-4 py-2">
        {/* Logo */}
        <p className="font-chewy text-xl md:text-2xl dark:text-dark-primary text-light-primary">
          ETOMOJI
        </p>

        {/* Icons Section */}
        <div className="flex gap-3 md:gap-6 items-center flex-wrap justify-end">
          <NavIcon icon={HomeIcon} label="Home" onClick={() => navigate("/page/home")} />
          <NavIcon
            icon={UserIcon}
            label="User"
            onClick={() => navigate("/page/profile")}
          />
          <NavIcon icon={ArrowLeftEndOnRectangleIcon} label="Logout" onClick={handle_logout} />
          <button onClick={toggleDark}>
            {isDark === "dark" ? (
              <NavIcon icon={MoonIcon} label="dark" />
            ) : (
              <NavIcon icon={SunIcon} label="Bright" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
