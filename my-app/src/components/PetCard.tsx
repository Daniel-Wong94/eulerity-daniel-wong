import React, { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { Pet } from "../types/PetTypes";
import { SelectedPetsContext } from "../context/SelectedPetsContext";

type PetCardProps = {
  pet: Pet;
};

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;

const Description = styled.p`
  font-size: 14px;
`;

const CreationDate = styled.span`
  font-size: 12px;
  color: #777;
  display: block;
  margin-top: 8px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 10px;
`;

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { addPet, removePet, isChecked } = useContext(SelectedPetsContext);

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;

    checked ? addPet(pet) : removePet(pet.id);
  };

  return (
    <CardContainer>
      <CardSegment>
        <Title>{pet.title}</Title>
        <Description>{pet.description}</Description>
        <CreationDate>Created on: {pet.created}</CreationDate>
        <Image src={pet.url} alt={pet.title} />
      </CardSegment>
      <CardSegment>
        <label>
          Add to Downloads
          <input
            type="checkbox"
            onChange={handleSelection}
            checked={isChecked(pet.id)}
          />
        </label>
      </CardSegment>
    </CardContainer>
  );
};

export default PetCard;
