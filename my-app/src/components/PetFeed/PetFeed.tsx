import React, { useContext } from "react";
import { PetsContext } from "../../context/PetsContext";
import PetCard from "../PetCard/PetCard";
import Loading from "../Loading/Loading";
import { SearchResultsContext } from "../../context/SearchResultsContext";
import { StyledPetFeed } from "./PetFeed.styles";
import NoPetsFound from "../NoPetsFound/NoPetsFound";

type PetFeedProps = {
  searchTerm: string;
};

const PetFeed: React.FC<PetFeedProps> = ({ searchTerm }) => {
  const { pets, loading, error } = useContext(PetsContext);
  const { searchResults } = useContext(SearchResultsContext);

  if (loading) return <Loading message={"Loading pets..."} />;
  if (searchResults && searchResults.length === 0) return <NoPetsFound />;
  if (error) return <div>Error fetching pets!</div>;

  return (
    <StyledPetFeed>
      {!searchResults
        ? pets?.map((pet) => <PetCard key={pet.id} pet={pet} />)
        : searchResults.map((pet) => <PetCard key={pet.id} pet={pet} />)}
    </StyledPetFeed>
  );
};

export default PetFeed;
