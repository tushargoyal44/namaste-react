
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import { AboutUs } from './components/AboutUs.js'

import Body from './components/Body.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound.js'
import RestaurantMenu from './components/RestaurantMenu.js'
import React from 'react'



const router = createBrowserRouter([
  {
    path : "/",
    element : <App />,
    children : [
      {
        path: "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <AboutUs /> 
       },
       {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
       }
    ]
  },
       {
         path : "*",
         element : <PageNotFound />
       }
 
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)