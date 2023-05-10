import React from 'react'

export default function OrderItem(props) {
    let { image, title, description, price } = props.data;
    return (

        <div>
            <div className=' rounded-md mx-3 mt-4 p-3 shadow-md shadow-black max-w-2xl '>
                <div>
                    <div className='flex'>
                        <img className='h-[16vh] w-[26vw]   md:text-start  md:h-[30vh] md:w-[22vw]' src={image} alt="" />
                        <p className='text-green-500 mx-2 font-sans text-xs font-extrabold md:mx-auto sm:text-base mt-[10%]'>Order Status: <span className='text-black font-serif font-bold'>Delivered Soon</span> </p>
                    </div>

                    <div className='mt-3'>
                        <p className='font-serif font-bold text-base text-violet-400 hover:underline  cursor-pointer md:text-lg'>Title: <span className='italic text-black'>{title.substring(0, 50)}</span></p>
                        <p className='font-serif text-sm text-yellow-500 md:text-lg'>Price: <span className='font-sans text-green-500 '>{price}$</span></p>
                    </div>
                </div>

                <div className='align-center'>
                    <p className='text-violet-400 text-sm font-serif'>Description: <span className='text-black'>{description.substring(0, 130)}</span> </p>
                    <p className='text-yellow-400 italic text-lg font-extrabold'>Rating: <span className='text-black font-bold font-serif'>{Math.floor(Math.random() * (5 - 1 + 1) + 1)}</span></p>
                </div>
            </div>


        </div>
    )
}
