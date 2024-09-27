import React, { useState } from 'react'
import googlepixel from '../assets/images/image 5.png'
import earpod from '../assets/images/image 4.png'
import Carousel from '../components/Carousel'
import { FiArrowRight, FiSmartphone } from 'react-icons/fi'
import { IoIosArrowForward } from 'react-icons/io'
import categoryData from '../data/categorydata'
import productsData from '../data/data'


function Hero({menu, isLogin, setIsLogin, userAuthPopUp}) {
  const [subMenu, setSubMenu] = useState(false)
  const [category, setCategories] = useState(categoryData)
  const [products, setProducts] = useState(productsData)
  const [selected, setSelected] = useState(null)
  const [filterCategory, setFilterCategory] = useState('')
  


  function handleMenu(id,  category) {
    setFilterCategory(category)
    setSelected(id)
    setSubMenu(true)
  }

  let filteredCategoryData = products.filter((i) => (i.category === filterCategory))





  return (
    <div className='hero relative'>
      <div>
       <Carousel/>
      </div>
      <div className='h-[270px] grid grid-cols-1'>
        <div className='grid grid-cols-2 bg-[#191C1F]'>
          <div className='w-[100px] m-[auto] mt-5'>
            <h3 className='text-[10px] text-[#EBC80C]'>SUMMER SALES</h3>
            <p className='text-[#FFFFFF] font-bold'>New Google Pixel 6 Pro</p>
            <button className='flex mb-3 mt-2 gap-2 items-center bg-[#FA8232] text-[12px] text-white p-2 w-[100px]'>
              SHOP NOW
              <FiArrowRight/>
            </button>
          </div>
          <div className='lg:w-[100%] m-[auto]'>
            <img src={googlepixel} alt="" className='w-[200px] h-[120px] mt-5' />
          </div>
        </div>
        <div className='h-[127px] grid grid-cols-1'>
          <div className='grid grid-cols-2'>
            <div className='lg:w-[85%] m-[auto]'>
              <img src={earpod} alt="" className='w-[100px]' />
            </div>
            <div className='lg:w-[85%] m-[auto]'>
              <p className='text-[13px] mt-3 w-[90px] font-semibold'>Xiaomi FlipBuds Pro</p>
              <p className='text-[10px] text-[#2DA5F3] font-semibold'>$229 USD</p>
              <button className='flex mb-3 mt-2 gap-2 items-center bg-[#FA8232] text-[12px] text-white p-2 w-[100px]'>
                SHOP NOW
                <FiArrowRight/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {menu &&
      <div className=' bg-white w-[165px] h-[300px] absolute border-2'>
          <div className='p-2'>
            {category.map((item) => (
              <button onClick={()=>handleMenu(item.id, item.category)} className={`font-semibold text-[12px] 
                p-1 cursor-pointer flex items-center gap-1 hover:bg-gray-400`}>
                {item.category}
                {item.id === selected ? <IoIosArrowForward/> : ""}
              </button>
            ))}
            
          </div>
      </div>
      }
      {subMenu ?
      !menu ? "" :
      <div className='border-2 bg-white w-[150px] p-3 absolute left-[165px]'>
        {filteredCategoryData.map((i) => (
          <p key={i.id} className='text-[12px] font-semibold cursor-pointer'>{i.name}</p>
        ))}
      </div>
      : ""
      }

      {userAuthPopUp &&
      <div className='border-2 w-[300px] absolute right-0 bg-white'>
        <div className='flex items-center justify-center font-bold pt-2'>
          <h3>{isLogin ? 'Sign into your account' : 'Sign up for an account'}</h3>
        </div>
        {isLogin ?
        <form className='mt-2'>
            <div className='flex flex-col w-[90%] m-[auto] gap-1 p-2 font-bold'>
              <label htmlFor="email" className='text-[13px]'>Email Address</label>
              <input type="email" id='email' className='border-2 rounded outline-none' />
            </div>

            <div className='flex flex-col w-[90%] m-[auto] gap-1 p-2 font-bold'>
              <label htmlFor="password" className='flex justify-between text-[13px]'>
                <span>password</span>
                <span className='text-cyan-500'>forgot password</span>
              </label>
              <input type="password" id='password' className='border-2 rounded outline-none' />
            </div>

            <div className='w-[90%] m-[auto]'>
              <button className='flex mb-3 mt-2 gap-2 items-center justify-center bg-[#FA8232] text-[12px] text-white p-2 w-[100%]'>
                  LOGIN
                <FiArrowRight/>
              </button>
            </div>

            <div className='-[90%] m-[auto] text-center text-[13px] flex flex-col gap-3'>
              <p className='text-cyan-500'>Don't have account</p>
              <p className='text-[#FA8232] text-[13px] cursor-pointer' onClick={()=>setIsLogin(false)}>Create account</p>
            </div>
        </form>
        :
        <form className='mt-2'>
            <div className='flex flex-col w-[90%] m-[auto] gap-1 p-2 font-bold'>
              <label htmlFor="username" className='text-[13px]'>Username</label>
              <input type="username" id='username' className='border-2 rounded outline-none' />
            </div>

            <div className='flex flex-col w-[90%] m-[auto] gap-1 p-2 font-bold'>
              <label htmlFor="email" className='text-[13px]'>Email Address</label>
              <input type="email" id='email' className='border-2 rounded outline-none' />
            </div>

            <div className='flex flex-col w-[90%] m-[auto] gap-1 p-2 font-bold'>
              <label htmlFor="password" className='flex justify-between text-[13px]'>
                <span>password</span>
              </label>
              <input type="password" id='password' className='border-2 rounded outline-none' />
            </div>

            <div className='w-[90%] m-[auto]'>
              <button className='flex mb-3 mt-2 gap-2 items-center justify-center bg-[#FA8232] text-[12px] text-white p-2 w-[100%]'>
                  SIGNUP
                <FiArrowRight/>
              </button>
            </div>

            <div className='-[90%] m-[auto] text-center text-[13px] flex flex-col gap-3'>
              <p className='text-cyan-500'>have an account</p>
              <p className='text-[#FA8232] text-[13px] cursor-pointer' onClick={()=>setIsLogin(true)}>Login</p>
            </div>
        </form>
        }
      </div>
      }
    </div>
      
  )
}
export default Hero
