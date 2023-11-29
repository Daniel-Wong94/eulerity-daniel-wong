import styled from "styled-components";
import { NavBar, PetManager, SearchBar } from "./components";
import { PetsContextProvider } from "./context/PetsContext";

const StyledApp = styled.div`
  background-color: rgb(242, 226, 210);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <StyledApp>
      <PetsContextProvider>
        <NavBar />
        <SearchBar />
        <PetManager />
      </PetsContextProvider>
    </StyledApp>
  );
};

export default App;
