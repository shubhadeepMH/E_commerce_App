import React from 'react'
import { useSelector } from 'react-redux'
import BasketData from '../components/BasketData';
import { useNavigate } from 'react-router-dom';

export default function CheckOut() {
    let navigate = useNavigate()
    const basketItem = useSelector((state) => {
        return state.basket;
    })
    // console.log(basketItem);
    let getPrice = 0;
    basketItem.map((item, index) => {
        getPrice = getPrice + item.price;
    })
    const redirect = () => {
        navigate('/payment')
    }
    return (
        <div >
            <div className=' p-2 lg:flex  flex-grow'>
                {/* left bar */}
                <div className='flex-grow' >
                    <div className="banner">
                        <img className='w-full h-80' src="https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg" alt="" />
                        <div className='bg-slate-200 m-1 p-2 '>
                            <p className='font-bold font-serif '>* {`${basketItem.length == 0 ? 'Your Basket is empty' : 'Your Items'}`}</p>
                            <hr />
                        </div>
                    </div>
                    {/* Items */}
                    <div>
                        {basketItem && basketItem.map((item, index) => {
                            return <BasketData key={index} data={item} />
                        })}
                    </div>
                </div>
                {/* Right Bar */}
               {basketItem.length!=0 &&  <div className='bg-slate-200 mt-10 shadow-md relative bottm-0 shadow-black flex-grow flex-shrink lg:w-fit lg:mx-3 lg:mt-0'>
                  <div className=' p-2 lg:sticky lg:top-0'>
                        <p className='p-2 font-bold text-black  lg:mt-0 '>Your cart: <span className='text-green-600'>{Math.floor(getPrice)}$</span> </p>
                        <hr ></hr>
                        <button className='bg-pink-500 w-full  text-white rounded-md font-serif font-bold focus:bg-orange-300  hover:bg-orange-400  lg:mt-0' onClick={redirect}>CheckOut</button>
                    </div>


                </div>}

            </div>
        </div>
    )
}
