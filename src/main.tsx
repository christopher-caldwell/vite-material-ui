import React from 'react'
import ReactDOM from 'react-dom'

import { ChosenThemeProvider, ThemeProvider } from '@/providers'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ChosenThemeProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChosenThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
