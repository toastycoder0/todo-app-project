export const THEME_VALUES = {
  dark: 'dark',
  light: 'light'
}

export const DARK_MEDIA_QUERY = '(prefers-color-scheme: dark)'

export const VIEWS = {
  all: { name: 'All', key: 'all', accept: [true, false] },
  active: { name: 'Active', key: 'active', accept: [false] },
  completed: { name: 'Completed', key: 'completed', accept: [true] }
}

export const VIEWS_LIST = Object.values(VIEWS)
