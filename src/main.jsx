import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartItemProvider from './context/CartItem-Context.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CartItemProvider>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </CartItemProvider>
 
)
