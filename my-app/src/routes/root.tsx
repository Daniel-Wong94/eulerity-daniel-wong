import { NavBar, SearchBar, PetFeed } from "../components";
import { SelectedPetsContextProvider } from "../context/SelectedPetsContext";
import { useState } from "react";

export const Root = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavBar />
      <SelectedPetsContextProvider>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <PetFeed searchTerm={searchTerm} />
      </SelectedPetsContextProvider>
    </>
  );
};
