import react from 'react'
import reactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'

reactDom.createRoot(document.getElementById('root')).render(
  <react.StrictMode>
    <App />
  </react.StrictMode>,
)
