'use client';

import { HeaderImage } from './components/headerImage';
import { OptionCards } from './components/optionsCard';
import { TripItinaries } from './components/tripItinaries';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full h-full min-h-screen bg-white rounded-lg shadow-lg p-8">
        <HeaderImage />
        <OptionCards />
        <TripItinaries />
      </div>
    </div>
  );
}
