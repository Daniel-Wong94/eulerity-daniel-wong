import { ReactNode, createContext } from "react";
import { Pet } from "../types/PetTypes";
import useFetchPets from "../hooks/useFetchPets";
import { v4 as uuidv4 } from "uuid";

type PetsContextProps = {
  children: ReactNode;
};

type PetsContextValue = {
  pets: Pet[] | null;
  loading: boolean;
  error?: any;
};

export const PetsContext = createContext<PetsContextValue>({
  pets: null,
  loading: true,
  error: undefined,
});

export const PetsContextProvider = ({ children }: PetsContextProps) => {
  const { pets, loading, error } = useFetchPets(
    "https://eulerity-hackathon.appspot.com/pets"
  );

  const petsWithId = pets?.map((pet) => ({ ...pet, id: uuidv4() })) || null;

  const value: PetsContextValue = {
    pets: petsWithId,
    loading,
    error,
  };

  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
};
