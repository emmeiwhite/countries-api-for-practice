export default function Footer() {
  return (
    <header className="bg-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex justify-between py-4">
        <h1 className="text-sm text-white font-semibold">
          &copy; Copyright {new Date().getFullYear()}
        </h1>
      </div>
    </header>
  )
}
