import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Products from './Components/Products/Products'
import Contact from './Components/Contact/Contact'
import Notfound from './Components/Notfound/Notfound'
import Catgories from './Components/Catgories/Catgories'
import CatgoriesName from './Components/CatgoriesName/CatgoriesName'
import Seacrh from './Components/Search/Seacrh'
import ProductDetailes from './Components/ProductDetailes/ProductDetailes'



let router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <About /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productsId', element: <ProductDetailes /> },
      { path: 'contact', element: <Contact /> },
      { path: 'catgories', element: <Catgories /> },
      { path: 'catgories/:catgoriesName', element: <CatgoriesName /> },
      { path: 'catgories/:catgoriesName/:productsId', element: <ProductDetailes /> },
      { path: 'catgories', element: <Catgories /> },
      { path: 'search', element: <Seacrh /> },
      { path: '*', element: <Notfound /> },


    ]
  }
])

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <RouterProvider router={router} ></RouterProvider>




    </>
  )
}

export default App
