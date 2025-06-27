import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

async function fetchCountry(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error('Failed to fetch the country')
  const data = await response.json()
  console.log(data)

  return data[0]
}
export default function CountryDetail() {
  const { name } = useParams()
  // API EndPoint: Backend Developers share the end-point
  const url = `https://restcountries.com/v2/name/${name}?fullText=true`

  const [isLoading, error, data] = useQuery({
    queryKey: ['country', name],
    queryFn: () => fetchCountry(url)
  })

  if (isLoading) return <div className="max-w-6xl mx-auto px-6 py-6">Loading country data...</div>

  if (error) return <div className="max-w-6xl mx-auto px-6 py-6 text-red-600">{error.message}</div>

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h1 className="my-5 text-2xl font-bold">
        About <span className="text-blue-400">{name}</span>
      </h1>

      <p>Details about this country</p>
    </div>
  )
}
