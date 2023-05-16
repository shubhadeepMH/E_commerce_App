import React from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../store/slices/CartSlice';

export default function Product(props) {
    const dispatch=useDispatch();
    
    const addToCart=(data)=>{
        dispatch(addToBasket(data));
    }
    return (
        <>
            <div className=' rounded-md mt-2  w-60   p-0 shadow-md shadow-black flex flex-col justify-center'>
                <p className='text-right italic mr-1  '>Exclusive</p>
                <img className='h-[8rem] ml-9 w-[8rem]' src={props.data.image} alt=""  />
                <p className='p-2 font-serif cursor-pointer hover:underline text-blue-900 italic'>{props.data.title.substring(0,50)}...</p>
                <p className='text-yellow-600  p-2'>Price: {props.data.price} $</p>
                <p className='p-2'>{props.data.description.substring(0,80)}...</p>

                <button className=' relative bottom-1 m-2 p-[.3rem] rounded bg-blue-700 hover:bg-blue-500 focus:bg-blue-700 text-white font-bold' onClick={()=>addToCart(props.data)}>Add To Basket</button>
            </div>

        </>
    )
}
