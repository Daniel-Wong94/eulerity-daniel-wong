import styled from "styled-components";
import { NavBar, PetFeed, SearchBar, SelectedPets } from "./components";
import { PetsContextProvider } from "./context/PetsContext";

const StyledApp = styled.div`
  background-color: rgb(132, 192, 198);
  height: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <PetsContextProvider>
        <NavBar />
        <SearchBar />
        <div>
          <PetFeed />
          <SelectedPets />
        </div>
      </PetsContextProvider>
    </StyledApp>
  );
};

export default App;
