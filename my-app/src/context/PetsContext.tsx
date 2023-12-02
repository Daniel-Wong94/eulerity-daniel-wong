import { ReactNode, createContext, useCallback } from "react";
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
  sortByName: () => void;
};

export const PetsContext = createContext<PetsContextValue>({
  pets: null,
  loading: true,
  error: undefined,
  sortByName: () => {},
});

export const PetsContextProvider = ({ children }: PetsContextProps) => {
  /**
   * @summary This context will store the pets returned from /GET pets
   */
  const { pets, setPets, loading, error } = useFetchPets(
    "https://eulerity-hackathon.appspot.com/pets"
  );

  const petsWithId = pets?.map((pet) => ({ ...pet, id: uuidv4() })) || null;

  // useCallback to prevent infinite useEffect in SearchBar.tsx
  const sortByName = useCallback(() => {
    setPets((prev) => [...(prev ?? [])].reverse());
  }, [setPets]);

  const value: PetsContextValue = {
    pets: petsWithId,
    loading,
    error,
    sortByName,
  };

  return <PetsContext.Provider value={value}>{children}</PetsContext.Provider>;
};
