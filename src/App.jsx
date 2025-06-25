import Footer from './components/Footer'
import Header from './components/Header'
import { useQuery } from '@tanstack/react-query'
import SearchForm from './components/SearchForm'
import SearchAndFilter from './components/SearchAndFilter'

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
      {/* <div className="max-w-6xl mx-auto px-6">
        <section className="py-8">
          {isLoading && <p>Loading recipes...</p>}
          {error && <p className="text-red-600">{error.message}</p>}
          {data?.recipes?.length > 0 && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.recipes.map(recipe => (
                <li
                  key={recipe.id}
                  className="border p-4 rounded shadow">
                  <h2 className="text-lg font-semibold">{recipe.name}</h2>
                  <p className="text-sm text-gray-600">{recipe.cuisine}</p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div> */}
      <Footer />
    </main>
  )
}

export default App
