import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: rgb(255, 255, 255);
  height: 4.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 400;
`;

export { StyledLink, StyledNav };
