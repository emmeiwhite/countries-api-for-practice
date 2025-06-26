import { createContext, useContext, useState } from 'react'

// Step-1: Create Context
const CountriesContext = createContext()

// Step-2: CreateProvider
export default function CountriesProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('')

  const contextValues = {
    searchTerm,
    setSearchTerm
  }
  return <CountriesContext.Provider value={contextValues}>{children}</CountriesContext.Provider>
}

// Step-3: Custom Hook
export const useCountries = () => useContext(CountriesContext)
