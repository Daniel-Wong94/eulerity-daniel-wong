import React from "react";
import styled from "styled-components";

const StyledSearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const SearchButton = () => {
  return <StyledSearchButton>Search</StyledSearchButton>;
};

export default SearchButton;
