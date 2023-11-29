import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import PetCard from "./PetCard";
import styled from "styled-components";

const StyledPetFeed = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
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
