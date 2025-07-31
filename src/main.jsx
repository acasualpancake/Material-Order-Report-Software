import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { ViewProvider } from './contexts/ViewContext'

// Render
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </StrictMode>,
)
