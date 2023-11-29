import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import PetCard from "./PetCard";
import styled from "styled-components";

const StyledPetFeed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 24px;
`;

type PetFeedProps = {
  setSelectedPets: Function;
};

const PetFeed: React.FC<PetFeedProps> = ({ setSelectedPets }) => {
  const { pets, loading, error } = useContext(PetsContext);

  return (
    <StyledPetFeed>
      {loading && <div>Loading Pets...</div>}
      {pets?.map((pet) => (
        <PetCard key={pet.id} pet={pet} setSelectedPets={setSelectedPets} />
      ))}
    </StyledPetFeed>
  );
};

export default PetFeed;
