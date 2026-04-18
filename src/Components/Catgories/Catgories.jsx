import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { Link } from 'react-router-dom'


export default function Catgories() {

    const [catgories, setCatgories] = useState([])

    async function getCatgories() {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products/categories`)
            console.log(data);
            setCatgories(data)

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {

        getCatgories()



    }, [])





    return (
        <>
            <div className='md:flex flex-wrap gap-3 w-full mx-auto text-center  mb-5'>
                {catgories.length ? catgories.map((category, index) => <Link to={category.slug} key={index} className='bg-white cursor-pointer rounded-xl xl:w-[19%] lg:w-[32%]  md:w-[48%] shadow-xl mb-4 text-center px-4  py-10 hover:-translate-y-2.5 duration-700'>
                    <h4 className='text-xl font-semibold mb-2'>⚡ {category.name}</h4>
                </Link>) :
                    <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>

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



