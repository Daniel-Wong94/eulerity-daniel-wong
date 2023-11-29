import styled from "styled-components";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import { SelectedPetsContext } from "../context/SelectedPetsContext";

const StyledSelectedPetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px 12px;
  width: 100%;
  position: sticky;
  top: 0;
  height: 100%;
`;

const StyledPetDownloads = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SelectedPets = () => {
  const { loading } = useContext(PetsContext);
  const { selectedPets, clearAllPets } = useContext(SelectedPetsContext);

  if (loading) return null;

  return (
    <StyledSelectedPetsContainer>
      <h2>Selected Pets</h2>
      <StyledPetDownloads>
        {selectedPets?.map((pet) => (
          <li key={pet.id}>{pet.title}</li>
        ))}
      </StyledPetDownloads>
      <StyledButtonContainer>
        <button onClick={() => clearAllPets()}>Clear All</button>
        <button
          onClick={() =>
            window.open(
              "https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?format=tiny",
              "_blank"
            )
          }
        >
          Download All
        </button>
      </StyledButtonContainer>
    </StyledSelectedPetsContainer>
  );
};

export default SelectedPets;
