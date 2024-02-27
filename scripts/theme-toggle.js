if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// when user explicitly chooses light mode
localStorage.theme = 'light'

// when user explicitly chooses dark mode
localStorage.theme = 'dark'

// when user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')
