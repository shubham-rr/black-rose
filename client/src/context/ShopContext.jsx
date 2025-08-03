﻿// import { createContext, useEffect, useState } from "react";
// import { products } from "../data/products";
// import { assets } from '../assets/assets';
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = "$";
//     const delivery_fee = 10;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [search,setSearch] = useState('');
//     const[token,setToken] = useState('')
//     const [showSearch, setShowSearch] = useState(false);
//     const [brandFilter, setBrandFilter] = useState([]);

//     const navigate = useNavigate();

//     const addToCart = async (itemId) => {

//         let cartData  = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId]) {
//                 cartData[itemId] += 1;
//             } else {
//                 cartData[itemId] = 1;
//             }
            
//         } 
//         else {
//             cartData[itemId] = {};
//             cartData[itemId] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
                
//                 await axios.post(backendUrl+'/api/cart/add', {itemId}, {headers: {token}});
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
                
//             }
            
//         }
//     }

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const itemId in cartItems) {
//             totalCount += cartItems[itemId];
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl+'/api/cart/update', {itemId, quantity}, {headers: {token}});
//             } catch (error) {
//                 console.log(error)
//                 res.json({success:false, message:error.message})
//             }
//         }

//     };

//     const getUserCart = async( token ) =>{
//         const response = await axios.post(backendUrl+'/api/cart/get',{}, {headers: {token}});
//         if(response.data.success){
//             setCartItems(response.data.cartData);
//         } else {
//             console.log(error);
            
//             toast.error(response.data.message);
//         }
//     }

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const itemId in cartItems) {
//             const itemInfo = products.find((product) => product._id === itemId);
//             if (itemInfo) {
//                 totalAmount += itemInfo.price * cartItems[itemId];
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl+'/api/product/list');
//             if(response.data.success){
//                 setProducts(response.data.products);
//             } else {
//                 toast.error(response.data.message);
//             }

//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
            
//         }
//     }

//     useEffect(() => {
//         getProductsData();
//     }
//     , []);

//     useEffect(()=>{
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'))
//             getUserCart(localStorage.getItem('token'));
            
//         }
//     })

//     const applyBrandFilter = (brand) => {
//         setBrandFilter([brand]);
//         navigate('/products');
//     };


    

//     const value = {
//         products, currency, delivery_fee,assets, cartItems,
//         addToCart, getCartCount, updateQuantity, getCartAmount, setCartItems,
//         navigate, backendUrl,showSearch, setShowSearch, search, setSearch,
//         token, setToken, applyBrandFilter, brandFilter
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );

// }

// export default ShopContextProvider;

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "$";
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [token, setToken] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [brandFilter, setBrandFilter] = useState([]);

    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId] += 1;
        } else {
            cartData[itemId] = 1;
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            totalCount += cartItems[itemId];
        }
        return totalCount;
    };

    const updateQuantity = async (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    const getUserCart = async (token) => {
        const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
        if (response.data.success) {
            setCartItems(response.data.cartData);
        } else {
            console.log(error);
            toast.error(response.data.message);
        }
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

    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
    }, [token]);

    const applyBrandFilter = (brand) => {
        setBrandFilter([brand]);
        navigate('/products');
    };

    const value = {
        products, currency, delivery_fee, cartItems, addToCart, getCartCount, updateQuantity, getCartAmount, setCartItems,
        navigate, backendUrl, showSearch, setShowSearch, search, setSearch, token, setToken, applyBrandFilter, brandFilter
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;