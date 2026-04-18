import axios from 'axios'
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner'


export default function SearchProducts() {


    const [products, setProducts] = useState([])


    async function SearchProduct(values) {
        try {
            let { data } = await axios.get(`https://dummyjson.com/products/search?q=${values}`)
            console.log(data);
            setProducts(data.products)
        } catch (error) {
            console.log(error);

        }
        console.log(values);

    }








    return (
        <>

            <form className="max-w-md mx-auto mb-5">
                <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 inset-s-0  flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 cursor-pointer h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                    </div>
                    <input type="search" onChange={(e) => SearchProduct(e.target.value)} id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search" />
                </div>
            </form>




            <div className='md:flex flex-wrap gap-3 w-full mx-auto text-center  mb-5'>
                {products.length ? products.map((product) => <div key={product.id} className=' group xl:w-[19%] lg:w-[32%]  md:w-[48%] hover:bg-[rgb(100,96,96)] bg-white shadow-2xl hover:-translate-y-2 duration-500'>
                    <p className='text-xl font-bold my-3 pt-4'>{product.category.toUpperCase()}</p>
                    <div className='mb-2'>
                        <img className='w-full' src={product.images[0]} alt={product.title} />

                    </div>
                    <p className='font-semibold mb-2'>{product.title}</p>
                    <p>$ {product.price}</p>
                    <button to={'/contact'} className='bg-black text-white my-4 px-4 py-2 rounded-xl '>Add to cart</button>

                </div>) : ''}

            </div>




        </>
    )
}
