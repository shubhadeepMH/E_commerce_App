import React from 'react'
import logo from '../assets/social.png'
import { BsSearch } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import { useAuth0 } from "@auth0/auth0-react";
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
    let navigate=useNavigate();
    

    const cartData=useSelector((state)=>{
        return state.basket;
    })
    //Auth0 modules for authentication
    const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

    const handleAuth = () => {
        // Authentication checking
        !isAuthenticated && loginWithRedirect();

    }
    const redirectTocheckout=()=>{
       
        navigate('/check-out')
      
    }

    return (
        <div className='sticky z-10 top-0'>
            {/* upper Navbar */}
            <div className='  h-[3rem] flex justify-between bg-gradient-to-r from-pink-500 via-purple-500 to-blue-950'>

                {/* Logo */}
                <img className='h-[2rem] m-[.5rem] ' src='https://seeklogo.com/images/Z/Zap-logo-2854994DAC-seeklogo.com.png' />

                <div className=' hidden bg-pink-500 rounded-r-md m-2 sm:flex h-[2rem] items-center flex-grow flex-shrink cursor-pointer hover:bg-pink-600 '>
                    {/* Search Bar */}
                    <input className='p-[.23rem] flex-grow outline-none  mr-6' type='search' />
                    <BsSearch className='text-center text-white font-extrabold mr-3 h-6 ' />
                </div>
                <div className=' text-white flex items-center space-x-3 text-sm m-2 '>
                    {/* Right Corner */}
                    <div onClick={handleAuth} className=' hover:underline cursor-pointer'>
                        <p>{isAuthenticated ? `Hi ${user.name.slice(0, user.name.indexOf('@'),)}` : `Sign Up`}</p>
                        <p >Account & Lists</p>
                    </div>


                    <div onClick={()=>navigate('/orders')} className=' hover:underline cursor-pointer'>
                        <p>Returns</p>
                        <p>& Orders</p>
                    </div>
                    <div className='flex hover:underline cursor-pointer' onClick={redirectTocheckout}>
                        <p className=' text-black bg-pink-500 absolute top-0 right-10 px-1 justify-center flex rounded-md'>{cartData.length}</p>
                        <BsCart3 className='text-3xl ' />
                        <p className='mt-2'>Basket</p>
                    </div>


                </div>
            </div>
            {/* Lower Navbar */}
            <div className='bg-blue-950 px-2 text-sm text-white flex items-center space-x-3'>
               
                <DropdownMenu/>

                <p className='cursor-pointer hover:underline'>All</p>
                <p className='cursor-pointer hover:underline'>Reels video</p>
                <p className='cursor-pointer hover:underline'>Fashion Exclusive</p>
                <p className='cursor-pointer hover:underline'>Today's Deal</p>
                <p className='hidden cursor-pointer hover:underline lg:inline'>Men's</p>
                <p className='hidden cursor-pointer hover:underline lg:inline'>Women's</p>
                <p className='hidden cursor-pointer hover:underline lg:inline'>Kids</p>
                <p className='hidden cursor-pointer hover:underline lg:inline'>Electronics</p>
                <p className='hidden cursor-pointer hover:underline lg:inline'>Home Applyences</p>
               

            </div>
        </div>
    )
}
