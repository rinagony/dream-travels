export interface ItineraryItemProps {
  day: number;
  location: string;
  description: string;
}

export interface TripProps {
  id: string;
  title: string;
  description: string;
  photo_url: string;
  status: string;
  itinerary: ItineraryItemProps[];
}

export interface TabProps {
  label: string;
  content: React.ReactNode;
}