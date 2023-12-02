import styled from "styled-components";

const StyledSearchBar = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 24px;
`;

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgb(250, 233, 205);
`;

const StyledSearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 60%;
`;

const StyledButton = styled.button`
  border: 1px solid black;
  background-color: white;
  text-transform: uppercase;
  border-radius: 4px;
  align-self: flex-start;
  padding: 12px 24px;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  &:disabled {
    cursor: default;
    background-color: white;
    color: #808080;
    border: 1px solid #808080;
  }
`;

export { StyledSearchBar, StyledFilter, StyledSearchInput, StyledButton };
