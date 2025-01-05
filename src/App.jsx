import {useRef, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data/data.json'
import Header from './components/Header'
import Body from './components/Body'

const Footer = () => {

}

const App = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

export default App
