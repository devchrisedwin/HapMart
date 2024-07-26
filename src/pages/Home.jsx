import React from 'react'
import Hero from '../components/Hero'

function Home({menu, isLogin, setIsLogin, userAuthPopUp}) {
  return (
    <div>
      <Hero menu={menu} isLogin={isLogin} setIsLogin={setIsLogin} userAuthPopUp={userAuthPopUp}/>
    </div>
  )
}

export default Home
