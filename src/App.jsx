import Footer from './components/Footer'
import Header from './components/Header'
// import { useQuery } from '@tanstack/react-query'
import SearchAndFilter from './components/SearchAndFilter'
import CountriesList from './components/CountriesList'

function App() {
  return (
    <main className="bg-white-300 dark:bg-gray-900 dark:text-white">
      <Header />

      <SearchAndFilter />

      <CountriesList />

      <Footer />
    </main>
  )
}

export default App
