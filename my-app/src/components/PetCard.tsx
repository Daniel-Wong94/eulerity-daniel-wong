import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { Pet } from "../types/PetTypes";
import { SelectedPetsContext } from "../context/SelectedPetsContext";
import { downloadPet } from "../utils/downloadPet";

type PetCardProps = {
  pet: Pet;
};

// const CardContainer = styled.div`
//   border: 1px solid #ddd;
//   padding: 12px;
//   margin-bottom: 20px;
//   border-radius: 8px;
//   width: 300px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
`;

const CardSegment = styled.div`
  display: flex;
  flex-direction: column;

  & label {
    margin-top: 12px;
    align-self: flex-end;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  margin-left: 12px;
`;

const Description = styled.p`
  font-size: 14px;
  margin-left: 12px;
`;

const CreationDate = styled.span`
  font-size: 12px;
  color: #777;
  display: block;
  margin-top: 8px;
`;

// const Image = styled.img`
//   max-width: 100%;
//   height: auto;
//   margin-top: 10px;
// `;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  opacity: 0;
  transform: opacity 0.3s ease;
  pointer-events: none;

  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { addPet, removePet, isChecked } = useContext(SelectedPetsContext);

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    checked ? addPet(pet) : removePet(pet.id);
  };

  return (
    <CardContainer>
      <Image src={pet.url} />
      <StyledOverlay>
        <Title>{pet.title}</Title>
        <label>
          Add to Downloads
          <input
            type="checkbox"
            onChange={handleSelection}
            checked={isChecked(pet.id)}
          />
        </label>
        <Description>{pet.description}</Description>
        {/* <CreationDate>Created on: {pet.created}</CreationDate> */}
      </StyledOverlay>
      {/* <CardSegment>
        <Image src={pet.url} alt={pet.title} />
      </CardSegment> */}
      {/* <CardSegment>
        <button onClick={() => downloadPet(pet)}>Download</button>
        <label>
          Add to Downloads
          <input
            type="checkbox"
            onChange={handleSelection}
            checked={isChecked(pet.id)}
          />
        </label>
      </CardSegment> */}
    </CardContainer>
  );
};

export default PetCard;
