import PetFeed from "./PetFeed";
import SelectedPets from "./SelectedPets";
import styled from "styled-components";
import { SelectedPetsContextProvider } from "../context/SelectedPetsContext";

const StyledPetManager = styled.div`
  display: flex;
  gap: 24px;
  margin: 24px;
`;

const PetManager = () => {
  return (
    <StyledPetManager>
      <SelectedPetsContextProvider>
        <PetFeed />
        <SelectedPets />
      </SelectedPetsContextProvider>
    </StyledPetManager>
  );
};

export default PetManager;
