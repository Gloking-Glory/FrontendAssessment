'use client';
import React from 'react';
import { TripItem } from '../../types/trip';
import { X, Luggage, Tv, Utensils, Usb } from 'lucide-react';
import { AirlineIcon } from 'public/svgs/svgs';

interface Props {
  item: TripItem;
}

export function TripCard({ item }: Props) {
  return (
    <div className="relative bg-white border border-gray-100 rounded-md shadow-sm overflow-hidden mb-4">
      <div className="w-[97%] flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3 w-full md:w-auto">
          <AirlineIcon size={32} />
          <div>
            <h2 className="text-lg font-semibold text-black">{item.countryName}</h2>
            <div className="text-sm text-gray-500 flex items-center gap-1">
              <span>AA-829</span> · <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">First Class</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center w-full md:w-auto mt-4 md:mt-0">
          <div>
            <p className="text-xl font-bold text-black">08:35</p>
            <p className="text-sm text-gray-500">Sun, 20 Aug</p>
          </div>

          <div className="flex flex-col items-center text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="text-gray-700 font-semibold">Duration: 1h 45m</span>
            </span>
            <div className="w-32 h-1 rounded bg-gray-200 my-1 relative">
              <div className="w-1/2 h-1 bg-blue-600 rounded absolute left-0 top-0"></div>
            </div>
            <div className="flex justify-between w-full text-xs text-gray-600 font-semibold">
              <span>LOS</span>
              <span>Direct</span>
              <span className="font-bold text-black">SIN</span>
            </div>
          </div>

          <div>
            <p className="text-xl font-bold text-black">09:55</p>
            <p className="text-sm text-gray-500">Sun, 20 Aug</p>
          </div>
        </div>

        <div className="text-right w-full md:w-auto mt-4 md:mt-0">
          <p className="text-2xl font-bold text-gray-800">{item.price}</p>
        </div>
      </div>

      <div className="border-t" />

      <div className="px-6 py-4 text-base text-gray-700 flex flex-wrap gap-x-6 gap-y-2 items-center">
        <span className="flex items-center gap-2">Facilities:</span>
        <span className="flex items-center gap-1"><Luggage size={16} /> Baggage: 20kg, Cabin Baggage: 8kg</span>
        <span className="flex items-center gap-1"><Tv size={16} /> In flight entertainment</span>
        <span className="flex items-center gap-1"><Utensils size={16} /> In flight meal</span>
        <span className="flex items-center gap-1"><Usb size={16} /> USB Port</span>
      </div>

      <div className="border-t" />

      <div className="w-[97%] flex justify-between items-center px-6 py-3 text-blue-600 text-sm font-medium">
        <div className="flex gap-6">
          <button className="hover:underline font-bold text-base">Flight details</button>
          <button className="hover:underline font-bold text-base">Price details</button>
        </div>
        <button className="hover:underline font-bold text-base">Edit details</button>
      </div>

      <div className="absolute top-0 right-0 h-full w-8 bg-red-50 flex items-center justify-center hover:bg-red-100 cursor-pointer">
        <X size={18} className="text-red-500" />
      </div>
    </div>
  );
}
