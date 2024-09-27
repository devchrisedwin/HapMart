import { useContext, useEffect } from "react"
import { productDetailContext } from "../context/ProductDetail-Context"
import { Link, useNavigate, useParams } from "react-router-dom"
import { cartItemContext } from "../context/CartItem-Context"





function ProductDetails() {
    const {productDetails} = useContext(productDetailContext)
    const {handleAddToCart} = useContext(cartItemContext)

   const navigate = useNavigate()

    return (
        <div className="border w-[60%] h-[500px] m-[auto]">
           {
            productDetails.name !== undefined  ?
            <div className="flex justify-evenly items-center">
                <div className="border w-[350px] h-[350px] flex justify-center items-center mt-[75px]">
                    <img src={productDetails.image} className="w-[250px]"/>
                </div>
                <div className="border w-[350px] p-3">
                    <p className="p-2 font-bold">{productDetails.name}</p>
                    <p className="p-2 font-bold">{productDetails.description}</p>
                    <p className="p-2 font-bold">{`$${productDetails.price}`}</p>
                    <p className="p-2 font-bold">{productDetails.arrival} arrival</p>
                    <button onClick={()=>handleAddToCart(productDetails)} className="border p-2 mr-2">Add to cart</button>
                    <Link to='/'><button className="border p-2">Home</button></Link>
                </div>
            </div> : navigate('/')
           }
        </div>
    )
}
export default ProductDetails