import React, { useState } from 'react'
import categories from '../data/categorydata'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function CartegorySlide({handleProductByCategory}) {
  const [curr, setCurr] = useState(1)

  const next = () =>{
    if(curr >= 64) return
    setCurr((curr) => curr + 1)
  }

  const prev = () =>{
    if(curr === -2 ) return
    setCurr((curr) => curr - 1)
  }
    

  return (
    <div className='lg:w-[59%] w-[100%] m-[auto] overflow-hidden mt-5 mb-3'>
      <div className='lg:w-[180%] w-[120%] flex items-center gap-1' style={{transform:`translateX(-${curr * 10}px)`}}>
      {categories.map((categoryData) => (
          <div onClick={()=>handleProductByCategory(categoryData.category)} className='border lg:p-2 p-5 lg:w-[200px] w-[300px] lg:h-[100px] h-[120px] flex flex-col items-center justify-center' key={categoryData.id}>
            <img src={categoryData.image} className='lg:w-16 h-16 w-24'/>
            <p className='text-[10px]'>{categoryData.category}</p>
          </div>
      ))}
      </div>
      <div className='flex items-center justify-between'>
        <div className='bg-[#FA8232] rounded-full p-1 ml-2 mt-[-110px] z-[999]' onClick={prev}>
          <FiArrowLeft size={15} />
        </div>
        
        <div className='bg-[#FA8232] rounded-full p-1 mr-2 mt-[-110px] z-[999]' onClick={next}>
          <FiArrowRight size={15} />
        </div>
      </div>
    </div>
  )
}

export default CartegorySlide
