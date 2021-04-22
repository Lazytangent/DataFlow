import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();
const useSearch = () => useContext(SearchContext);

const SearchProvider = ({ children }) => {
  const [queryString, setQueryString] = useState('');

  return (
    <SearchContext.Provider value={{ queryString, setQueryString }}>
      { children }
    </SearchContext.Provider>
  );
};

export { SearchProvider as default, useSearch };
