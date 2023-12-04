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
  const { clearAllPets, selectAllPets } = useContext(SelectedPetsContext);
  const { setSearchResults } = useContext(SearchResultsContext);

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

  const handleSearchPets = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      {/* <h1>Move the World</h1> */}
      <button onClick={selectAllPets}>Select All</button>
      <StyledSearchBar onSubmit={handleSearchPets}>
        <StyledSearchInput
          placeholder="Fuzzy search by title or description (pun intended)"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <StyledButton type="submit">Search</StyledButton>
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
