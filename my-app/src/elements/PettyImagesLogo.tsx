import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: 100;
`;

const PettyImagesLogo = () => {
  return (
    <StyledLogo to={"/"}>
      <strong>petty</strong>images
    </StyledLogo>
  );
};

export default PettyImagesLogo;
