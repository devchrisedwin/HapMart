import { createContext, useEffect, useState } from "react";



export const wishList = createContext(null)

function WishListProvider({children}) {
    const [pWishList, setPWishList] = useState([])
    const [wishListCount, setWishListCount] = useState(0)

    function handleAddToWishList(product) {
        const cpyProductWishList = [...pWishList]
        const findItemByIndex = cpyProductWishList.findIndex((item) => item.name === product.name)

        if(findItemByIndex === -1) {
            cpyProductWishList.push({...product})
            setWishListCount(wishListCount + 1)
        }
        setPWishList(cpyProductWishList)
    }


    return(
        <wishList.Provider value={{pWishList, wishListCount, handleAddToWishList}}>
            {children}
        </wishList.Provider>
    )
}

export default WishListProvider