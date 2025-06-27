import { useQuery } from '@tanstack/react-query'
import { useParams, useNavigate } from 'react-router-dom'

async function fetchCountry(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Failed to fetch the country')
  const data = await response.json()
  return data[0]
}

export default function CountryDetail() {
  const { name } = useParams()
  const navigate = useNavigate()
  const url = `https://restcountries.com/v2/name/${name}?fullText=true`

  const {
    isLoading,
    error,
    data: country
  } = useQuery({
    queryKey: ['country', name],
    queryFn: () => fetchCountry(url)
  })

  if (isLoading) return <div className="max-w-6xl mx-auto px-6 py-6">Loading country data...</div>

  if (error) return <div className="max-w-6xl mx-auto px-6 py-6 text-red-600">{error.message}</div>

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-500 hover:underline flex items-center gap-2 mb-6">
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="w-full max-w-md h-auto rounded"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{country.name}</h2>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')}
          </p>
          <p>
            <strong>Currencies:</strong> {country.currencies.map(cur => cur.name).join(', ')}
          </p>
        </div>
      </div>
    </div>
  )
}
