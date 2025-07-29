import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/solid";
function Landing() {
  
  return (
    <div className="flex md:flex-row flex-col gap-x-24 dark:bg-dark-background bg-light-background items-center justify-center h-screen">
      {/* div one */}
      <div className="flex flex-col items-center md:items-start mb-6 p-4">

        <p className="dark:text-dark-text flex gap-3 items-center my-4 text-xl ">
          <div className="bg-light-button dark:bg-dark-button max-w-10 max-h-10 flex justify-center items-center p-1 border rounded-xl dark:border-dark-button border-light-button ">
            <FaceSmileIcon height={40} width={40} color="white" />
          </div>
          EatoMoji
        </p>
        <h1 className=" text-5xl dark:text-dark-text text-center">Match your mood</h1>
        <h3 className="dark:text-dark-secondary-text text-start">choose an emoji and discover meals that fit your feelings</h3>
        <button className="bg-light-button dark:bg-dark-button rounded-2xl shadow-amber-100 md:shadow-2xl shadow-2xl px-4 py-2 md:mt-10 mt-6 text-center">start now</button>

      </div>

      {/* div 2 */}
      <div className=" ">
        <img
          src="/anna_baba.png"
          alt="anna baba"
          className="drop-shadow-[0_0_10px_rgba(251,191,36,0.7)] dark:drop-shadow-[0_0_10px_rgba(251,191,36,1)] rounded-lg"
        />
      </div>

    </div>
  );
}

export default Landing;
