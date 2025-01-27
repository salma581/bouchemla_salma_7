import React from 'react';
import Banner from './components/Banner';
import "./App.css";
import ApartmentGrid from "./components/ApartmentGrid.jsx";
import Main from './components/Main';


function App() {
  return (
    <div>
     
      <Main>
       <Banner/>
      <ApartmentGrid/>  
      </Main>
     
     
    </div>
  );
}

export default App;
