import styled from "styled-components";
import { PetsContextProvider } from "./context/PetsContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root, AboutRoute, Error, PetRoute } from "./routes";

const StyledApp = styled.div`
  background-color: rgb(250, 233, 205);
  display: flex;
  flex-direction: column;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
  {
    path: "/:petId",
    element: <PetRoute />,
  },
  {
    path: "/about",
    element: <AboutRoute />,
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
