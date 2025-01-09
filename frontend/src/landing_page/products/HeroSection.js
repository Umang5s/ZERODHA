import React from 'react';

function HeroSection() {
    return ( 
        <div className='container mb-5 border-bottom' style={{marginTop: "10rem", opacity: "0.9"}}>
            <div className='row text-center mt-5' style={{marginBottom: "4.5rem" , lineHeight: "4"}} >
                <h1 className='mb-3' style={{fontSize: "2.75rem"}}>Technology</h1>
                <h5 style={{fontSize:"1.25rem"}}>Sleek, modern, and intuitive trading platforms</h5>
                <p>Check out our <a href='#' style={{textDecoration: "none"}}>investment offerings{" "}<i class="fa fa-arrow-right" aria-hidden="true"></i> </a></p>
            </div>
        </div>
     );
}

export default HeroSection;