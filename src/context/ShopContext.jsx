import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();


export const ShopContextProvider = (props) => {
    
     const currency ='₹';
     const deliveryFee = 30;


    const value = {
     products,
      currency, 
      deliveryFee,
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}





