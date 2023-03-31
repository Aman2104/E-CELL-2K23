import react from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Mainpage from './components/Mainpage'

import Handles from './components/Handles'
import PastEvents from './components/PastEvents'
import IIC from './components/IIC'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">


        <Navbar />
        <Routes>
          <Route exact path="/" element={<Mainpage/>} />
          <Route path="/iic" element={<IIC/>} />
          <Route path="/pastevents" element={<PastEvents/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
       
       
        <Handles />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
