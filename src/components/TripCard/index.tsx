import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TripProps } from "../../interfaces";
import Button from "../Button";

const Card = styled.div`
  display: flex;
  border-radius: 2rem;
  flex-direction: row;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.semiGray};
  margin: 16px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  max-height: 16rem;
  object-fit: cover;
  border-radius: 2rem 0 0 2rem;
  margin-right: 16px;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;

const Content = styled.div`
  flex-basis: 50%;
  height: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    margin: 1rem 0 0 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    margin: 0;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Actions = styled.div`
  margin-top: 2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Description = styled.div`
  margin-bottom: 2rem;
`

const SubActions = styled.div`
  display: flex;
`;

interface TripCardProps {
  trip: TripProps;
}

const TripCard = ({ trip }: TripCardProps) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/trip/${trip.id}`);
  };

  return (
    <Card>
      <Image src={trip.photo_url} alt={trip.title} />
      <Content>
        <Description>
        <h2>{trip.title}</h2>
        <p>{trip.description}</p>
        </Description>
        <Actions>
          <Button variant="outlined" onClick={handleOnClick}>
            See trip details
          </Button>
          <SubActions>
            <Button variant="outlined" onClick={() => console.log("Edit trip")}>
              Edit
            </Button>
            <Button variant="outlined" onClick={() => console.log("Delete trip")}>
              Delete
            </Button>
          </SubActions>
        </Actions>
      </Content>
    </Card>
  );
};

export default TripCard;
