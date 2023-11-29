import styled from "styled-components";
import PettyImagesLogo from "../elements/PettyImagesLogo";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: rgb(255, 255, 255);
  height: 2.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 400;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <PettyImagesLogo />
      <StyledLink to={"/about"}>About</StyledLink>
    </StyledNav>
  );
};

export default NavBar;
