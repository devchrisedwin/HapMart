import { useContext, useState } from "react"
import { wishList } from "../context/WishList-Context"
import { cartItemContext } from "../context/CartItem-Context"
import { productDetailContext } from "../context/ProductDetail-Context"
import { FiStar } from 'react-icons/fi'
import { FiHeart } from 'react-icons/fi'
import { Link } from "react-router-dom"


function WishList() {
    const {pWishList} = useContext(wishList)
    const {handleAddToCart, cartItem} = useContext(cartItemContext)
    const {handleDetails} = useContext(productDetailContext)
    

    const [ProductSelected, setProductSelected] = useState('')
    const [page, setPage] = useState(1)

    function revealProductAddToCart(id) {
        setProductSelected(id)
    }

    function handleWishListPagination(selectedPage) {
        if(selectedPage >= 1 && selectedPage !== page && selectedPage <= Math.ceil(pWishList.length / 4)){
            setPage(selectedPage)
        }
    }

    return(
        <div className="lg:w-[90%] m-[auto] border">
        <Link to='/'><button className="border p-2 ml-[100px] mt-7">Home</button></Link>
        <Link to='/cart'><button className="border p-2 text-center  ml-[50px] mt-7 mb-3">Cart Page</button></Link>
        <div className='lg:flex flex-wrap mt-5 lg:w-[70%] w-[100%] m-[auto] '>
            {
            pWishList.slice(page * 4 - 4, page * 4).map((product) => (
                <div key={product.id} className='border lg:w-[250px] h-[325px] m-[auto] w-[100%] mb-2'onMouseEnter={() => revealProductAddToCart (product.id)}>
                  <div className='mb-3'>
                    <img src={product.image} alt="" className='w-[100px] h-[130px] pt-7 m-[auto]' />
                    {ProductSelected === product.id ? 
                      <button
                      disabled={cartItem.findIndex(item => item.name === product.name) > -1}
                      onClick={()=> handleAddToCart(product)} 
                      className='bg-black w-[100%] m-[auto] p-1 text-[#fff] disabled:opacity-[0.4]'>Add to cart</button>
                      : ""
                    }
                    
                  </div>

                  <div className='ml-3'>
                    <p className='font-bold'>{product.name}</p>
                    <p className='text-[#DA4444] font-bold'>{`$${product.price}`} <del className='text-gray-600'>$160</del></p>
                    <div className="flex items-center mb-2">
                       <FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/><FiStar color='#FA8232' fill='#FA8232'/>
                    </div>
                    <div title='add to wishlist'>
                      <FiHeart onClick={() => handleAddToWishList(product)} color='red' className='cursor-pointer size-6' />
                    </div>
                    <Link to={`/product/${product.name}`}><button className='border p-2 mb-1 font-bold' onClick={()=> handleDetails(product)}>View Product</button></Link>
                  </div>
                </div>
            ))
            }
        </div>

        {
            pWishList.length ? (
                <div className="flex justify-center items-center">
                    <span className="border m-2 p-2 font-bold cursor-pointer" onClick={() => handleWishListPagination(page - 1)}>Prev</span>
                    <span className="border m-2 p-2 font-bold cursor-pointer" onClick={() => handleWishListPagination(page + 1)} >Next</span>
                </div>
            ): <h3 className="font-bold text-center mt-5 text-[20px]">No Item In Wish List</h3>
        }
    </div>
    )
}
export default WishList