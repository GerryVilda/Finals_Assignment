import { useTheme } from '../context/ThemeContext'
import '../styles/ThemeSwitcher.css'

const THEME_ICONS = {
  light: '☀️',
  midnight: '🌙',
  emerald: '🌿'
}

const THEME_LABELS = {
  light: 'Light',
  midnight: 'Midnight',
  emerald: 'Emerald'
}

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-switcher"
      onClick={toggleTheme}
      aria-label={`Current theme: ${THEME_LABELS[theme]}. Click to change.`}
      title={`Theme: ${THEME_LABELS[theme]}`}
    >
      <span className="theme-icon">{THEME_ICONS[theme]}</span>
    </button>
  )
}
