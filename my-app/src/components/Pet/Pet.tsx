import styled from "styled-components";
import { Link } from "react-router-dom";
import { Pet } from "../../types/PetTypes";
import { downloadPet } from "../../utils/downloadPet";

const StyledPetContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBackButton = styled(Link)`
  padding: 10px 24px;
  font-size: 16px;
`;

const StyledPetInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PetContainer = ({ pet }: { pet: Pet | null }) => {
  if (!pet) return <div>Loading...</div>;

  return (
    <StyledPetContainer>
      <StyledBackButton to="/">Go Back</StyledBackButton>
      <StyledPetInfoContainer>
        <div>
          <img src={pet?.url} alt={pet?.description} height={300} />
        </div>
        <div>
          <h1>{pet?.title}</h1>
          <p>{pet?.created}</p>
          <p>{pet?.description}</p>
          {pet && (
            <button onClick={() => downloadPet(pet)}>Download Image</button>
          )}
        </div>
      </StyledPetInfoContainer>
    </StyledPetContainer>
  );
};

export default PetContainer;
