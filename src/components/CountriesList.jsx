export default function CountriesList({ isLoading, error, data }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
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
    </div>
  )
}
