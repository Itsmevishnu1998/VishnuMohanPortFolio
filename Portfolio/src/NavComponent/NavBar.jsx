import React, { useState } from "react";
import '../NavCSS/NavBar.css'; // Import the CSS file for styling

function NavBar() {
    const[activeLink, setActiveLink]=useState('home');
    const handleLinkClick=(link)=>{
        setActiveLink(link);
    };
    return(
        <>
        <nav className="navbar"> 
            <div className="logo">Logo</div>
            <div className="nav-links">
                <ul>
                    <li><a className={`${activeLink === 'home'?'nav-item-active':''}`} onClick={()=>handleLinkClick('home')} href="#home">Home</a></li>
                    <li><a className={`${activeLink === 'about'?'nav-item-active':''}`} onClick={()=>handleLinkClick('about')}  href="#about">About</a></li>
                    <li><a className={`${activeLink === 'projects'?'nav-item-active':''}`} onClick={()=>handleLinkClick('projects')} href="#projects">Projects</a></li>
                    <li><a className={`${activeLink === 'contact'?'nav-item-active':''}`} onClick={()=>handleLinkClick('contact')} href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        </>

    )
}
export default NavBar;