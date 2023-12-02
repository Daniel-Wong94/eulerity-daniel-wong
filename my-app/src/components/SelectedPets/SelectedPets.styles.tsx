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

export { StyledSelectedPetsContainer, StyledButtonContainer, StyledButton };
