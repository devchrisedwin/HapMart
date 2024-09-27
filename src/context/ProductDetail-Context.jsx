import {children, createContext, useEffect, useState } from "react";
import products from '../data/data'

export const productDetailContext = createContext(null)

function ProductDetailProvider({children}) {
    const [productDetails, setProductDetails] = useState([])

    function handleDetails(product) {
            products.map((item) => {
                item.name === product.name ?  setProductDetails(product) : []
            })
    }

    return(
        <productDetailContext.Provider value={{handleDetails, productDetails}}>
            {children}
        </productDetailContext.Provider>
    )
}

export default ProductDetailProvider