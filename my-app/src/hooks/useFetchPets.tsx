import { useState, useEffect } from "react";
import { Pet } from "../types/PetTypes";

const useFetchPets = (url: string) => {
  const [pets, setPets] = useState<Pet[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(url);
        const pets = await response.json();

        pets.sort((a: Pet, b: Pet) =>
          a["title"].toLowerCase() > b["title"].toLowerCase() ? 1 : -1
        );

        setPets(pets);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
    // this shouldn't refetch when resorting
  }, [url]);

  return { pets, setPets, loading, error };
};

export default useFetchPets;
