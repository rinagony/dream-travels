import React from "react";
import styled from "styled-components";
import { TripProps } from "../../interfaces";
import { Image } from "../../assets/styles/shared";
import Completed from "../../assets/SVGs/Completed";

const DetailContainer = styled.div`
  margin: 0 auto;
`;

const ItineraryContainer = styled.div`
  position: relative;
  margin-top: 16px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 1rem;
    bottom: 0;
    width: 2px;
    background: ${({ theme }) => theme.colors.black};
  }
`;

const ItineraryItem = styled.div`
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -4px;
    z-index: 1;
    top: 2rem;
    width: 7px;
    height: 7px;
    background: ${({ theme }) => theme.colors.black};
    border: 2px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;
  }
`;

const ItineraryContent = styled.div`
  padding: 0.3rem 1rem;
  border-radius: 4px;

  h4 {
    font-weight: 600;
  }
`;

const StatusTrip = styled.div`
  color: #898989;
  display: flex;
  align-items: center;
  p {
    margin-left: 4px;
  }
`;

const imageStyles = { borderRadius: "1.5rem", width: "100%" };

interface TripDetailProps {
  isOpen: boolean;
  onRequestClose: () => void;
  trip: TripProps | null;
}

const TripDetail: React.FC<TripDetailProps> = ({ trip }) => {
  if (!trip) return <p>No trip found...</p>;

  return (
    <DetailContainer>
      <Image style={imageStyles} src={trip.photo_url} alt={trip.title} />
      {trip.status === "done" && (
        <StatusTrip>
          <Completed />
          <p>Marked as completed</p>
        </StatusTrip>
      )}
      <h1>{trip.title}</h1>
      <p>{trip.description}</p>
      <h3>Itinerary:</h3>
      <ItineraryContainer>
        {trip.itinerary.map((item) => (
          <ItineraryItem key={item.day}>
            <ItineraryContent>
              <h4>
                Day {item.day}: {item.location}
              </h4>
              <p>{item.description}</p>
            </ItineraryContent>
          </ItineraryItem>
        ))}
      </ItineraryContainer>
    </DetailContainer>
  );
};

export default TripDetail;
