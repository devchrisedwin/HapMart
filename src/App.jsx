import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import CartItem from './pages/CartItem'
import ProductDetails from './pages/ProductDetails'

function App() {
  const [menu, setMenu] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [userAuthPopUp, setUserAuthPopUp] = useState(false)
  

  return (
    <>
     <Navbar menu={menu} setMenu={setMenu} userAuthPopUp={userAuthPopUp} setUserAuthPopUp={setUserAuthPopUp}/>
     <Routes>
       <Route path='/' element={<Home menu={menu} isLogin={isLogin} setIsLogin={setIsLogin} userAuthPopUp={userAuthPopUp}/>}/>
       <Route path='/cart' element={<CartItem/>}/>
       <Route path='/product/:name' element={<ProductDetails/>}/>
     </Routes>
     
    </>
  )
}

export default App
