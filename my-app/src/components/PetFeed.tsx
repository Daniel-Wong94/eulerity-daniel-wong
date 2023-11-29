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

const PetFeed = () => {
  const { pets, loading, error } = useContext(PetsContext);

  return (
    <StyledPetFeed>
      {loading && <div>Loading Pets...</div>}
      {error && <div>Error fetching pets!</div>}
      {pets?.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </StyledPetFeed>
  );
};

export default PetFeed;
