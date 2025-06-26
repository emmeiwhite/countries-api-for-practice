// Step-1: Create Context

import { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext()

// Step-2: Create Provider

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light')

  // Toggle Mode Functionality
  function handleMode() {
    if (mode === 'light') {
      setMode('')
    } else {
      setMode('light')
    }
  }

  /** --- When mode changes we'll add/remove dark class from the html tag, Perform side-effect */
  useEffect(() => {
    console.log(document.documentElement)
    // document.documentElement.classList.toggle('dark') // tailwindCSS special class 'dark'
    document.body.classList.toggle('dark')
  }, [mode])

  return <ThemeContext.Provider value={{ mode, handleMode }}>{children}</ThemeContext.Provider>
}

// Step-3: Custom Hook

export const useTheme = () => useContext(ThemeContext)
