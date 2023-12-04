import styled from "styled-components";

const StyledFooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 48px 24px;
  background-color: rgb(111, 68, 214);
  color: white;
`;

const StyledList = styled.div`
  & span {
    display: block;
    font-weight: 500;
    margin-bottom: 36px;
    text-transform: uppercase;
  }

  & ul li {
    font-weight: 100;
    list-style: none;
    padding: 6px 0;
  }
`;

export { StyledFooterContainer, StyledList };
