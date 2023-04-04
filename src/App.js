import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import './Responsive.css';
import Property from './pages/Property/Property';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import HelpCenter from './pages/Help Center/HelpCenter';
import Account from './pages/Account/Account';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/property' element={<Property />} />
           <Route path='/about' element={<About />} />
           <Route path='/blog' element={<Blog />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/help-center' element={<HelpCenter />} />
           <Route path='/account' element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;