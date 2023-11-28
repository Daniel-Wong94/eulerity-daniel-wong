import { useEffect, useState } from "react";
import { PetCard } from "./components";
import { Pet } from "./types/PetTypes";
import useFetchPets from "./hooks/useFetchPets";

const App = () => {
  const { pets, loading, error } = useFetchPets(
    "https://eulerity-hackathon.appspot.com/pets"
  );

  if (loading) return <p>Loading pets...</p>;
  if (error) return <p>Error fetching pets! Try Refreshing</p>;

  return (
    <div className="App">
      Pets
      {pets?.map((pet) => (
        <PetCard pet={pet} />
      ))}
      {/* Search Bar */}
      {/* Pet Feed */}
      {/* Selected Pets */}
    </div>
  );
};

export default App;
