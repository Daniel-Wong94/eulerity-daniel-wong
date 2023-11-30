import { NavBar, SearchBar, PetFeed } from "../components";
import { SearchResultsContextProvider } from "../context/SearchResultsContext";
import { SelectedPetsContextProvider } from "../context/SelectedPetsContext";
import { useState } from "react";

export const Root = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <NavBar />
      <SelectedPetsContextProvider>
        <SearchResultsContextProvider>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <PetFeed searchTerm={searchTerm} />
        </SearchResultsContextProvider>
      </SelectedPetsContextProvider>
    </>
  );
};
