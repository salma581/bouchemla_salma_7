import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import "./App.css";
import ApartmentGrid from "./components/ApartmentGrid.jsx";
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Main>
       <Banner/>
      <ApartmentGrid/>  
      </Main>
      <Footer/>
     
    </div>
  );
}

export default App;
