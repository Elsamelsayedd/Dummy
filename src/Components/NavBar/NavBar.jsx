import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {


    const [isOpen, setIsOpen] = useState(false)
    return (
        <>

            <div className="bg-mauve-900 fixed z-20 top-0 w-full px-4 border-b border-default">
                <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link className='text-2xl text-white'>Dummy</Link>

                    <button >

                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} type="button" className="cursor-pointer inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
                    </button>
                    <div className={`${isOpen ? 'block' : 'hidden'}  w-full md:block md:w-auto`} id="navbar-default">
                        <ul className="font-medium text-white flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li>
                                <NavLink to={''} onClick={() => setIsOpen(false)} className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">About</NavLink>
                            </li>

                            <li>
                                <NavLink to={'products'} onClick={() => setIsOpen(false)} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Products</NavLink>
                            </li>

                            <li>
                                <NavLink to={'catgories'} onClick={() => setIsOpen(false)} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Catgories</NavLink>
                            </li>

                            <li>
                                <NavLink to={'search'} onClick={() => setIsOpen(false)} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Seacrh</NavLink>
                            </li>

                            <li>
                                <NavLink to={'/contact'} onClick={() => setIsOpen(false)} className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>




        </>
    )
}
