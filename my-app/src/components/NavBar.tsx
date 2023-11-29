import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: rgb(188, 193, 186);
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const NavBar = () => {
  return (
    <StyledNav>
      <strong>petty</strong>images
    </StyledNav>
  );
};

export default NavBar;
