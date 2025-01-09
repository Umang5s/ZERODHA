import React from 'react';

function Awards() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-lg-6 col-sm-12 p-3'>
                    <img src='Media\Images\largestBroker.svg' alt='largest borkerage' />
                </div>
                <div className='col-lg-6 col-sm-12 mt-3 p-4 mb-5'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail
                        order volumes in India daily by trading and investing in:</p>
                    <div className='row mt-5 mb-4'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='Media/Images/pressLogos.png' style= {{width: "90%"}} alt='press logo image'/>
                </div>
            </div>
        </div>
    );
}

export default Awards;