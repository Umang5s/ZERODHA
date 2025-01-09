import React from 'react';

function Education() {
    return ( 
        <div className='container' style={{marginTop: "7rem"}}>
            <div className='row'>
                <div className='col-lg-6 col-sm-12'>
                    <img src='Media\Images\education.svg' alt='education image' style={{width: "90%"}}/>
                </div>

                <div className='col-lg-6 col-sm-12' style={{marginTop: "3rem"}}>
                    <h3>Free and open market education</h3>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a className='mt-2' href="#" style={{ textDecoration: "none" }}>
                    Varsity{"   "}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{ textDecoration: "none" }}>
                    TrandingQ&A{"   "}
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
     );
}

export default Education;