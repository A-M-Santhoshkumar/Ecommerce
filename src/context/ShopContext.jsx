import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";
import React, { useState } from "react";
export const ShopContext = createContext();


export const ShopContextProvider = (props) => {
    
     const currency ='₹';
     const deliveryFee = 30;
 
      const [search, setSearch] = useState('');
      const [showSearch, setShowSearch] = useState(true);

    const value = {
     products,
      currency, 
      deliveryFee,
      search,
      setSearch,
      showSearch,
      setShowSearch
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}





