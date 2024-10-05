import {children, createContext, useEffect, useState } from "react";
import products from '../data/data'
import flashProduct from '../data/flashsales'
import { useParams } from "react-router-dom";

export const productDetailContext = createContext(null)

function ProductDetailProvider({children}) {
    const [productDetails, setProductDetails] = useState([])
    
   

    function handleDetails(product) {
        setProductDetails(product)
    }

    



    return(
        <productDetailContext.Provider value={{handleDetails, productDetails}}>
            {children}
        </productDetailContext.Provider>
    )
}

export default ProductDetailProvider