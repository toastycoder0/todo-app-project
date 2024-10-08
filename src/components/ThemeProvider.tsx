import { type ReactNode, type FC, useEffect, useState } from 'react'
import { THEME_VALUES, DARK_MEDIA_QUERY } from '../constants'

interface ThemeProviderProps {
  children?: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === THEME_VALUES.dark ||
      (!('theme' in localStorage) && window.matchMedia(DARK_MEDIA_QUERY).matches)
    ) {
      document.documentElement.classList.add(THEME_VALUES.dark)
      localStorage.theme = THEME_VALUES.dark
    } else {
      document.documentElement.classList.remove(THEME_VALUES.dark)
      localStorage.theme = THEME_VALUES.light
    }

    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return <>{children}</>
}
