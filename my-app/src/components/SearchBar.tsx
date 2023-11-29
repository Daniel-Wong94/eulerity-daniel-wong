import styled from "styled-components";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { PetsContext } from "../context/PetsContext";
import { SelectedPetsContext } from "../context/SelectedPetsContext";
import SelectedPets from "./SelectedPets";
import useFetchPets from "../hooks/useFetchPets";
import { searchPets } from "../utils/searchPets";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  margin-bottom: 12px;
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

type SearchBarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const [sort, setSort] = useState(true);
  const { sortByName } = useContext(PetsContext);
  const { clearAllPets } = useContext(SelectedPetsContext);
  const { pets, setPets } = useFetchPets(
    "https://eulerity-hackathon.appspot.com/pets"
  );

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
    if (pets) {
      const searchResults = searchPets(pets, searchTerm);
      setPets(searchResults);
    }
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchInput
          placeholder="Search by title or description"
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
