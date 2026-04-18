import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick';


export default function ProductDetailes() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    let { productsId } = useParams()
    const [detailes, setDetailes] = useState([])

    console.log(productsId);

    async function getProductDetailes(productsId) {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products/${productsId}`)
            console.log(data);
            setDetailes(data)
        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {


        getProductDetailes(productsId)

    }, [])



    return (

        <>


            <div className='lg:flex gap-4 text-center lg:text-start my-5 items-center'>

                {detailes ?
                    <>
                        <div className='lg:w-1/3 mb-8'>
                            <Slider.default {...settings}>
                                {detailes.images ? detailes.images.map((img) => <img className='w-full' src={img} alt={detailes.title} />
                                ) : ''}

                            </Slider.default>

                        </div>
                        <div className='w-full my-5'>
                            <h1 className='text-4xl font-bold my-2'>{detailes.brand}</h1>
                            <p className='text-xl my-2'>{detailes.description}</p>
                            <p className='text-2xl font-semibold my-2'>{detailes.title}  </p>
                            <p className='text-3xl font-extrabold my-4'>{detailes.price} $</p>


                            <Link to={'/contact'} className='bg-black cursor-pointer text-white my-4 px-15 py-2 rounded-xl w-full '>Add to cart</Link>


                        </div>

                    </>



                    : ''}


            </div>


        </>

    )
}
