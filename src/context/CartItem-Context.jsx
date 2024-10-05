import { children, createContext, useEffect, useState } from "react";


export const cartItemContext = createContext(null)


function CartItemProvider( {children} ) {
    const [cartItem, setCartItem] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    {/*// grand total price variable*/}
    let totalp = 0
    

    function handleAddToCart(product) {
        {/*//add to cart funtionality begins here*/}
        let cpyCartItem = [...cartItem]
        const findIndexOfItem = cpyCartItem.findIndex(cartItem=>cartItem.name === product.name)

        
        if(findIndexOfItem === -1) {
            cpyCartItem.push({
                ...product,
                quantity:1,
                totalPrice: product.price
            })
            setCartQuantity(cartQuantity + 1) 
        }
      setCartItem(cpyCartItem)
      

      {/*//saving the newly add to cart products into localstorage*/}
      localStorage.setItem('items', JSON.stringify(cpyCartItem))
      localStorage.setItem('cquantity', JSON.stringify(cartQuantity + 1))
      
    }

    {/*//handling cart product quantity increase on button clicked*/}
    function handleIncrease(id) {
        setCartItem((prevItem) => prevItem.map((item) => (
            item.id === id ? {...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price} : item
        )))
    }

    {/*handling cart product quantity decrease on button clicked*/}
    function handleDecrease(id) {
       setCartItem((prevItem) => prevItem.map((item) => (
        item.id === id  && item.quantity >= 2 ? {...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1 ) * item.price} : item
       )))
    }

    {/*//handling cart product removal on button clicked*/}
    function handleRemove(product) {
        let cpyOfItem = [...cartItem]
        let indextOfItem = cpyOfItem.findIndex((item) => item.name === product.name)
        cpyOfItem.splice(indextOfItem, 1)
        setCartQuantity(cartQuantity - 1)
        setCartItem(cpyOfItem)
        // localStorage.setItem('items', JSON.stringify(cpyOfItem))
        // localStorage.setItem('cquantity', JSON.stringify(cartQuantity - 1))
        
    }

    {/*fecthing add to cart items from localstorage to avoid lost of data on page reload*/}
    // useEffect(()=> {
    //     setCartItem(JSON.parse(localStorage.getItem('items') || []))
    //     setCartQuantity(JSON.parse(localStorage.getItem('cquantity') || 0))
    //     return () => {}
    // }, [])


     {/*handling rerendering of page anytime handleRemove function is called*/}
    //  useEffect(()=> {
    //     setCartQuantity(cartQuantity)
        
    // },[handleRemove])


    
    {/*//calculating grand total price8*/}
    function calcTotal() {
        cartItem.map((item) => {
            totalp += item.totalPrice
        })
        console.log(totalp)
    }

    calcTotal()

    return (
      <cartItemContext.Provider value={{cartItem, cartQuantity, 
      handleAddToCart,handleIncrease, handleDecrease,handleRemove, totalp, cartItem }}>
        {children}
      </cartItemContext.Provider>
    )
}

export default CartItemProvider