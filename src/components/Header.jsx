import { useState } from 'react'
import { LuMoon } from 'react-icons/lu'
import { LuSun } from 'react-icons/lu'

export default function Header() {
  const [isDark, setIsDark] = useState(false)

  function handleLightDark() {
    console.log('handleDarkLight')
    setIsDark(!isDark)
  }
  return (
    <header className="bg-gray-600">
      <div className="max-w-6xl mx-auto px-6 flex justify-between py-4">
        <h1 className="text-xl text-white font-semibold">Where in the World?</h1>

        <button
          className="text-white cursor-pointer text-2xl"
          onClick={handleLightDark}>
          {isDark ? <LuSun /> : <LuMoon />}
        </button>
      </div>
    </header>
  )
}
