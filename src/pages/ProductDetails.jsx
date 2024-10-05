import { useContext, useEffect } from "react"
import { productDetailContext } from "../context/ProductDetail-Context"
import { Link, useNavigate, useParams } from "react-router-dom"
import { cartItemContext } from "../context/CartItem-Context"





function ProductDetails() {
    const {productDetails, handleDetails} = useContext(productDetailContext)
    const {handleAddToCart} = useContext(cartItemContext)

    const {name} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(name !== productDetails.name ){
            navigate('/')
        }
        return () => {}
    },[name])


    return (
        <div className="border lg:w-[60%] lg:h-[500px] m-[auto]">
           {productDetails.name &&
            <div className="lg:flex justify-evenly items-center">
                <div className="w-[350px] h-[350px] lg:flex justify-center items-center mt-[75px]">
                    <img src={productDetails.image} className="w-[250px] m-[auto]"/>
                </div>
                <div className="border lg:w-[350px] p-3 mt=[85px]">
                    <p className="p-2 font-bold">{productDetails.name}</p>
                    <p className="p-2 font-bold">{productDetails.description}</p>
                    <p className="p-2 font-bold">{`$${productDetails.price}`}</p>
                    <button onClick={()=>handleAddToCart(productDetails)} className="border p-2 mr-2">Add to cart</button>
                    <Link to='/'><button className="border p-2">Home</button></Link>
                </div>
            </div>
           }
        </div>
    )
}
export default ProductDetails