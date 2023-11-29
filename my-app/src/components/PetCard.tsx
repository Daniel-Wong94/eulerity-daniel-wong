import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Pet } from "../types/PetTypes";
import { SelectedPetsContext } from "../context/SelectedPetsContext";
import { Link } from "react-router-dom";

type PetCardProps = {
  pet: Pet;
};

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 100%;
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

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.1);
  }
`;

const StyledOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  opacity: 0;
  transform: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  input {
    align-self: flex-end;
    justify-self: flex-start;
  }
`;

const StyledSelect = styled.input`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  margin-bottom: 8px;
  margin-left: 12px;
`;

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { addPet, removePet, isChecked } = useContext(SelectedPetsContext);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSelected((prev) => !prev);
  };

  useEffect(() => {
    isSelected ? addPet(pet) : removePet(pet.id);
  }, [isSelected, pet, addPet, removePet]);

  return (
    <CardContainer>
      <StyledSelect
        type="checkbox"
        onChange={handleSelection}
        checked={isChecked(pet.id)}
      />
      <Link to={`/${pet.title}`}>
        <Image src={pet.url} alt={pet.description} />
        <StyledOverlay>
          <Title>{pet.title}</Title>
          <Description>{pet.description}</Description>
        </StyledOverlay>
      </Link>
    </CardContainer>
  );
};

export default PetCard;
