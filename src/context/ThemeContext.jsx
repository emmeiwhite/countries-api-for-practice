// Step-1: Create Context

import { useContext, useState } from 'react'
import { createContext } from 'react'

const ThemeContext = createContext()

// Step-2: Create Provider

export default function ThemeProvider({ children }) {
  const [mode, setMode] = useState('light')

  // Toggle Mode Functionality
  function handleMode() {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return <ThemeContext.Provider value={{ mode, handleMode }}>{children}</ThemeContext.Provider>
}

// Step-3: Custom Hook

export const useTheme = () => useContext(ThemeContext)
