import React from 'react';
import { FC } from "react";
interface CardProps {
  title: string;
  price?: string;
  children?: React.ReactNode;
}

export const Card: FC<CardProps> = ({ title, price, children }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border">
    <div className="flex">
      <div className="p-4 flex-1">
        <h3 className="font-semibold text-lg">{title}</h3>
        {price && <p className="text-blue-600 mt-2 font-bold">{price}</p>}
        {children}
      </div>
    </div>
  </div>
);
