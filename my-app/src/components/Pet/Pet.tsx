import { Pet } from "../../types/PetTypes";
import { downloadPet } from "../../utils/downloadPet";
import {
  StyledPetContainer,
  StyledBackButton,
  StyledPetImage,
  StyledPetInfo,
  StyledDownloadButton,
} from "./Pet.styles";

const PetContainer = ({ pet }: { pet: Pet | null }) => {
  if (!pet) return <div>Loading...</div>;

  return (
    <StyledPetContainer>
      <StyledBackButton to="/">View all</StyledBackButton>
      <StyledPetImage $backgroundImage={pet?.url}>
        <img src={pet?.url} alt={pet?.description} />
      </StyledPetImage>
      <StyledPetInfo>
        <h1>{pet?.title}</h1>
        <div className="description">
          <p>{pet?.created}</p>
          <p>{pet?.description}</p>
        </div>
        {pet && (
          <StyledDownloadButton onClick={() => downloadPet(pet)}>
            Download Image
          </StyledDownloadButton>
        )}
      </StyledPetInfo>
    </StyledPetContainer>
  );
};

export default PetContainer;
