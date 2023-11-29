import { NavBar, SearchBar, PetManager } from "../components";
import { SelectedPetsContextProvider } from "../context/SelectedPetsContext";

export const Root = () => {
  return (
    <>
      <NavBar />
      <SelectedPetsContextProvider>
        <SearchBar />
        <PetManager />
      </SelectedPetsContextProvider>
    </>
  );
};
