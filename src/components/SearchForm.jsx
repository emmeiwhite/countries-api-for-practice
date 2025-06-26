import { LuSearch } from 'react-icons/lu'
import { useCountries } from '../context/CountriesContext'

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useCountries()

  return (
    <form>
      <div className="border-1 border-gray-700 rounded-sm min-w-[200px] flex gap-4 justify-between items-center px-3 py-1">
        <span className="text-sm">
          <LuSearch />
        </span>

        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search for the country"
          className="outline-0"
        />
      </div>
    </form>
  )
}
