import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TripCard from "../components/TripCard";
import { TripProps } from "../interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchTrips } from "../redux/trips";
import SearchHeader from "../components/SearchHeader";
import Tabs from "../components/Tabs";

const Home = () => {
  const { trips, loading, error } = useSelector(
    (state: RootState) => state.trips
  );
  const [filteredTrips, setFilteredTrips] = useState<TripProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  useEffect(() => {
    const filtered = trips.filter(
      (trip) =>
        trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrips(filtered);
  }, [searchTerm, trips]);

  const handleSearch = () => {
    const filtered = trips.filter(
      (trip) =>
        trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trip.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTrips(filtered);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const allTrips = filteredTrips;
  const upcomingTrips = filteredTrips.filter(
    (trip) => trip.status.toLowerCase() === "todo"
  );
  const completedTrips = filteredTrips.filter(
    (trip) => trip.status.toLowerCase() === "done"
  );

  const tabs = [
    {
      label: "All",
      content: (
        allTrips.map((trip) => (
            <TripCard key={`${trip.id}-${trip.title}`} trip={trip} />
          ))
      ),
    },
    {
      label: "Upcoming",
      content: (
        upcomingTrips.map((trip) => (
            <TripCard key={`${trip.id}-${trip.title}`} trip={trip} />
          ))
      ),
    },
    {
      label: "Completed",
      content: (
          completedTrips.map((trip) => (
            <TripCard key={`${trip.id}-${trip.title}`} trip={trip} />
          ))
      ),
    },
  ];

  return (
    <div>
      <SearchHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Home;
