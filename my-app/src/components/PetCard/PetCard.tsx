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
import { PetsContext } from "../../context";

type PetCardProps = {
  pet: Pet;
};

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const { addPet, removePet, isChecked, selectedPets } =
    useContext(SelectedPetsContext);
  const { pets } = useContext(PetsContext);
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setIsSelected((prev) => !prev);
  };

  // keep selected pets in sync with checkbox
  useEffect(() => {
    if (selectedPets?.length === pets?.length || !isSelected) {
      removePet(pet.id);
    } else {
      addPet(pet);
    }
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
