import React from 'react';
import './App.css';
import { data } from './data';
import {useState} from 'react'
import Products from './Products';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import FirstPage from './FirstPage';
import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link

} from "react-router-dom";


function App() {
  return(
    <div>
      
      <Router>
        <nav>
          <Link to = '/' className='link'> Home</Link>
          <Link to = '/Home' className='link'>Shop</Link>
          <Link to = '/About' className='link'>About</Link>
          <Link to = '/Contact' className='link'>Contacts </Link>

        </nav>
        <div>
          <h2 className='title'>New style</h2>
        </div>
        <Routes>
          <Route path = '/' element={<FirstPage/>}/>
          <Route path = '/Home' element={<Home/>}/>
          <Route path = '/About'  element={<About/>}/>
          <Route path = '/Contact'  element={<Contact/>} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default App;
