import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const {getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-5 font-medium bg-black px-15 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <Link to="/">
            <img src="/logo.svg" className='w-36' alt="" />
        </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-white'>
            <NavLink to='/' className={'flex flex-col items-center gap-1'}>
                <p className='text-white'>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden'/>
            </NavLink>

            <NavLink to='/products' className={'flex flex-col items-center gap-1'}>
                <p className='text-white'>PRODUCTS</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden'/>
            </NavLink>

            {/* <NavLink to='/about' className={'flex flex-col items-center gap-1'}>
                <p className='text-white'>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden'/>
            </NavLink> */}

            <NavLink to='/contact-us' className={'flex flex-col items-center gap-1'}>
                <p className='text-white'>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-white hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text gray-500 rounded '>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 cursor-pointer' alt="" />
                <p className='absolute right-[-5px] bottom[-5px] w-4 text-center leading-4 bg-white text-black aspect-square rounded-full text-[6px]'>
                    {getCartCount()}
                </p>

            </Link>

            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* Sidebar menu */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-black transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-white'>
                <div onClick={()=>setVisible(false)} className='flex items gap-4 p-3'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180' alt="" />
                    <p className='text-white'>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/'>HOME</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/products'>PRODUCTS</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 ' to='/contact-us'>CONTACT</NavLink>
            </div>

        </div>
    </div>
  )
}

export default Navbar
