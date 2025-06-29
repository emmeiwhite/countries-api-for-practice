import { useCountries } from '../context/CountriesContext'
import Skeleton from './Skeleton'
import { Link } from 'react-router-dom'

export default function CountriesList() {
  const { isLoading, error, filteredCountries } = useCountries()

  // No more props, direct access to the context now.

  if (isLoading)
    return (
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 30 }).map((_, index) => {
            return <Skeleton key={index} />
          })}
        </div>
      </div>
    )

  if (error)
    return (
      <div className="max-w-6xl mx-auto px-6 py-8 min-h-[700px]">
        <p className="text-red-700 font-bold text-2xl">{error.message}</p>
      </div>
    )

  console.log('FILTERED_COUNTRIES:')
  console.log(filteredCountries)
  return (
    <div className="max-w-6xl mx-auto px-6">
      <section className="py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredCountries.map(country => (
            <Link to={`country/${country.name}`}>
              <div
                key={country.name}
                className="border rounded p-4">
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-16 h-10 mb-2"
                />
                <h2 className="font-bold">{country.name}</h2>
                <p>{country.region}</p>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
