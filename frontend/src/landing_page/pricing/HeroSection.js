import React from 'react';

function HeroSection() {
    return ( 
        <div className='container text-center' style={{marginTop:"12rem"}}>
            <div className='row' style={{borderBottom: "1px solid #eee"}}>
                <h1 style={{fontSize:"2.75rem", lineHeight:"1.25", fontWeight:"500"}}>Pricing</h1>
                <h6 style={{fontSize:"1.25rem",fontWeight:"400", marginTop:"10px", marginBottom:"80PX"}}>Free equity investments and flat ₹20 intraday and F&O trades</h6>
            </div>
            <div className='row' style={{marginTop:"5rem"}}>
                
                <div className='col-lg-4 col-sm-12'>
                    <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{width:"70%"}}/>
                    <h3>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
               
                <div className='col-lg-4 col-sm-12'>
                    <img src='https://zerodha.com/static/images/other-trades.svg' style={{width:"70%"}}/>
                    <h3>Intraday and F&O trades</h3>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
               
                <div className='col-lg-4 col-sm-12'>
                    <img src='https://zerodha.com/static/images/pricing-eq.svg' style={{width:"70%"}}/>
                    <h3>Free direct MF</h3>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
                
            </div>
        </div>
     );
}

export default HeroSection;