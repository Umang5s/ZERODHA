import React from 'react';
import "../CSS/Stats.css";

function Stats() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row mb-5'>
                <div className='col-lg-5 col-sm-12 mt-4'>
                    <h1>Trust with confidence</h1>
                    <div className='row col-11 mt-5'>
                        <h4>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='row col-11 mt-4'>
                        <h4>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className='row col-11 mt-4'>
                        <h4>The Zerodha universe</h4>
                        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='row col-11 mt-4 paregraph'>
                        <h4>Do better with money</h4>
                        <p className='text-muted'>With initiatives like <a href='#'>Nudge</a> and <a href='#'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className='col-lg-7 col-sm-12 mt-5'>
                    <img src='Media\Images\ecosystem.png' alt='ecosystem image' className='image_1' />
                        <a href='#' className='explore_1'>Explore our products &nbsp;&nbsp;<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href='#' className='explore_2'>Try Kite demo &nbsp;&nbsp; <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='row'>
                <img src='Media\Images\pressLogos.png' alt='presslogos image' className='image_2'/>
            </div>
        </div>
    );
}

export default Stats;