import React from 'react';

function Brokerage() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center mb-5 mt-5'>
                
                <div className='col-lg-6'>
                    <h5><a href='#' style={{textDecoration:"none"}}>Brokerage calculator</a></h5>
                </div>
                
                <div className='col-lg-6'>
                <h5><a href='#' style={{textDecoration:"none"}}>List of charges</a></h5>
                </div>
            </div>
            <div className='row' style={{fontSize:"small"}}>
                <ul>
                    <p><li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li></p>
                    <p><li>Digital contract notes will be sent via e-mail.</li></p>
                    <p><li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li></p>
                    <p><li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li></p>
                    <p><li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li></p>
                    <p><li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li></p>
                </ul>
            </div>
        </div>
     );
}

export default Brokerage;