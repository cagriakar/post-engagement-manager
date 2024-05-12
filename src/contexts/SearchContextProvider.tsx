import type { ReactNode } from 'react';
import { createContext, useContext, useMemo, useState } from 'react';

interface SearchContext {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchContext = createContext<SearchContext>({
  searchTerm: '',
  setSearchTerm: () => console.error('no search-context provider')
} as SearchContext);

interface SearchContextProviderProps {
  children: ReactNode;
}

export const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const providerValue = useMemo(() => ({ searchTerm, setSearchTerm }), [searchTerm, setSearchTerm]);

  return <SearchContext.Provider value={providerValue}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext<SearchContext>(SearchContext);
