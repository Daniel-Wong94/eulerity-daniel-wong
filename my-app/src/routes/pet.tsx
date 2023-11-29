import styled from "styled-components";
import { NavBar } from "../components";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { PetsContext } from "../context";
import { downloadPet } from "../utils/downloadPet";

const StyledPetsRoute = styled.div`
  height: 100vh;
`;

export const Pet = () => {
  const { petId } = useParams();
  const { pets } = useContext(PetsContext);
  const pet = pets?.find((p) => p.title === petId);

  return (
    <StyledPetsRoute>
      <NavBar />
      <Link to="/">Go Back</Link>
      {pet ? (
        <div>
          <img src={pet?.url} alt={pet?.description} height={300} />
          <h1>{pet?.title}</h1>
          <p>{pet?.created}</p>
          <p>{pet?.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {pet && <button onClick={() => downloadPet(pet)}>Download Image</button>}
    </StyledPetsRoute>
  );
};
