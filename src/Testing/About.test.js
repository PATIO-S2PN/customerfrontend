import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../Pages/About';
import chef from '../Assets/chef.jpg'; 

describe('About Component', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('renders About component', () => {
    const aboutHeading = screen.getByRole('heading', { name: /About Our Restaurant/i });
    expect(aboutHeading).toBeInTheDocument();
  });

  test('renders chef image', () => {
    const chefImage = screen.getByAltText('Chef');
    expect(chefImage).toBeInTheDocument();
    expect(chefImage).toHaveAttribute('src', chef);
  });

  test('renders restaurant description', () => {
    const descriptionText = screen.getByText(/LuxeDine is a unique dining destination in the city center/i);
    expect(descriptionText).toBeInTheDocument();
  });

  test('renders contact us button', () => {
    const contactButton = screen.getByRole('button', { name: /Contact Us/i });
    expect(contactButton).toBeInTheDocument();
  });

  test('has correct initial animations', () => {
    const chefImageContainer = screen.getByAltText('Chef').parentElement;
    const aboutTextContainer = screen.getByText(/LuxeDine is a unique dining destination in the city center/i).parentElement;
    
    expect(chefImageContainer).toHaveAttribute('data-aos', 'fade-down');
    expect(chefImageContainer).toHaveAttribute('data-aos-offset', '200');
    expect(chefImageContainer).toHaveAttribute('data-aos-delay', '50');
    expect(chefImageContainer).toHaveAttribute('data-aos-duration', '1000');
    expect(chefImageContainer).toHaveAttribute('data-aos-easing', 'ease-in-out');
    
    expect(aboutTextContainer).toHaveAttribute('data-aos', 'fade-up');
    expect(aboutTextContainer).toHaveAttribute('data-aos-offset', '200');
    expect(aboutTextContainer).toHaveAttribute('data-aos-delay', '50');
    expect(aboutTextContainer).toHaveAttribute('data-aos-duration', '1000');
    expect(aboutTextContainer).toHaveAttribute('data-aos-easing', 'ease-in-out');
  });

  // Add more test cases as needed
});
