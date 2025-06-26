import Footer from './components/Footer'
import Header from './components/Header'
import { useQuery } from '@tanstack/react-query'
import SearchAndFilter from './components/SearchAndFilter'
import CountriesList from './components/CountriesList'
import { useEffect } from 'react'
import { useTheme } from './context/ThemeContext'

const url = 'https://restcountries.com/v2/all?fields=name,region,capital,flag,population'

const fetchCountries = async () => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch recipes')
  return res.json()
}

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries
  })

  return (
    <main className="bg-white-300 dark:bg-gray-900 dark:text-white">
      <Header />

      <SearchAndFilter />

      <CountriesList
        isLoading={isLoading}
        error={error}
        countriesData={data}
      />

      <Footer />
    </main>
  )
}

export default App
