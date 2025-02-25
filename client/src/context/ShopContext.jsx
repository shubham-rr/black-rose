import { createContext, useEffect, useState } from "react";
import { products } from "../data/products";
import { assets } from '../assets/assets';
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10;

    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId) => {

        let cartData  = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1;
            } else {
                cartData[itemId] = 1;
            }
            
        } 
        else {
            cartData[itemId] = {};
            cartData[itemId] = 1;
        }
        setCartItems(cartData);
    }

    // const getCartCount = () => {
    //     let totalCount = 0;
    //     for(const items in cartItems){
    //         for(const item in cartItems[items]){
    //             try {
    //                 if (cartItems[items][item]>0) {

    //                     totalCount += cartItems[items][item];
    //                 }
    //             } catch (error) {
    //             }
    //         }
    //     }
    //     return totalCount;
    // }
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }
        return totalCount;
    };

    const updateQuantity = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            const itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[itemId];
            }
        }
        return totalAmount;
    };

    const value = {
        products, currency, delivery_fee,assets, cartItems,
        addToCart, getCartCount, updateQuantity, getCartAmount,
        navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );

}

export default ShopContextProvider;