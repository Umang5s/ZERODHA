import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container p-5 mb-5 text-center'>
            <div className='row '>
            <h1 className='mt-5 mb-5'>404 Not Found</h1>
            <h5>Sorry, the page you are looking for does not exist.<h5 className='mt-3'>FOR VISIT&nbsp;<Link to="/" style={{textDecoration:"none"}}>Zerodha's home Page</Link>.</h5></h5>
            </div>
            
        </div>
     );
}

export default NotFound;