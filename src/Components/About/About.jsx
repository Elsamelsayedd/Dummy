import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>

            <section >
                <div className='bg-gray-900 text-center py-24 mb-25'>
                    <h1 className='text-white text-3xl font-bold lg:text-5xl m-4 pb-10'>Redefining Online Shopping</h1>

                    <p className='text-white'>Smart filtering. Seamless experience. Faster decisions.</p>
                </div>


                <div className='text-center mb-25'>
                    <h2 className='text-2xl font-bold text-gray-700 pb-6'>Who We Are</h2>
                    <p className='text-gray-500'>We are a modern e-commerce platform focused on delivering a smooth and efficient shopping experience.<br /> Our goal is to simplify product discovery using smart filtering and dynamic UI.</p>
                </div>


                <div className='lg:w-[60%]  text-center mx-auto lg:flex mb-25'>
                    <div className='text-center lg:w-1/2 p-2'>
                        <h3 className='text-xl font-bold mb-3'>🎯 Our Mission</h3>
                        <p>To create a fast, intuitive, and user-friendly platform where users can easily explore and purchase products.</p>
                    </div>
                    <div className='text-center lg:w-1/2 p-2'>
                        <h3 className='text-xl font-bold mb-3'>🚀 Our Vision</h3>
                        <p>To build scalable e-commerce solutions that provide real-world shopping experience using modern web technologies.</p>
                    </div>
                </div>


                <div className='md:flex md:flex-wrap lg:flex-nowrap mx-auto lg:w-[90%] mb-25'>
                    <div className='bg-white rounded-xl md:w-[45%] lg:w-1/4 shadow-xl mb-4  px-4 mx-2 py-10 hover:-translate-y-2.5 duration-700'>
                        <h4 className='text-xl font-semibold mb-2'>⚡ Fast Performance</h4>
                        <p>Optimized UI ensures smooth browsing experience.</p>
                    </div>
                    <div className='bg-white rounded-xl md:w-[45%] lg:w-1/4 shadow-xl mb-4 px-4 mx-2 py-10 hover:-translate-y-2.5 duration-700'>
                        <h4 className='text-xl font-semibold mb-2'>🛒 Smart Cart</h4>
                        <p>Real-time cart updates with efficient state management.</p>
                    </div>
                    <div className='bg-white rounded-xl md:w-[45%] lg:w-1/4 shadow-xl mb-4 px-4 mx-2 py-10 hover:-translate-y-2.5 duration-700'>
                        <h4 className='text-xl font-semibold mb-2'>🔍 Advanced Filtering</h4>
                        <p>Quickly find products using category & search filters.</p>
                    </div>
                    <div className='bg-white rounded-xl md:w-[45%] lg:w-1/4 shadow-xl mb-4 px-4 mx-2  py-10 hover:-translate-y-2.5 duration-700'>
                        <h4 className='text-xl font-semibold mb-2'>📱 Responsive Design</h4>
                        <p>Works seamlessly across all devices.</p>
                    </div>
                </div>


                <div className='flex md:w-[30%]  mx-auto mb-25'>
                    <div className='w-1/3 text-center me-4'>
                        <h5 className='text-3xl font-bold  mb-4 '>100+</h5>
                        <p className=''>Products</p>
                    </div>
                    <div className='w-1/3 text-center me-4'>
                        <h5 className='text-3xl font-bold mb-4'>50+</h5>
                        <p>Happy Users</p>
                    </div>
                    <div className='w-1/3 text-center me-4'>
                        <h5 className='text-3xl font-bold mb-4'>24/7</h5>
                        <p>Support</p>
                    </div>
                </div>


                <div className='bg-black text-center py-20 mb-4'>
                    <h1 className='text-white  text-xl font-bold lg:text-3xl mt-4  pb-4'>Start Exploring Now 🛍️</h1>

                    <p className='text-white mb-10'>Discover products and enjoy a seamless shopping experience.</p>

                    <Link to={'/products'} className='bg-white m-14 px-6 py-2 rounded-xl '>Shop Now</Link>
                </div>

            </section>





        </>
    )
}
