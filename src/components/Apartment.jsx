import React from 'react';
import "./Apartment.scss";
import { Link } from "react-router-dom";
function Apartment() {
return (
  <Link to= "/flat"> 
  <div className='apartment'>
    <div className='apartment__title'>Titre de la location</div> 
    </div>
    </Link> 
);
}

export default Apartment;
