import React from "react";
import styled from "styled-components";

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

const SearchButton = () => {
  return <StyledButton>Search</StyledButton>;
};

export default SearchButton;
