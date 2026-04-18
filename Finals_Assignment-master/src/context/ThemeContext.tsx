import { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'midnight' | 'emerald'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEMES: Theme[] = ['light', 'midnight', 'emerald']

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    return (saved && THEMES.includes(saved)) ? saved : 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme)
    const nextIndex = (currentIndex + 1) % THEMES.length
    setTheme(THEMES[nextIndex])
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
