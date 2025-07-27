'use client';

import { useEffect, useState } from 'react';
import { Flights } from 'public/svgs/svgs';
import { TripCard } from './tripCard';
import { TripItem } from 'src/types/trip';

interface FlightApiItem {
  id: string,
  countryName: string;
  price: string;
}

export const TripItinaries = () => {
  const [flights, setFlights] = useState<TripItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const res = await fetch('https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination?query=new', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'booking-com15.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY || '',
          },
        });

        const data = await res.json();
        const { data: flightData } = data || [];
        console.log(flightData);

        const parsedFlights: TripItem[] = (data?.data?.slice(0, 5) || []).map((flight: FlightApiItem, idx: number) => ({
          id: `flight-${idx}`,
          countryName: flight?.countryName || 'American Airlines',
          price: "₦123,450.00"
        }));

        setFlights(parsedFlights);
      } catch (err: unknown) {
        setError('Failed to load flight data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  return (
    <section className="mt-16 mb-6">
      <h5 className="text-xl mt-4 font-bold text-gray-800">Trip Itineraries</h5>
      <p className="text-sm text-gray-700">Your trip itineraries are placed here</p>

      <div className="min-h-screen bg-gray-100 p-6 mt-10">
        <div className="w-full h-full min-h-screen bg-white rounded-lg shadow-lg p-8">
          <h5 className="flex items-center text-gray-700 text-md font-semibold">
            <Flights size={24} />
            <span className="ml-2">Flights</span>
          </h5>

          <div className="mt-6">
            {loading && <p className="text-gray-500">Loading flights...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {flights.map((item) => (
              <TripCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
