import usFlag from  '../assets/images/usflag.png'
import madalorian from '../assets/images/mandalorian.png'
import { useState } from 'react'



function Navbar() {
    const [currency, setCurrency] = useState(false)
    const [language, setLanguage] = useState(false)
    const [discount, setDiscount] = useState(true)
    const [langValue, setLangValue] = useState('Eng')
    const [curValue, setCurValue] = useState('USD')

    return (
        <div className="bg-[#1B6392] h-[150px] w-[90%] m-[auto]">
            {discount &&
                <div className="bg-[#191C1F] h-[40px]">
                    <div className='coupon w-[90%] m-[auto]' >
                        <div className="text-white">
                            <span className="bg-[#F3DE6D] text-black m-[3px] text-[13px] p-1 font-bold">Black</span>
                            Friday
                        </div>
                        <div className="text-[#FFFFFF] text-[10px] coupon">
                            Upto 
                            <span className="text-[#EBC80C] text-[23px] font-semibold m-[3px]">59%</span>
                            OFF 
                        </div>
                        <button className="bg-[#EBC80C] text-[10px] font-bold p-1 w-[100px]">SHOP NOW</button>
                        <span 
                        className="text-[9px] text-center text-[#FFFFFF]  bg-[#303639] p-1 w-[20px] h-[20px] cursor-pointer"
                        onClick={() => setDiscount(!discount)}>X</span>
                    </div>
                </div>
            }
            <div>
                <div className='h-10 w-[100%] m-[auto] coupon text-[#FFFFFF] text-[12px]'>
                    <p className='ml-[-55px]'>Welcome to Hapmart Online Ecommerce store </p>
                    <div className='flex gap-12'>
                        <p>Follow us</p>
                        <button onClick={() => setLanguage(!language)}>{langValue}</button>
                        <button onClick={() => setCurrency(!currency)}>{curValue}</button>
                    </div>
                </div>
            </div>

            <hr className='opacity-[0.4]'/>
            <div className='w-[100%] m-[auto] coupon mt-6'>
                <p className='text-white font-bold ml-[-180px]'>HAPMART</p>
                <input type="search" className='w-[350px] ml-[-250px] p-1'/>

                {language && 
                    <div className='text-[12px] bg-white mr-[200px] p-3 w-[135px] fixed ml-[610px]'>
                        <div className='flex gap-1 lang'>
                            <img src={usFlag} alt="" className='w-[10px] h-[10px]' />
                            <button 
                            className='hover:text-red-700 cursor-pointer'
                            onClick={() => setLangValue('Eng')}>English</button>
                        </div>
                        <div className='flex gap-1 lang'>
                            <img src={madalorian} alt="" className='w-[10px] h-[10px]' />
                            <button 
                            onClick={() => setLangValue('Manda')} 
                            className='hover:text-red-700 cursor-pointer'
                            >Mandalorian</button>
                        </div>
                        <div className='flex gap-1 lang'>
                            <img src={usFlag} alt="" className='w-[10px] h-[10px]' />
                            <button 
                            className='hover:text-red-700 cursor-pointer'
                            onClick={() => setLangValue('Rus')}
                            >Rusian</button>
                        </div>
                    </div>
                }

                {currency &&
                    <div className='bg-white p-4 w-[100px] text-[12px] mt-[-10px] ml-[710px] fixed'>
                        <div 
                        className='hover:text-red-700 cursor-pointer'
                        onClick={() => setCurValue('USD')}>Dollar</div>
                        <div 
                        className='hover:text-red-700 cursor-pointer'
                        onClick={() => setCurValue('EUR')}>Euro</div>
                    </div>
                }
            </div>
        </div>
    )
    
}

export default Navbar