import styled from "styled-components";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import { SelectedPetsContext } from "../context/SelectedPetsContext";
import { downloadPet } from "../utils/downloadPet";

const StyledSelectedPetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 12px 12px;
  /* width: 100%; */
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

  const handleDownloadAll = () => {
    selectedPets?.forEach((pet) => downloadPet(pet));
    clearAllPets();
  };

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
        <button
          onClick={() => clearAllPets()}
          disabled={selectedPets?.length === 0 ? true : false}
        >
          Clear All
        </button>
        <button
          onClick={handleDownloadAll}
          disabled={selectedPets?.length === 0 ? true : false}
        >
          Download All
        </button>
      </StyledButtonContainer>
    </StyledSelectedPetsContainer>
  );
};

export default SelectedPets;
