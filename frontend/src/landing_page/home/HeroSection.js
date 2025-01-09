import React from 'react';
import "../CSS/HeroHome.css";


function HeroSection() {
    return ( 
    <div className='container p-5 mb-5' style={{marginTop: "3rem"}}>
        <div className='row m-3 text-center'>
           <img src='Media\Images\homeHero.png' alt='Hero Image' className='mb-5'/>
           <h1 className='head mt-5' style={{zIndex: "-1"}}>Invest in everything</h1>
           <p className='para' style={{zIndex: "-1"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
           <button
          className="p-2 btn btn-primary fs-5 mb-5 but"
        >
          Signup Now
        </button>
           
        </div>

    </div> 
);
}

export default HeroSection;