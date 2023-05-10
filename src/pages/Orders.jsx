import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { collection, getDocs, getFirestore,query,where } from "firebase/firestore";
import app from "../firebase";
import OrderItem from "../components/OrderItem";
import { getAuth } from "firebase/auth";

const Orders = () => {
  const [ordersData, setOrdersData] = useState([])
  let getUserId=null
  // middlewares
  const db = getFirestore(app);
  const auth=getAuth()

  //  data of previous orders
  const getOrdersData = async () => {
    const q = query(collection(db, "orders"), where("userId", "==",getUserId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().item);
      setOrdersData(prevData => [...prevData, doc.data().item]);

    });
  }
  useEffect(() => {
    //First of all getting userId
    let getUser=auth.currentUser;
    if(getUser!=null){
      getUserId=getUser.uid;
      
    }
    //Now Fetch order of user according to userId
    getOrdersData()
    
  }, [])




  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div>
          <p className=" text-center mt-3 font-serif font-extrabold text-2xl"> Your Orders</p>
        </div>
        <hr />
        <div className="flex justify-center flex-grow">
        <div className="order-container  ">
          {ordersData && ordersData.map((item, index) => {
            return <OrderItem key={index} data={item} />
          })}

        </div>
        </div>
        
      </div>

    </div>
  );
};

export default Orders;
