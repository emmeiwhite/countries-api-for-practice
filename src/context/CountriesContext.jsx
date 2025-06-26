import { createContext, useContext } from 'react'

// Step-1: Create Context
const CountriesContext = createContext()

// Step-2: CreateProvider
export default function CountriesProvider({ children }) {
  return <CountriesContext.Provider>{children}</CountriesContext.Provider>
}

// Step-3: Custom Hook
export const useCountries = () => useContext(CountriesContext)
