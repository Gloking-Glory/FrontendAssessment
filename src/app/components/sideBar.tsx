'use client';
import React from 'react';
import { FC } from 'react';
import Link from 'next/link';
import {
  FlightsIcon, ActivitiesIcon, StudyIcon,
  Medical, Immigration, Vacation, Visa, Hotels
} from 'public/svgs/svgs';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}


export const sidebarItems: NavItem[] = [
  { href: '/activities', label: 'Activities', icon: <ActivitiesIcon size={16} /> },
  { href: '/hotels',    label: 'Hotels',    icon: <Hotels size={16} /> },
  { href: '/flights',   label: 'Flights',   icon: <FlightsIcon size={16} /> },
  { href: '/study',     label: 'Study',     icon: <StudyIcon size={16} /> },
  { href: '/visa',      label: 'Visa',      icon: <Visa size={16} /> },
  { href: '/immiigration', label: 'Immigration', icon: <Immigration size={16} /> },
  { href: '/medical',   label: 'Medical',   icon: <Medical size={16} /> },
  { href: '/packages',  label: 'Vacation Packages',  icon: <Vacation size={16} /> },
];

export const Sidebar: FC = () => {
  return (
    <aside className="w-60 bg-gray-50 border-r h-screen py-6 px-4">
      {sidebarItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center space-x-3 mb-4 text-gray-700 hover:text-blue-600"
        >
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
    </aside>
  );
};
