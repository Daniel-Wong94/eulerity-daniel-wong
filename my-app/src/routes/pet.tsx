import styled from "styled-components";
import { NavBar, PetContainer } from "../components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PetsContext } from "../context";

const StyledPetsRoute = styled.div`
  height: 100vh;
`;

export const PetRoute = () => {
  const { petId } = useParams();
  const { pets } = useContext(PetsContext);
  const pet = pets?.find((p) => p.title === petId);

  return (
    <StyledPetsRoute>
      <NavBar />
      <PetContainer pet={pet ?? null} />
    </StyledPetsRoute>
  );
};
