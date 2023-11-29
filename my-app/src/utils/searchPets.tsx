import Fuse from "fuse.js";
import { Pet } from "../types/PetTypes";

type FuseOptions = {
  keys: string[];
  threshold: number;
};

const options: FuseOptions = {
  keys: ["title", "description"],
  threshold: 0.3,
};

export const searchPets = (pets: Pet[], searchTerm: string): Pet[] => {
  const fuse = new Fuse(pets, options);
  const result = fuse.search(searchTerm).map((result) => result.item);

  return result;
};
