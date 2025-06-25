import Footer from './components/Footer'
import Header from './components/Header'
import { useQuery } from '@tanstack/react-query'
import SearchAndFilter from './components/SearchAndFilter'
import CountriesList from './components/CountriesList'

const url = 'https://dummyjson.com/recipes'

const fetchRecipes = async () => {
  const res = await fetch(url)
  if (!res.ok) throw new Error('Failed to fetch recipes')
  return res.json()
}

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes
  })
  return (
    <main>
      <Header />

      <SearchAndFilter />

      <CountriesList
        isLoading={isLoading}
        error={error}
        data={data}
      />
      <Footer />
    </main>
  )
}

export default App
