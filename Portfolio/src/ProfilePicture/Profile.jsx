import React from "react";
import '../ProfilePicture/Profile.css'; 
import background from '../ProfilePicture/EditingLab.jpg'; // Import the image file
function Profile(){
    return(
        <>
        <div className="profile-container">
            <div className="profile-heading">
                <h1 className="welcome">Welcome To MatteBox.</h1>
                <p className="description">We are happy that your are here, Our company is mainly focusing on provide you digital products for enhancing your business growth.</p>
                <button className="button">Scroll Down</button>
        </div>
       
        </div>
        
        
        </>
    )
}
export default Profile;