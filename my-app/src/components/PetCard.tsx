import { Pet } from "../types/PetTypes";
import styled from "styled-components";

const StyledImageCard = styled.div`
  width: 200px;
  height: 700px;
`;

const PetCard = ({ pet }: { pet: Pet }) => {
  return (
    <div>
      <h1>{pet.title}</h1>
      <p>{pet.description}</p>
      <StyledImageCard>
        <img src={pet.url} />
      </StyledImageCard>
    </div>
  );
};

export default PetCard;
