import React, { useEffect, useState } from 'react'

import iphone from '../assets/images/iphone11.png'
import flatscreen from '../assets/images/flat-screen.png'
import xbox from '../assets/images/xbox.png'
import { FiArrowRight } from 'react-icons/fi'

const slides = [
    {
      image:iphone,
      name: 'Iphone11',
      desc: 'Get an awesome iphone 11 for just $99 and save up to 50% '
    },
    {
      image:flatscreen,
      name: 'Flat Ultra Sonic Screen',
      desc: "Purchase your amazing ultra sonic modern flat screen tv for just $200"
  
    },
    {
      image:xbox,
      name: 'Xbox Console',
      desc: "save up to 50% on xbox console purchase, get three month of free game pass"
    },
    {
        image:iphone,
        name: 'Iphone11',
        desc: 'Get an awesome iphone 11 for just $99 and save up to 50% '
    }
  ]
function Carousel() {
    const [curr, setCurr] = useState(0)

    const next = () =>
        setCurr((curr) => curr === slides.length - 1 ? 0 : curr + 1)

    useEffect(() => {
        const slideIntervals = setInterval(next, 5000)
       return () => clearInterval(slideIntervals)
    },[])

  return (
   <div className=' overflow-hidden bg-gray-200'>
        <div className='flex w-[400%] h-[300px relative'>
        {slides.map((item) => (
            <div className={`grid grid-cols-2 w-[100%]
                ${curr === 0 ? "" : "transition-transform ease-out duration-500"}`}
            style={{transform:`translateX(-${curr * 100}%)`}}>
                <div className='w-[80%] m-[auto] p-5'>
                    <h1 className='font-extrabold mb-3'>{item.name}</h1>
                    <p className='text-[12px] mb-3 text-gray-500 font-semibold'>{item.desc}</p>
                    <button className='flex gap-2 items-center bg-[#FA8232] text-[12px] text-white p-2 w-[100px]'>
                    SHOP NOW
                    <FiArrowRight/>
                    </button>
                </div>
                <div className='w-[80%] m-[auto]'>
                    <img src={item.image} alt="" className='w-[180px]' />
                </div>
            </div>
        ))}
        </div>
        <div className='flex gap-2 justify-center mb-2'>
           {slides.map((_, i) => (
            <div className={`bg-blue-400 w-2 h-2  rounded-full
                ${curr === i ? "p-1" : "bg-opacity-50"}
            `}></div>
           ))}
        </div>
   </div>
   
  )
}

export default Carousel
