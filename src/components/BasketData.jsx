import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../../store/slices/CartSlice';

export default function BasketData(props) {
    let dispatch=useDispatch();
    // console.log(props.data.id);
    const handleRemoveFromBasket=(id)=>{
        // console.log(data);
        dispatch(removeFromBasket(id));
    }
    return (
        <div className='bg-white flex m-6 h-[8rem] flex-grow flex-shrink '>
            <img className='h-[6rem] w-[6rem] m-2 ' src={props.data.image} alt="" />
            <div className='p-3 m-3 flex-grow'>
                <p className=' font-bold text-sm italic hover:underline'>{props.data.title.substring(0,18)}</p>
                <p className='font-bold p-2 text-amber-500'>{ props.data.price} $</p>
                <p className='text-xs'>{props.data.description.substring(0, 40)}</p>
            </div>
            
            <button onClick={()=>handleRemoveFromBasket(props.data.id)} className=' h-9 rounded-md mt-[2.5rem] bg-gradient-to-r from-pink-500 to-blue-600 text-xs text-white font-bold hover:underline'>Remove from Basket</button>
            

        </div>
    )
}
