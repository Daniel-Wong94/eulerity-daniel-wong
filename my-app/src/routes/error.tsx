import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const StyledErrorPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Error = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <StyledErrorPage id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </StyledErrorPage>
  );
};
