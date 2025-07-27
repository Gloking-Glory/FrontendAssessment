import React from 'react';
import { BannerImage } from "public/svgs/svgs"

export function HeaderImage() {
  return (
    <div className="w-full rounded-md p-1 relative">
      <BannerImage size={32} className="w-full h-full"/>
      <div className="top-2 mt-6 left-2 w-fit text-sm text-orange-600 bg-orange-100">
        <span className="px-2 py-1 rounded">21 March 2024 → 21 April 2024</span>
      </div>
      <h1 className="text-3xl mt-4 font-bold text-gray-800">Bahamas Family Trip</h1>
      <p className="text-1xl text-gray-700 mt-2">New York, United States of America • Solo Trip</p>
    </div>
  );
}
