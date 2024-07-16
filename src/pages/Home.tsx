import { useEffect, useState } from "react";
import styled from "styled-components";
import TripCard from "../components/TripCard";
import { TripProps } from "../interfaces";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchTrips } from "../redux/trips";
import SearchHeader from "../components/SearchHeader";
import Tabs from "../components/Tabs";
import TripDetail from "../components/TripDetail";
import Header from "../components/Header";
import TripForm from "../components/TripForm";

const customStyles = {
  content: {
    width: "60%",
    margin: '0 auto',
    height: 'fit-content',
  },
};

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

Modal.setAppElement('#root');

const Home = () => {
  const { trips, loading, error } = useSelector(
    (state: RootState) => state.trips
  );
  const [filteredTrips, setFilteredTrips] = useState<TripProps[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTrip, setSelectedTrip] = useState<TripProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

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

  const openModal = (trip: TripProps) => {
    setSelectedTrip(trip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTrip(null);
    setIsModalOpen(false);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  }

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
      content: allTrips.map((trip) => (
        <TripCard
          onSelectTrip={openModal}
          key={`${trip.id}-${trip.title}`}
          trip={trip}
        />
      )),
    },
    {
      label: "Upcoming",
      content: upcomingTrips.map((trip) => (
        <TripCard
          onSelectTrip={openModal}
          key={`${trip.id}-${trip.title}`}
          trip={trip}
        />
      )),
    },
    {
      label: "Completed",
      content: completedTrips.map((trip) => (
        <TripCard
          onSelectTrip={openModal}
          key={`${trip.id}-${trip.title}`}
          trip={trip}
        />
      )),
    },
  ];

  return (
    <div id="root">
      <Header onCreate={() => setIsCreateModalOpen(true)}/>
      <SearchHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      <Tabs tabs={tabs} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Trip Details"
      >
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <TripDetail
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          trip={selectedTrip}
        />
      </Modal>
      <Modal
        isOpen={isCreateModalOpen}
        onRequestClose={closeCreateModal}
        style={customStyles}
        contentLabel="Create Trip"
      >
        <CloseButton onClick={closeCreateModal}>&times;</CloseButton>
       <TripForm onRequestClose={closeCreateModal}/>
      </Modal>
    </div>
  );
};

export default Home;
