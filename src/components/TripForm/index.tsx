import { useState } from "react";
import { useDispatch } from "react-redux";
import { TripProps } from "../../interfaces";
import { addTrip } from "../../redux/trips";
import styled from "styled-components";
import Input from "../Input";
import PlusCircleIcon from "../../assets/SVGs/PlusCircle";
import Button from "../Button";

interface TripFormProps {
  onRequestClose: () => void;
}

const FormContainer = styled.div`
  padding: 1rem;
  h1,
  h3 {
    font-weight: 500;
  }
`;

const InvisibleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0077cc;
  cursor: pointer;
`;

const ItineraryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #F3F3F3;
  margin: 1rem 0 2rem 0;
  border-radius: 1.5rem;
  padding: 1rem;
`;

const ItineraryData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const TripForm: React.FC<TripFormProps> = ({ onRequestClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [itinerary, setItinerary] = useState<
    { day: number; location: string; description: string }[]
  >([{ day: 1, location: "", description: "" }]);

  const handleAddDay = () => {
    setItinerary([
      ...itinerary,
      { day: itinerary.length + 1, location: "", description: "" },
    ]);
  };

  const handleItineraryChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newItinerary = [...itinerary];
    newItinerary[index] = { ...newItinerary[index], [field]: value };
    setItinerary(newItinerary);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrip: TripProps = {
      id: Date.now()?.toString(),
      title,
      description,
      photo_url: photoUrl,
      status: "todo",
      itinerary,
    };
    dispatch(addTrip(newTrip));
    onRequestClose();
  };

  return (
    <FormContainer>
      <h1>Create a Trip</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          id="title"
          value={title}
          onChange={(val) => setTitle(val)}
          required
        />
        <Input
          type="text"
          label="Description"
          id="description"
          value={description}
          onChange={(val) => setDescription(val)}
          istextarea
          required
        />
        <Input
          type="text"
          label="Photo URL"
          id="image"
          value={photoUrl}
          onChange={(val) => setPhotoUrl(val)}
          required
        />
        <Wrapper>
          <h3>Day by day itinerary</h3>
          <InvisibleButton type="button" onClick={handleAddDay}>
            <PlusCircleIcon />
          </InvisibleButton>
        </Wrapper>

        {itinerary.map((item, index) => (
          <ItineraryWrapper key={index}>
            <Input
              type="number"
              label="Day"
              id={`itinerary-day-${index}`}
              value={item.day.toString()}
              onChange={(val) => handleItineraryChange(index, "day", val)}
              required
            />
            <ItineraryData>
              <Input
                type="text"
                label="Location"
                id={`itinerary-location-${index}`}
                value={item.location}
                onChange={(val) =>
                  handleItineraryChange(index, "location", val)
                }
                required
              />
              <Input
                type="text"
                label="Description"
                id={`itinerary-description-${index}`}
                value={item.description}
                onChange={(val) =>
                  handleItineraryChange(index, "description", val)
                }
                istextarea
                required
              />
            </ItineraryData>
          </ItineraryWrapper>
        ))}
        <Button variant="filled" type="submit">Create Trip</Button>
      </form>
    </FormContainer>
  );
};


export default TripForm;
