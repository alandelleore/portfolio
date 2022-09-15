import React from 'react'

import GlobalContext from './context/GlobalContext.js';

import './App.css';
import "./styles.css";

import Abaut from './components/Abaut';
//import Background from './components/Background';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';





const App = () => {
  return (

      <GlobalContext>
            <Navbar />
            <Header />
            <Abaut/>         
            
            <Footer />
      </GlobalContext>

  )
}

export default App;
