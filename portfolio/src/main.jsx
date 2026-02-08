/**
 * main.jsx - Application Entry Point
 * 
 * This is the entry point for the React application.
 * It renders the App component inside React StrictMode for
 * better development experience (double-renders in dev mode
 * to catch potential issues).
 * 
 * @file Entry point for the portfolio application
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Mount the React application to the root DOM element
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
