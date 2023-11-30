import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Pet } from "../../types/PetTypes";
import { SelectedPetsContext } from "../../context/SelectedPetsContext";
import { Link } from "react-router-dom";
import {
  CardContainer,
  Title,
  Description,
  Image,
  StyledOverlay,
  StyledSelect,
} from "./PetCard.styles";

type PetCardProps = {
  pet: Pet;
};

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
