import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Signup from './landing_page/signup/Signup';
import Aboutpage from './landing_page/about/Aboutpage';
import Productpage from './landing_page/products/Productpage';
import Supportpage from './landing_page/support/Supportpage';
import Nvabar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Pricingpage from './landing_page/pricing/Pricingpage';
import Notfoundpage from './landing_page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nvabar/>
    <Routes>
      
      <Route path='/' element={<Homepage/>} />

      <Route path='/signup' element={<Signup/>} />

      <Route path='/about' element={<Aboutpage/>} />


      <Route path='/pricing' element={<Pricingpage/>} />

      <Route path='/product' element={<Productpage/>} />


      <Route path='/support' element={<Supportpage/>} />
      <Route path='*' element={<Notfoundpage/>}/>
    

    </Routes>
    <Footer/>
  </BrowserRouter>
);


