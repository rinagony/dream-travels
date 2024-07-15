import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTrips } from "../services/api";
import TripDetail from "../components/TripDetail";
import { TripProps } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TripDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const trip = useSelector((state: RootState) => state.trips.trips.find((trip) => trip.id == id));

  if (!trip) return <div>Loading...</div>;

  return <TripDetail trip={trip} />;
};

export default TripDetailPage;
