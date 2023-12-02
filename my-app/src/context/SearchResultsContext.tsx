import {
  ReactNode,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { Pet } from "../types/PetTypes";

type SearchResultsContextProp = {
  children: ReactNode;
};

type SearchResultsContextValue = {
  searchResults: Pet[] | null;
  loading: boolean;
  error?: any;
  setSearchResults: Dispatch<SetStateAction<Pet[] | null>>;
};

export const SearchResultsContext = createContext<SearchResultsContextValue>({
  searchResults: null,
  loading: false,
  setSearchResults: () => {},
});

export const SearchResultsContextProvider: React.FC<
  SearchResultsContextProp
> = ({ children }) => {
  /**
   * @summary This context will store the search results that are obtained from fuzzy search
   */
  const [searchResults, setSearchResults] = useState<Pet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(undefined);

  const initialValue: SearchResultsContextValue = {
    searchResults,
    loading,
    error,
    setSearchResults,
  };

  return (
    <SearchResultsContext.Provider value={initialValue}>
      {children}
    </SearchResultsContext.Provider>
  );
};
