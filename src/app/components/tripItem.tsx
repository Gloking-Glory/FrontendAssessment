import { TripItem } from "src/types/trip";
import { Card } from "./card";

interface TripCardProps {
  item: TripItem;
}

export const TripCard = ({ item }: TripCardProps) => {
  return (
    <Card
      countryName={item.countryName}
      price={item.price}
    >
      <div className="text-sm mt-2 text-gray-700" />
    </Card>
  );
};
