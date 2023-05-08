import React, { useState} from 'react'
import Navbar from './Navbar'
import check from '../assets/check.png'
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate} from 'react-router-dom';

const override = {
    display: "block",
    margin: "0 auto",
  };


export default function Payment() {
    const [paymentDone, setPaymentDone] = useState(true)
    const [showOverlay, setShowOverlay] = useState(false);
    const [orderDone, setOrderDone] = useState(false);
    const [userDetails,setUserDetails]=useState({
        name:"",
        phone:"",
        address:"",
        paymentMethod:""

    })
    let navigate=useNavigate()
    let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");
    const handleSubmit = (event) => {
        event.preventDefault();
        setShowOverlay(true)
        setTimeout(() => {
            setLoading(false)
            setOrderDone(true)
        }, 3000);

    }
    
    
     
  
   
   

    return (
        <div>
            <Navbar />
            {/* Payment success component(order Done) Overlay */}
            <div>

                {showOverlay && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-10">
                         {orderDone && <h2 className="text-lg font-bold mb-4">Order Confirmed</h2>}
                            <ClipLoader
                                color='blue'
                                loading={loading}
                                cssOverride={override}
                                size={50}
                                aria-label="Loading Spinner"
                                data-testid="loader"
                            />
                            {orderDone && <img className='h-20 w-20 mx-auto' src={check} alt="" />}
                            <button onClick={()=>navigate('/orders')} className=' mt-6 bg-green-500 font-bold rounded-md shadow-md p-2 focus:bg-green-300'>See your orders</button>
                        </div>
                    </div>
                )}
            </div>
            {/* Order Details */}
            <div className="z-0 bg-gray-200 flex justify-center max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className=" ">
                    <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="name">Name:</label>
                            <input required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" name="name" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="phone">Phone Number:</label>
                            <input required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" id="phone" name="phone" />
                        </div>

                        <div className="mb-4">
                            <label  className="block text-gray-700 font-bold mb-2" for="address">Address:</label>
                            <textarea required className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" name="address"></textarea>
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" for="payment">Payment Method:</label>
                            <div className="flex">
                                <input defaultChecked className="mr-2 leading-tight" type="radio" id="creditcard" name="payment" value="creditcard" />
                                <label className="text-gray-700 font-bold" for="creditcard">Credit Card</label>

                                <input className="mx-2 leading-tight" type="radio" id="debitcard" name="payment" value="debitcard" />
                                <label className="text-gray-700 font-bold" for="debitcard">Debit Card</label>

                                <input className="mx-2 leading-tight" type="radio" id="paypal" name="payment" value="cod" />
                                <label className="text-gray-700 font-bold" for="paypal">Cash On Delivery</label>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button  type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
