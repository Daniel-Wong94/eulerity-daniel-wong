import { useContext } from "react";
import { PetsContext, SelectedPetsContext } from "../../context";
import { downloadPet } from "../../utils/downloadPet";
import {
  StyledSelectedPetsContainer,
  StyledButtonContainer,
  StyledButton,
} from "./SelectedPets.styles";

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
