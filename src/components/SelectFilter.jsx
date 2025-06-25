import { useState } from 'react'

const options = [
  { id: 1, value: 'region' },
  { id: 2, value: 'country' },
  { id: 3, value: 'population' },
  { id: 4, value: 'capital' }
]

export default function SelectFilter() {
  const [filterOptions] = useState(options)

  return (
    <form>
      <div className="relative max-w-[220px]">
        <select className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:ring-1 ">
          {filterOptions.map(item => (
            <option
              key={item.id}
              value={item.value}>
              {item.value}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 20 20">
            <path d="M5.516 7.548l4.484 4.484 4.484-4.484-1.06-1.06L10 9.916 6.576 6.488z" />
          </svg>
        </div>
      </div>
    </form>
  )
}
