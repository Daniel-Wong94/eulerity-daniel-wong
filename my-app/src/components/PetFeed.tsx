import { useContext } from "react";
import { PetsContext } from "../context/PetsContext";

const PetFeed = () => {
  const { pets, loading, error } = useContext(PetsContext);

  return (
    <div>
      PetFeed
      {pets?.map((pet, idx) => (
        <div key={idx}>{pet.title}</div>
      ))}
    </div>
  );
};

export default PetFeed;
