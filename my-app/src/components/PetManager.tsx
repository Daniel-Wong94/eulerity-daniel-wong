import PetFeed from "./PetFeed";
import SelectedPets from "./SelectedPets";
import styled from "styled-components";
import { useState } from "react";
import { Pet } from "../types/PetTypes";

const StyledPetManager = styled.div`
  display: flex;
  gap: 24px;
  margin: 24px;
`;

const PetManager = () => {
  const [selectedPets, setSelectedPets] = useState<Pet[]>([]);

  return (
    <StyledPetManager>
      <PetFeed setSelectedPets={setSelectedPets} />
      <SelectedPets selectedPets={selectedPets} />
    </StyledPetManager>
  );
};

export default PetManager;
