import PetFeed from "./PetFeed";
import styled from "styled-components";

const StyledPetManager = styled.div`
  margin-top: 24px;
`;

const PetManager = () => {
  return (
    <StyledPetManager>
      <PetFeed />
    </StyledPetManager>
  );
};

export default PetManager;
