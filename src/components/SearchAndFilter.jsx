import SearchForm from './SearchForm'
import SelectFilter from './SelectFilter'

export default function SearchAndFilter() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 flex justify-between py-4">
        <SearchForm />
        <SelectFilter />
      </div>
    </div>
  )
}
