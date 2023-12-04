import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { Pet } from "../types/PetTypes";
import { PetsContext } from "./PetsContext";

type SelectedPetsContextProp = {
  children: ReactNode;
};

type SelectedPetsContextValue = {
  selectedPets: Pet[] | null;
  addPet: (pet: Pet) => void;
  removePet: (petId: string) => void;
  clearAllPets: () => void;
  selectAllPets: () => void;
  isChecked: (petId: string) => boolean;
};

export const SelectedPetsContext = createContext<SelectedPetsContextValue>({
  selectedPets: null,
  addPet: () => {},
  removePet: () => {},
  clearAllPets: () => {},
  selectAllPets: () => {},
  isChecked: () => false,
});

export const SelectedPetsContextProvider = ({
  children,
}: SelectedPetsContextProp) => {
  /**
   * @summary This context will store the user's selected pets for multi-downloading
   */
  const [selectedPets, setSelectedPets] = useState<Pet[]>([]);
  const { pets } = useContext(PetsContext);

  // actions for selected pets
  const addPet = useCallback((pet: Pet) => {
    setSelectedPets((prev: Pet[]) => [...prev, pet]);
  }, []);

  const removePet = useCallback((petId: string) => {
    setSelectedPets((prev: Pet[]) => prev.filter((pet) => pet.id !== petId));
  }, []);

  const clearAllPets = useCallback(() => {
    setSelectedPets([]);
  }, []);

  const selectAllPets = useCallback(() => {
    setSelectedPets([...(pets ?? [])]);
  }, [pets]);

  const isChecked = (petId: string) => {
    return selectedPets.some((pet) => pet.id === petId);
  };

  const value: SelectedPetsContextValue = {
    selectedPets,
    addPet,
    removePet,
    selectAllPets,
    clearAllPets,
    isChecked,
  };

  return (
    <SelectedPetsContext.Provider value={value}>
      {children}
    </SelectedPetsContext.Provider>
  );
};
