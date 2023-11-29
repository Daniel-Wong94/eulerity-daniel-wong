import styled from "styled-components";
import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";
import { SelectedPetsContext } from "../context/SelectedPetsContext";
import { downloadPet } from "../utils/downloadPet";

const StyledSelectedPetsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }

  &:active {
    background-color: #17496b;
  }
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
      <span>Selected: {selectedPets?.length}</span>
      <StyledButtonContainer>
        <StyledButton
          onClick={() => clearAllPets()}
          disabled={selectedPets?.length === 0 ? true : false}
        >
          Clear All
        </StyledButton>
        <StyledButton
          onClick={handleDownloadAll}
          disabled={selectedPets?.length === 0 ? true : false}
        >
          Download All
        </StyledButton>
      </StyledButtonContainer>
    </StyledSelectedPetsContainer>
  );
};

export default SelectedPets;
