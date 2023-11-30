import styled from "styled-components";

const StyledSearchBar = styled.div`
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
  padding: 12px;
  font-size: 16px;
  width: 60%;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

export { StyledSearchBar, StyledFilter, StyledSearchInput, StyledButton };
