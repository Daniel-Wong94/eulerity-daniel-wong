import styled from "styled-components";
import { Pet } from "../types/PetTypes";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";

type SelectedPetsProps = {
  selectedPets: Pet[];
};

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

const SelectedPets: React.FC<SelectedPetsProps> = ({ selectedPets }) => {
  const { loading } = useContext(PetsContext);

  if (loading) return null;

  return (
    <StyledSelectedPetsContainer>
      <h2>Selected Pets</h2>
      <StyledPetDownloads>
        {selectedPets.map((pet) => (
          <li>{pet.title}</li>
        ))}
      </StyledPetDownloads>
      <StyledButtonContainer>
        <button>Clear All</button>
        <button>Download All</button>
      </StyledButtonContainer>
    </StyledSelectedPetsContainer>
  );
};

export default SelectedPets;
