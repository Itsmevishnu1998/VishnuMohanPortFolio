import React from "react";
import WeddingCard from "./IndividualCards";
import './Cards.css'; 
import wedding from './Wedding.jpg';
import maternity from './Matternity.jpg';
import { WeddingCardTitle, WeddingCardDescription, MaternityCardTitle, MaternityCardDescription, BirthdayCardTitle, BirthdayCardDescription } from "./Constants.jsx";
function Cards() {
    return(<>

    <div className="card-container">
        <div className="card-row">
    <div className="card-column">
        
    <WeddingCard Description={WeddingCardDescription} Title={WeddingCardTitle} Image={wedding} Alt="WeddingImage"/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard Description={MaternityCardDescription} Title={MaternityCardTitle} Image={maternity} Alt="MaternityImage"/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard Description={BirthdayCardDescription} Title={BirthdayCardTitle} Alt="BirthDayImage"/>
   
    </div>
   
   
    </div>
    </div>
    
    </>)
}
export default Cards;