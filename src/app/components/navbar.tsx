'use client';

import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import {
  GoLogo, HomeIcon, DashboardIcon, WalletIcon,
  PlanIcon, CommissionIcon, Notificatonicon, CartsIcon,
  CreateIcon, ProfileImage
} from 'public/svgs/svgs';

const navIcons = [
  { icon: <HomeIcon size={24} />, label: 'Home' },
  { icon: <DashboardIcon size={24} />, label: 'Dashboard' },
  { icon: <WalletIcon size={24} />, label: 'Wallet' },
  { icon: <PlanIcon size={24} />, label: 'Plan a trip', active: true },
  { icon: <CommissionIcon size={24} />, label: 'Commission for life' },
];

export const Navbar = () => {
  return (
    <nav className="h-20 bg-white border-b px-6 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <GoLogo size={32} />
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-3 rounded-md bg-gray-100 text-base placeholder:text-base text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-[300px]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-6 text-sm text-gray-600 font-medium">
          {navIcons.map(({ icon, label, active }) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center text-center cursor-pointer ${
                active ? 'text-black font-semibold' : 'hover:text-black'
              }`}
            >
              {icon}
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="h-10 w-px bg-gray-300" />

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md">
          Subscribe
        </button>

        <div className="flex items-center space-x-4 text-gray-600">
          <div className="flex flex-col items-center justify-center text-center hover:text-black cursor-pointer">
            <Notificatonicon size={22} />
            <span className="text-sm">Notification</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center hover:text-black cursor-pointer">
            <CartsIcon size={22} />
            <span className="text-sm">Carts</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center hover:text-black cursor-pointer">
            <CreateIcon size={22} />
            <span className="text-sm">Create</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <ProfileImage size={32} />
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};
