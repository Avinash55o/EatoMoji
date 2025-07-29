import React from "react";
import { FaceSmileIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { DarkThemeContext } from "../contextAPI/darkThemeContext";
import { SunIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate()
  const { isDark, setIsDark } = useContext(DarkThemeContext);
  const toggleDark = () => {
    if (isDark === "dark") {
      setIsDark("");
    } else {
      setIsDark("dark");
    }
  };
  return (
    //  theme and down page
    <div className=" dark:bg-dark-background bg-light-background  h-screen font-fredoka">
      {/* theme button */}
      <div className="flex justify-end md:mb-20 mr-4 p-2">
        <button
          className=" dark:text-dark-button text-light-primary-button cursor-pointer h-12 w-12 p-2 transition-transform duration-200 ease-in-out hover:scale-125"
          onClick={toggleDark}
        >
          {isDark === "dark" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
      {/* info and img part */}
      <div className="flex md:flex-row flex-col gap-x-20 items-center justify-center">
        {/* div one */}
        <div className="flex flex-col items-center md:items-start mb-6 p-4">
          <p className="dark:text-dark-text flex gap-3 items-center my-4 text-xl ">
            <div className="bg-light-primary-button dark:bg-dark-button max-w-10 max-h-10 flex justify-center items-center p-1 border rounded-xl dark:border-dark-button border-light-primary-button ">
              <FaceSmileIcon height={40} width={40} color="white" />
            </div>
            EatoMoji
          </p>
          <h1 className=" md:text-6xl text-4xl dark:text-dark-text text-center">
            Match your mood
          </h1>
          <h3 className="dark:text-dark-secondary-text text-light-secondary-text text-center md:text-start md:text-xl">
            choose an emoji and discover meals that fit your feelings
          </h3>
        
            <button onClick={()=>navigate("/page/signup")} className="bg-light-primary-button dark:bg-dark-button dark:hover:bg-dark-accentButtonhover hover:bg-light-primary-buttonhover dark:text-dark-text text-dark-text rounded-2xl md:text-2xl shadow-amber-100 md:shadow-2xl shadow-2xl px-4 py-2 md:mt-20 mt-6 text-center cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
              start now
            </button>
         
        </div>

        {/* div 2 */}
        <div>
          <img
            src="/anna_baba.png"
            alt="anna baba"
            className="w-96 h-96 md:w-[42rem] md:h-[42rem] drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] dark:drop-shadow-[0_0_10px_rgba(251,191,36,1)] rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
