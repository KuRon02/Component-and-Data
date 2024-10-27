import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Header.css'
import './ProductForm.css'
import './OrderInfo.css'
import Header from './Header.jsx'
import Logo from './assets/artikkelikuva.jpg'
import ProductForm from './ProductForm.jsx'
import OrderInfo from './OrderInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header image={Logo} title="Welcome to product page!"/>
    <ProductForm />
  </StrictMode>,
)
