// src/components/TripDetail.tsx

import React from 'react';
import styled from 'styled-components';
import { TripProps } from '../../interfaces';

const DetailContainer = styled.div`
  padding: 16px;
`;

interface TripDetailProps {
  trip: TripProps;
}

const TripDetail: React.FC<TripDetailProps> = ({ trip }) => (
  <DetailContainer>
    <img src={trip.photo_url} alt={trip.title} />
    <h1>{trip.title}</h1>
    <p>{trip.description}</p>
    <h3>Itinerary:</h3>
    {trip.itinerary.map(item => (
      <div key={item.day}>
        <h4>Day {item.day}: {item.location}</h4>
        <p>{item.description}</p>
      </div>
    ))}
  </DetailContainer>
);

export default TripDetail;