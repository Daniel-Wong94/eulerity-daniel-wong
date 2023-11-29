import styled from "styled-components";

const StyledSearchInput = styled.input`
  padding: 8px;
  font-size: 16px;
  width: 60%;
`;

const SearchInput = () => {
  return <StyledSearchInput placeholder="Search by title or description" />;
};

export default SearchInput;
