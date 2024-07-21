import usFlag from  '../assets/images/usflag.png'
import madalorian from '../assets/images/mandalorian.png'
import { useState } from 'react'
import { FiArrowDown, FiArrowUp, FiFacebook, FiHeart, FiImage, FiSearch, FiShoppingCart, FiTwitter, FiUser, FiYoutube } from "react-icons/fi";



function Navbar() {
    const [currency, setCurrency] = useState(false)
    const [language, setLanguage] = useState(false)
    const [discount, setDiscount] = useState(true)
    const [langValue, setLangValue] = useState('Eng')
    const [curValue, setCurValue] = useState('USD')

    return (
        <div className="bg-[#1B6392] h-[150px] lg:w-[90%] m-[auto] navbar">
            {discount &&
                <div className="bg-[#191C1F] h-[40px]">
                    <div className='coupon lg:w-[90%] m-[auto]' >
                        <div className="text-white">
                            <span className=" rotated bg-[#F3DE6D] text-black m-[3px] text-[13px] p-1 font-bold">Black</span>
                            Friday
                        </div>
                        <div className="text-[#FFFFFF] text-[10px] discount-rate">
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
                <div className='h-10 lg:w-[100%] m-[auto] text-[#FFFFFF] text-[12px] second-layer-navbar '>
                    <p className='lg:ml-[-29px] pt-1 lg:pt-0 ml-1'>Welcome to Hapmart Online Ecommerce store </p>
                    <div className='flex gap-5'>
                        <div className='gap-3 social-media lg:ml-0 ml-1 pt-1 md:ml-[-10px] md:mr-[30px] lg:mr-0'>
                           <p>Follow us</p>
                           <FiTwitter color='white' className='cursor-pointer'/>
                           <FiFacebook color='white' size={15} className='cursor-pointer'/>
                           <FiYoutube color='white' className='cursor-pointer'/>
                        </div>|
                       <div className='social-media' onClick={() => setLanguage(!language)}>
                          <button>{langValue}</button>
                          {language ? <FiArrowUp color='white'/> : <FiArrowDown/>}
                       </div>
                        <div className='social-media' onClick={() => setCurrency(!currency)}>
                            <button>{curValue}</button>
                            {currency ? <FiArrowUp color='white'/> : <FiArrowDown/>}
                        </div>
                        
                    </div>
                </div>
            </div>

            <hr className='opacity-[0.4] mt-3 lg:mt-0'/>
            <div className='lg:w-[100%] w-[99%] m-[auto] third-layer-navbar mt-3 ml-1'>
                <p className='text-white font-bold lg:mr-[-150px] lg:ml-[-65px] md:ml-[-33px]'>HAPMART</p>
                <div className='lg:w-[350px] lg:ml-[-20px] search-box bg-white'>
                    <input type="search" placeholder='search anything here' 
                    className='w-[93%] border-none outline-none indent-2 text-[12px] p-1'/>
                    <FiSearch className='search-icon'/>
                </div>
                
                <div className='lg:ml-[-170px] lg:mr-[-20px] third-layer-navbar gap-2'>
                    <div className='cart'>
                        <FiShoppingCart color='white' className='cursor-pointer' />
                        <div className='cart-count'>0</div>
                    </div>
                    <div><FiHeart color='white' className='cursor-pointer' /></div>
                    <div><FiUser color='white' className='cursor-pointer' /></div>
                </div>

                {language && 
                    <div className='text-[12px] bg-white lg:mr-[150px] ml-[60px] md:ml-[380px] p-3 w-[135px] fixed lg:ml-[610px] mt-3'>
                        <div className='flex gap-1 lang'>
                            <img src={usFlag} alt="" className='w-[10px] h-[10px]' />
                            <button 
                            className='hover:text-red-700 cursor-pointer'
                            onClick={() => setLangValue('Eng')}>English</button>
                        </div>
                        <div className='flex gap-1 lang'>
                            <img src={madalorian} alt="" className='w-[10px] h-[10px]' />
                            <button 
                            onClick={() => setLangValue('Man')} 
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
                    <div className='bg-white p-4 w-[100px] text-[12px] mt-2 lg:ml-[750px] md:ml-[650px] ml-[220px] fixed'>
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