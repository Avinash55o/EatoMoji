import React from "react";

export default function MoodCard() {
  return (
    <div>
      <p className="mb-16 aspect-ratio-supported:hidden">
        If this looks wonky to you it's because this browser doesn't support the CSS
        property 'aspect-ratio'.
      </p>

      <div className="w-[55%] max-w-[400px] transition ease-in-out duration-200 hover:rotate-[5deg] relative group">
        <div className="relative border-4 bg-white aspect-[3/2] cursor-pointer p-[5%_5%_15%_5%] transition duration-150 ease-in-out">
          {/* Pseudo-elements recreated as elements */}
          <div className="absolute top-0 left-0 h-full w-full border-4 bg-white z-[-1] transition duration-150 ease-in-out transform -translate-y-[2%] rotate-[-6deg] group-hover:translate-y-[-2%] group-hover:rotate-[-4deg]" />
          <div className="absolute top-0 left-0 h-full w-full border-4 bg-white z-[-1] transition duration-150 ease-in-out transform translate-y-[2%] rotate-[6deg] group-hover:translate-y-[2%] group-hover:rotate-[4deg]" />

          <div className="w-full border-4 bg-[#eee] aspect-square relative" />
        </div>
      </div>
    </div>
  )
}
