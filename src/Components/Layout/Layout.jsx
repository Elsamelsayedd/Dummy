import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <NavBar />
            <div className="container w-[95%] m-auto pt-20 ">

                <Outlet></Outlet>
            </div>

        </>

    )
}
