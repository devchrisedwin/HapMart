import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartItemProvider from './context/CartItem-Context.jsx'
import WishListProvider from './context/WishList-Context.jsx'
import ProductDetailProvider from './context/ProductDetail-Context.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartItemProvider>
      <WishListProvider>
        <ProductDetailProvider>
            <App />
        </ProductDetailProvider>
      </WishListProvider>
    </CartItemProvider>
  </BrowserRouter>
 
)
