import React, {useState} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [menu, setMenu] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [userAuthPopUp, setUserAuthPopUp] = useState(false)
  

  return (
    <>
     <Navbar menu={menu} setMenu={setMenu} userAuthPopUp={userAuthPopUp} setUserAuthPopUp={setUserAuthPopUp}/>
     <Home menu={menu} isLogin={isLogin} setIsLogin={setIsLogin} userAuthPopUp={userAuthPopUp}/>
    </>
  )
}

export default App
