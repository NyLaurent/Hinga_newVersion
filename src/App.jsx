import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Service from './Components/Service'
import About from './Components/About'
import Products from './Components/Products'
import Blog from './Components/Blog'
import News from './Components/news'
import Footer from './Components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

<Navbar/>
   <Home/>
   <Service/>
   <About/>
   <Products></Products>
   <Blog></Blog>
   <News></News>
   <Footer></Footer>

   
    </div>
    

   
    
    
   
  )
}

export default App
