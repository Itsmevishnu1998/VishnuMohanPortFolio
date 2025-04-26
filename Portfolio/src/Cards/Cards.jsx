import React from "react";
import WeddingCard from "./IndividualCards";
import './Cards.css'; 
function Cards() {
    return(<>

    <div className="card-container">
        <div className="card-row">
    <div className="card-column">
        
    <WeddingCard/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard/>
   
    </div>
    <div className="card-column">
        
    <WeddingCard/>
   
    </div>
    </div>
    </div>
    
    </>)
}
export default Cards;