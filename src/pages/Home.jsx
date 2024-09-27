import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import CartegorySlide from '../components/CartegorySlide'
import flashsalesproduct from '../data/flashsales'
import allProducts from '../data/data'
import { FiStar } from 'react-icons/fi'



import delivery from '../assets/images/Package.png'
import trophy from '../assets/images/Trophy.png'
import wallet from '../assets/images/CreditCard.png'
import headphone from '../assets/images/Headphones.png'
import { cartItemContext } from '../context/CartItem-Context'


function Home({menu, isLogin, setIsLogin, userAuthPopUp }) {
  const {handleAddToCart} = useContext(cartItemContext)

  const [expiringDate, setExperingDate] = useState(16)
  const [hour, setHour] = useState(24)
  const [minute, setMinute] = useState(60)
  const [seconds, setseconds] = useState(1)

  const [flashSale, setFlashSale] = useState(flashsalesproduct)
  const [products, setproducts] = useState(allProducts)
  const [filterproduct, setFilterProduct] = useState(allProducts)
  const [flashProductSelected, setFlashProductSelected] = useState('')
  const [ProductSelected, setProductSelected] = useState('')
  const [page, setPage] = useState(1)

  let noItem = 2
  

  


  function revealFlashSaleAddToCart(id) {
    setFlashProductSelected(id)
  }

  function revealProductAddToCart(id) {
    setProductSelected(id)
  }
  

  function handleProductByCategory(pcategory) {
    const filtteredProduct = products.filter((product) => {
      return product.category === pcategory
    })
    console.log(filtteredProduct)
    setFilterProduct(filtteredProduct)
  }

  function handlePageSelection(selectedPage) {
    if(selectedPage >= 1 && selectedPage !== page && selectedPage <= Math.ceil(filterproduct.length / 4)) {
      setPage(selectedPage)
    }
    
  }

 
  

  useEffect(() => {
    const interval = setInterval(() => {
      if(seconds > 1) {
        setseconds(seconds - 1)
      }else if(seconds >= 1 && minute > 1) {
        setseconds(59)
        setMinute(minute - 1)
      }else if(minute >= 1 && hour > 1) {
        setMinute(60)
        setseconds(59)
        setHour(hour - 1)
      }else if(hour >= 1 && expiringDate > 1) {
        setHour(24)
        setMinute(60)
        setseconds(59)
        setExperingDate(expiringDate - 1)
      }else{
        setExperingDate(0)
        setHour(0)
        setMinute(0)
        setseconds(0)
      }
    },1000);

    return () => clearInterval(interval)
  },[expiringDate,hour,minute,seconds])
 


  
  

  return (
    <div>
      <Hero menu={menu} isLogin={isLogin} setIsLogin={setIsLogin} userAuthPopUp={userAuthPopUp}/>

      <div className='grid lg:grid-cols-4 grid-cols-2 lg:gap-3 gap-1 lg:w-[59%] w-[100%] m-[auto] mt-3'>
          <div className='bg-white border h-16 flex items-center gap-2 p-2'>
            <img src={delivery} alt=""  className='w-7 h-7'/>
            <div>
              <h2 className='lg:text-[11px] text-[8px] font-bold'>FASTED DELIVERY</h2>
              <p className='text-[10px]'>Delivery in 24/H</p>
            </div>
          </div>
          <div className='bg-white border h-16 flex items-center gap-2 p-2'>
            <img src={trophy} alt=""  className='w-7 h-7 '/>
            <div>
              <h2 className='text-[11px] font-bold'>24 HOURS RETURN</h2>
              <p className='text-[10px]'>100% money back gurantee</p>
            </div>
          </div>
          <div className='bg-white border h-16 flex items-center gap-2 p-2'>
            <img src={wallet} alt=""  className='w-7 h-7 '/>
            <div>
              <h2 className='text-[11px] font-bold'>SECURE PAYMENT</h2>
              <p className='text-[10px]'>your money is safe</p>
            </div>
          </div>
          <div className='bg-white border h-16 flex items-center gap-2 p-2'>
            <img src={headphone} alt=""  className='w-7 h-7 '/>
            <div>
              <h2 className='text-[11px] font-bold'>SUPPORT 24/7</h2>
              <p className='text-[10px]'>Live contact message</p>
            </div>
          </div>
      </div>
      <h2 className='font-bold text-center mt-3'>Shop with Category</h2>
      <CartegorySlide handleProductByCategory={handleProductByCategory}/>

     {/* Flashsale product section------  */}
      <div className='lg:w-[60%] w-[90%] m-[auto]'>
        <div className="">
          <div className='text-[#DB4444] text-[12px] font-bold flex items-center'>
             <p className='mr-1 w-3 h-6 bg-[#DB4444]'></p>Today's
          </div>
          <div className='font-bold text-[17px] mt-5'>
           Flash Sales {`${expiringDate}d : ${hour}h : ${minute}m : ${seconds}s`}
          </div>

          <div className='lg:flex mt-5 w-[90%] m-[auto]'>
            {flashSale.map((flashItem) => (
                <div key={flashItem.id} className='border lg:w-[191px] w-[100%] ml-2 mb-2 lg:mb-0'onMouseEnter={() => revealFlashSaleAddToCart (flashItem.id)}>
                  <div className='relative'>
                    <img src={flashItem.image} alt="" className='w-[100px] h-[130px] pt-7 m-[auto]' />
                    <p className='absolute top-0 left-0 bg-[#DA4444] text-[#fff] p-1'>{flashItem.promo}</p>
                  
                    {flashProductSelected === flashItem.id ? 
                      <button onClick={() => handleAddToCart(flashItem)} className='bg-black lg:w-[190px] w-[100%] m-[auto] p-1 text-[#fff]'>Add to cart</button>
                      : ""
                    }
                    
                  </div>

                  <div>
                    <p className='font-bold'>{flashItem.name}</p>
                    <p className='text-[#DA4444] font-bold'>{`$${flashItem.price}`} <del className='text-gray-600'>$160</del></p>
                    <div className="flex items-center">
                       <FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232'/>
                       <p>{`(${flashItem.totalrating})`}</p>
                    </div>
                    
                  </div>
                </div>
            ))}
          </div>
        </div>
       
      </div>

{/* all products section -------- */}
      <div className='lg:w-[60%] w-[90%] m-[auto] mt-5'>
        <div className="">
          <div className='text-[#DB4444] text-[12px] font-bold flex items-center'>
             <p className='mr-1 w-3 h-6 bg-[#DB4444]'></p>Our Products
          </div>
          <div className='font-bold text-[17px] mt-5'>
           Explore our Products
          </div>

          <div className='lg:flex flex-wrap mt-5 w-[90%] m-[auto]'>
            {filterproduct.slice(page * 4 - 4, page * 4).map((product) => (
                <div key={product.id} className='border lg:w-[191px] w-[100%] ml-2 mb-2'onMouseEnter={() => revealProductAddToCart (product.id)}>
                  <div className='mb-3'>
                    <img src={product.image} alt="" className='w-[100px] h-[130px] pt-7 m-[auto]' />
                    {ProductSelected === product.id ? 
                      <button onClick={()=> handleAddToCart(product)} className='bg-black lg:w-[190px] w-[100%] m-[auto] p-1 text-[#fff]'>Add to cart</button>
                      : ""
                    }
                    
                  </div>

                  <div className='ml-3'>
                    <p className='font-bold'>{product.name}</p>
                    <p className='text-[#DA4444] font-bold'>{`$${product.price}`} <del className='text-gray-600'>$160</del></p>
                    <div className="flex items-center mb-2">
                       <FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
       
      </div>

        {/* adding pagination */}
        {
            filterproduct.length && (
              <div className='flex justify-center items-center p-2 mb-2'>
              <span className='border m-2 p-2 font-bold cursor-pointer' onClick={()=> handlePageSelection(page - 1)}>prev</span>
              {
                
                [...Array(Math.ceil(filterproduct.length / 4))].map((_,i) => {
                  return (
                  <span
                  className={page === i + 1 ? 'border p-2 m-1 bg-[#DB4444] text-white cursor-pointer' : "'border p-2 m-1 cursor-pointer"} 
                  onClick={() => handlePageSelection(i + 1)} key={i}>{i + 1}</span>
                  ) 
                })
              }
              
              <span className='border m-2 p-2 font-bold cursor-pointer' onClick={()=> handlePageSelection(page + 1)}>Next</span>
              </div>
            )
        }
    </div>
  )
}

export default Home
