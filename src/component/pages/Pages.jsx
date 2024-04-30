import React from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import About from '../about/About';
import Blog from '../blog/Blog';
import Footer from '../common/footer/Footer';

import Header from '../common/header/Header';
import Contact from '../contacts/Contact';
import Home from '../home/Home';
import Pricing from '../pricing/Pricing';
import Services from '../services/Services';

const Pages = () => {
    return(
        <>
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
    
        </Routes>
        
        <Footer />
        </BrowserRouter>


        </>
    ) 
}


export default Pages;