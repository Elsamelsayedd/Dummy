import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import SearchProducts from '../SearchProducts/SearchProducts';


export default function Products() {

    const [products, setProducts] = useState([])

    async function getProducts() {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products`)
            console.log(data.products);
            setProducts(data.products)

        } catch (error) {
            console.log(error);

        }

    }



    useEffect(() => {
        getProducts()
    }, [])





    return (
        <>

            {/* <SearchProducts /> */}



            <div className='md:flex flex-wrap gap-3 w-full mx-auto text-center  mb-5'>
                {products.length ? products.map((product) => <Link to={`${product.id}`} key={product.id} className='cursor-pointer group xl:w-[19%] lg:w-[32%]  md:w-[48%] hover:bg-[rgb(100,96,96)] bg-white shadow-2xl hover:-translate-y-2 duration-500'>
                    <p className='text-xl font-bold my-3 pt-4'>{product.category.toUpperCase()}</p>
                    <div className='mb-2'>
                        <img className='w-full' src={product.images[0]} alt={product.title} />

                    </div>
                    <p className='font-semibold mb-2'>{product.title}</p>
                    <p>$ {product.price}</p>
                    <button to={'/contact'} className='bg-black text-white my-4 px-4 py-2 rounded-xl '>Add to cart</button>

                </Link>) : <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>

                    <RotatingLines
                        visible={true}
                        height="96"
                        width="96"
                        color="#FE9A00"
                        strokeWidth="5"
                        animationDuration="0.75"
                        ariaLabel="rotating-lines-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />


                </div>}

            </div>











        </>
    )
}





