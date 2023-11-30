import styled from "styled-components";

const StyledSelectedPetsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: sticky;
  top: 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledButton = styled.button`
  padding: 8px 12px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: default;
  }

  &:active {
    background-color: #17496b;
  }
`;

export { StyledSelectedPetsContainer, StyledButtonContainer, StyledButton };
