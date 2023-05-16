import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';


export default function Home() {
    const [products,setProducts]=useState([])

    const getData=async()=>{
        let res=await fetch('https://fakestoreapi.com/products')
        res=await res.json()
        setProducts(res)
    }
    
     useEffect(()=>{
        getData()
     },[])
    return (
        <>
            <Navbar className='' />

            {/* Body */}
            <div className="body flex justify-center">
                <div className='max-w-5xl'>
                    <Carousel
                        infiniteLoop
                        autoPlay
                        showStatus={false}
                        showThumbs={false}
                        interval={3000}
                    >

                        <div className='h-[25rem] z-0'>
                            <img className='h-[25rem]' src="https://i.pinimg.com/originals/b3/7b/8b/b37b8b8f39dca274afdfade54efe02ca.jpg" />

                           
                        </div>
                        <div className='h-[25rem]'>
                            <img className='h-[25rem]' src="https://images.template.net/108414/fashion-sale-banner-template-85svg.jpg" />
                            
                        </div>
                        <div className='h-[25rem]'>
                            <img className='h-[25rem]' src="https://collider.com/wp-content/uploads/inception_movie_poster_banner_01.jpg" />
                           
                        </div>
                    </Carousel>
                    <div className='justify-center z-20 pl-5  data m-3 grid grid-flow-row-dense  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
                    {products.slice(0,4).map((item,index)=>{
                        return  <Product key={index} data={item}/>
                    })}
                       <img className='w-[15rem] md:col-span-3 md:w-auto lg:col-span-4' src="https://images.remotehub.com/d42c62669a7711eb91397e038280fee0/original_thumb/ec1eb042.jpg?version=1618112516" alt="" />

                       {products.slice(5,8).map((item,index)=>{
                        return  <Product className='' key={index} data={item}/>
                    })}
                    <img className='w-[15rem] sm:w-auto  md:col-span-2 lg:col-span-3' src="https://i.ytimg.com/vi/W868WkrOOog/maxresdefault.jpg" alt="" />

                    {products.slice(9,products.length).map((item,index)=>{
                        return  <Product className='' key={index} data={item}/>
                    })}                    

                    </div>

                </div>
            </div>

        </>
    )
}
