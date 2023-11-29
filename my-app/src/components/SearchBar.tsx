import SearchInput from "./SearchInput";
import styled from "styled-components";
import SearchButton from "./SearchButton";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchInput />
      <SearchButton />
    </StyledSearchBar>
  );
};

export default SearchBar;
