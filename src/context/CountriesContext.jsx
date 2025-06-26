import { createContext, useContext, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

const url =
  'https://restcountries.com/v2/all?fields=name,region,subregion,capital,flag,population,languages,currencies'

const fetchCountries = async () => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch recipes')
  return res.json()
}

// Step-1: Create Context
const CountriesContext = createContext()

// Step-2: CreateProvider
export default function CountriesProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('')
  const { isLoading, error, data } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries
  })

  const contextValues = {
    searchTerm,
    setSearchTerm,
    isLoading,
    error,
    data
  }

  return <CountriesContext.Provider value={contextValues}>{children}</CountriesContext.Provider>
}

// Step-3: Custom Hook
export const useCountries = () => useContext(CountriesContext)
