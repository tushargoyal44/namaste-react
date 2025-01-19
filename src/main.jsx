
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AboutUs } from './components/AboutUs.jsx'
import { ContactUs } from './components/ContactUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
   path : "/aboutus",
   element : <AboutUs /> 
  }
 

])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
