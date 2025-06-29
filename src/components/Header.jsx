import { LuMoon } from 'react-icons/lu'
import { LuSun } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

export default function Header() {
  const { mode, handleMode } = useTheme()

  return (
    <header className="bg-gray-600 dark:bg-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 flex justify-between py-4">
        <h1 className="text-xl text-white font-semibold">Where in the World?</h1>

        <div className="flex gap-5">
          <Link
            to="/"
            className="text-amber-400 dark:text-white hover:underline">
            Home
          </Link>
          <Link
            to="about"
            className="text-amber-400 dark:text-white hover:underline">
            About
          </Link>
        </div>
        <button
          className="text-white cursor-pointer text-2xl"
          onClick={handleMode}>
          {mode === 'light' ? <LuMoon /> : <LuSun />}
        </button>
      </div>
    </header>
  )
}
