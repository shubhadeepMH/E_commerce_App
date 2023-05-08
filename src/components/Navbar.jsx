import React, { useEffect, useState } from 'react'
import logo from '../assets/social.png'
import { BsSearch } from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import app from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
    const [user,setUser]=useState(null)

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    let navigate = useNavigate();



    const cartData = useSelector((state) => {
        return state.basket;
    })
    //Firebase modules for authentication


    const handleAuth = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })

    }
    //Get Signed in user data
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
               setUser(user);
            }
        });
    })
   


    const redirectTocheckout = () => {
        if(user){
            navigate('/check-out')
        }else{
            alert('Please Sign in')
        }
       

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
                        <p>{user?`Hi ${user.displayName}`:`Sign Up`}</p>
                        <p >Account & Lists</p>
                    </div>


                    <div onClick={() => navigate('/orders')} className=' hover:underline cursor-pointer'>
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
            <div className='bg-blue-950 px-2 text-xs text-white flex items-center space-x-3 md:text-lg'>

                <DropdownMenu />

                <p onClick={()=>navigate('/')} className='cursor-pointer hover:underline'>Home</p>
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
