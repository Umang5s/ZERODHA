import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <h3>To create a ticket, select a relevant topic</h3>
                <div className='col-lg-4 col-sm-12 mt-4'>
                    <h4><i class="fa fa-plus-circle"></i>&nbsp;&nbsp;Account Opening</h4>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Getting Started</a></p>
                    <p><a href='#'style={{textDecoration:"none", lineHeight:"1"}}>Online</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Offline</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Charges</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Company, Partnership and HUF</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Non Resident Indian (NRI)</a></p>
                </div>
                <div className='col-lg-4 col-sm-12 mt-4'>
                    <h4><i class="fa-regular fa-user"></i>&nbsp;&nbsp;Your Zerodha Account</h4>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Login credentials</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Your Profile</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Account modification and segment addition</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>CMR & DP ID</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Nomination</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Transfer and conversion of shares</a></p>
                </div>
                <div className='col-lg-4 col-sm-12 mt-4'>
                    <h4><i class="fa-solid fa-chart-simple"></i>&nbsp;&nbsp;Trading and Markets</h4>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Trading FAQs</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Kite</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Margins</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Product and order types</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Corporate actions</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Kite features</a></p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4 col-sm-12 mt-4'>
                    <h4><i class="fa-solid fa-wallet"></i>&nbsp;&nbsp;Funds</h4>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Fund withdrawal</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Adding funds</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Adding bank accounts</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>eMandates</a></p>
                </div>
                <div className='col-lg-4 col-sm-12 mt-4'>
                    <h4><i class="fab fa-bitcoin"></i> &nbsp;&nbsp; Console</h4>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>IPO</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Portfolio</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Funds statement</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Profile</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Reports</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Referral program</a></p>
                </div>
                <div className='col-lg-4 col-sm-12 mt-4'>
                    <h4><i class="fa-solid fa-coins"></i> &nbsp;&nbsp;Coin</h4>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Understanding mutual funds and Coin</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Coin app</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Coin web</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>Transactions and reports</a></p>
                    <p><a href='#' style={{textDecoration:"none", lineHeight:"1"}}>National Pension Scheme (NPS)</a></p>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;