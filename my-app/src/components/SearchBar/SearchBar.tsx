import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  PetsContext,
  SelectedPetsContext,
  SearchResultsContext,
} from "../../context";
import SelectedPets from "../SelectedPets/SelectedPets";
import { searchPets } from "../../utils/searchPets";
import {
  StyledSearchBar,
  StyledFilter,
  StyledSearchInput,
  StyledButton,
} from "./SearchBar.styles";

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const [sort, setSort] = useState(true);
  const { pets, sortByName } = useContext(PetsContext);
  const { clearAllPets } = useContext(SelectedPetsContext);
  const { setSearchResults, searchResults } = useContext(SearchResultsContext);

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.checked);
  };

  useEffect(() => {
    clearAllPets();
    sortByName();
  }, [sort, sortByName, clearAllPets]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchPets = () => {
    if (pets?.length) {
      const results = searchPets(pets, searchTerm);
      if (searchTerm === "") {
        setSearchResults(null);
      } else {
        setSearchResults(results);
      }
    }
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchInput
          placeholder="Fuzzy search by title or description (pun intended)"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <StyledButton onClick={handleSearchPets}>Search</StyledButton>
      </StyledSearchBar>
      <StyledFilter>
        <label>
          Sort A-Z:{" "}
          <input type="checkbox" checked={sort} onChange={handleSort} />
        </label>
        <SelectedPets />
      </StyledFilter>
    </>
  );
};

export default SearchBar;
