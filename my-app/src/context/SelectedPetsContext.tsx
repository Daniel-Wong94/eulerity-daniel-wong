import { ReactNode, createContext, useState } from "react";
import { Pet } from "../types/PetTypes";

type SelectedPetsContextProp = {
  children: ReactNode;
};

type SelectedPetsContextValue = {
  selectedPets: Pet[] | null;
  addPet: (pet: Pet) => void;
  removePet: (petId: string) => void;
  clearAllPets: () => void;
  isChecked: (petId: string) => boolean;
};

export const SelectedPetsContext = createContext<SelectedPetsContextValue>({
  selectedPets: null,
  addPet: () => {},
  removePet: () => {},
  clearAllPets: () => {},
  isChecked: () => false,
});

export const SelectedPetsContextProvider = ({
  children,
}: SelectedPetsContextProp) => {
  const [selectedPets, setSelectedPets] = useState<Pet[]>([]);

  // actions for selected pets
  const addPet = (pet: Pet) => {
    setSelectedPets((prev: Pet[]) => [...prev, pet]);
  };

  const removePet = (petId: string) => {
    setSelectedPets((prev: Pet[]) => prev.filter((pet) => pet.id !== petId));
  };

  const clearAllPets = () => {
    setSelectedPets([]);
    console.log("SELECTED", selectedPets);
  };

  const isChecked = (petId: string) => {
    return selectedPets.some((pet) => pet.id === petId);
  };

  const value: SelectedPetsContextValue = {
    selectedPets,
    addPet,
    removePet,
    clearAllPets,
    isChecked,
  };

  return (
    <SelectedPetsContext.Provider value={value}>
      {children}
    </SelectedPetsContext.Provider>
  );
};
