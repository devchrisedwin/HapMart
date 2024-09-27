import { useContext, useEffect, useState } from "react";
import { cartItemContext } from "../context/CartItem-Context";
import { Link } from "react-router-dom";

function CartItem() {
    {/*  //values from context files */}
    const {cartItem, handleIncrease, handleDecrease, handleRemove, totalp} = useContext(cartItemContext)

    return(
    <>
    {/* //cartpage headers */}
    <div className="lg:w-[80%] lg:m-[auto] lg:grid grid-cols-4 lg:mt-10 w-[100%] hidden">
        <h5 className="text-center font-extrabold p-3">PRODUCT</h5>
        <h5 className="text-center font-extrabold p-3">PRICE</h5>
        <h5 className="text-center font-extrabold p-3">QUANTITY</h5>
        <h5 className="text-center font-extrabold p-3">SUBTOTAL</h5>
    </div>

    {/* //displaying cart items */}
     {cartItem && cartItem?.length > 0 ?
     
      cartItem.map((item) => (
        <div key={item.id} className="lg:grid lg:grid-cols-4 lg:w-[80%] lg:m-[auto] w-[100%] mb-9 lg:mb-0 lg:border-none border border-red-950">
            <div className="border lg:p-3">
                <div className="flex justify-between items-center mt-4 border lg:w-[300px] w-[200px] m-[auto] pl-4 lg:pr-6">
                    <img src={item.image} className="w-9"/>
                    <p>{item.name}</p>
                </div>
                
            </div>

            <div className="border text-center  flex flex-col items-center justify-center">
                <p className="mt-4">{`$${item.price}`}</p>
            </div>

            <div className="border p-3">
                <div className="flex border justify-evenly items-center mt-4">
                    <p className="w-[50px] border text-center">{item.quantity}</p>
                    <button 
                        onClick={()=> handleIncrease(item.id)} 
                        className="bg-red-700 text-white text-[20px] w-9">
                        +
                    </button>

                    <button 
                        onClick={()=> handleDecrease(item.id)} 
                        className="bg-red-700 text-white text-[20px] w-9">
                        -
                    </button>

                    <button onClick={()=> handleRemove(item)} 
                        className="border border-[#000] font-extrabold p-1">
                        Remove
                    </button>
                </div>

            </div>

            <div className="border text-center  flex flex-col items-center justify-center">
                <p className="text-center mt-4 flex flex-col items-center">{`$${item.totalPrice.toFixed(2)}`}</p>
            </div>
        </div>
      )):<h2 className="text-center font-extrabold">No cart item found!!</h2>
     }
     {/* //cartItem display code ends here */}

     <div className="lg:w-[80%] m-[auto] mt-2 lg:flex justify-between w-[100%]">
        <div className="w-[300px] m-[auto] lg:m-0">
            <Link to='/'><button className="border p-3 w-[300px] font-bold">Return to Shop</button></Link>
        </div>
        


     {/* // displaying cart total */}
        <div className="lg:w-[350px] w-[100%] border border-[#000] mb-4 mt-4">
            <h5 className="p-3 font-extrabold">Cart Total</h5>
            <div className="flex justify-between items-center p-3">
                <p>Subtotal</p>
                <p>{`$${totalp.toFixed(2)}`}</p>
            </div>
            <hr />
            <div className="flex justify-between items-center p-3">
                <p>Shipping</p>
                <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between items-center p-3">
                <p>Total</p>
                <p>{`$${totalp.toFixed(2)}`}</p>
            </div>
            <div className="w-[200px] m-[auto] mb-4 border">
                <button className="p-3 bg-[#DB4444] text-white font-extrabold text-center">Process to Checkout</button>
            </div>
            
        </div>
     </div>
     </>
     
    )
}
export default CartItem