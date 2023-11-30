import React, { useContext } from "react";
import { PetsContext } from "../../context/PetsContext";
import PetCard from "../PetCard/PetCard";
import styled from "styled-components";
import { SearchResultsContext } from "../../context/SearchResultsContext";
import { StyledPetFeed } from "./PetFeed.styles";

type PetFeedProps = {
  searchTerm: string;
};

const PetFeed: React.FC<PetFeedProps> = ({ searchTerm }) => {
  const { pets, loading, error } = useContext(PetsContext);
  const { searchResults } = useContext(SearchResultsContext);

  return (
    <StyledPetFeed>
      {loading && <div>Loading Pets...</div>}
      {error && <div>Error fetching pets!</div>}
      {searchResults && searchResults.length === 0 && <div>No Pets Found!</div>}
      {!searchResults
        ? pets?.map((pet) => <PetCard key={pet.id} pet={pet} />)
        : searchResults.map((pet) => <PetCard key={pet.id} pet={pet} />)}
    </StyledPetFeed>
  );
};

export default PetFeed;
