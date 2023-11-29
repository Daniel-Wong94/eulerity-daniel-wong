import styled from "styled-components";
import { NavBar, PetManager, SearchBar } from "./components";
import { PetsContextProvider } from "./context/PetsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import ErrorPage from "./routes/error-page";

const StyledApp = styled.div`
  background-color: rgb(242, 226, 210);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <StyledApp>
      <PetsContextProvider>
        <RouterProvider router={router} />
      </PetsContextProvider>
    </StyledApp>
  );
};

export default App;
