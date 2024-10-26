import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Header.css'
import Header from './Header.jsx'
import Logo from './assets/artikkelikuva.jpg'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header image={Logo} title="Welcome to product page!"/>
  </StrictMode>,
)
