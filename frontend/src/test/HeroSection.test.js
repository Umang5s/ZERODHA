import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroSection from '../landing_page/home/HeroSection';

// Test suites
describe('HeroSection Component', () => {
    test('renders HeroSection Image', () => {
        render(<HeroSection />);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        
        const normalizedSrc = heroImage.getAttribute('src').replace(/\\/g, '/');
        expect(normalizedSrc).toBe('Media/Images/homeHero.png');
    });

    // test('renders Singup Button', () => {
    //     render(<HeroSection />);
    //     const SignupButton = screen.getByRole('button', {name: "/Signup Now now/i"});
    //     expect(SignupButton).toBeInTheDocument();
        
    //     const normalizedSrc = heroImage.getAttribute('src').replace(/\\/g, '/');
    //     expect(normalizedSrc).toHaveClass('btn-primary')
    // });
});
