import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/data.json'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, Outlet } from 'react-router-dom'


const App = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    )
}

export default App
