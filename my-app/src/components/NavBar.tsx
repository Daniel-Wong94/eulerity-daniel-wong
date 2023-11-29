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

const NavBar = () => {
  return (
    <StyledNav>
      <PettyImagesLogo />
      <Link to={"/about"}>About</Link>
    </StyledNav>
  );
};

export default NavBar;
