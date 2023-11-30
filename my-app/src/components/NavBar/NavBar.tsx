import PettyImagesLogo from "../../elements/PettyImagesLogo";
import { StyledLink, StyledNav } from "./NavBar.styles";

const NavBar = () => {
  return (
    <StyledNav>
      <PettyImagesLogo />
      <StyledLink to={"/about"}>About</StyledLink>
    </StyledNav>
  );
};

export default NavBar;
