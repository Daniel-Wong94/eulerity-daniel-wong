import SearchInput from "./SearchInput";
import styled from "styled-components";
import SearchButton from "./SearchButton";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { PetsContext } from "../context/PetsContext";
import { SelectedPetsContext } from "../context/SelectedPetsContext";

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBar = () => {
  const [sort, setSort] = useState(true);
  const { sortByName } = useContext(PetsContext);
  const { clearAllPets } = useContext(SelectedPetsContext);

  const handleSort = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.checked);
  };

  useEffect(() => {
    clearAllPets();
    sortByName();
  }, [sort, sortByName, clearAllPets]);

  return (
    <>
      <StyledSearchBar>
        <SearchInput />
        <SearchButton />
      </StyledSearchBar>
      <StyledFilter>
        <label>
          Sort A-Z:{" "}
          <input type="checkbox" checked={sort} onChange={handleSort} />
        </label>
      </StyledFilter>
    </>
  );
};

export default SearchBar;
