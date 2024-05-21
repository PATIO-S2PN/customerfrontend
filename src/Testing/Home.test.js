import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../Pages/Home';
import '@testing-library/jest-dom/extend-expect';

describe('Home Component', () => {
  test('displays loading initially and hides after timeout', async () => {
    render(<Home />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for the loading indicator to disappear
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument(), { timeout: 4000 });
  });

  test('slides change at specified interval', async () => {
    jest.useFakeTimers();
    render(<Home />);

    // Check the first slide is displayed
    expect(screen.getByAltText('First slide alt text')).toBeInTheDocument();

    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(2000);

    // Check the second slide is displayed
    expect(screen.getByAltText('Second slide alt text')).toBeInTheDocument();

    jest.useRealTimers();
  });

  test('menu can be toggled open and closed', () => {
    render(<Home />);
    const toggleButton = screen.getByText(/menu/i);

    // Initial state should be closed
    expect(screen.queryByText(/menu content/i)).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);
    expect(screen.getByText(/menu content/i)).toBeInTheDocument();

    // Click to close
    fireEvent.click(toggleButton);
    expect(screen.queryByText(/menu content/i)).not.toBeInTheDocument();
  });

  test('ORDER NOW button is rendered and clickable', () => {
    render(<Home />);
    const orderButtons = screen.getAllByText(/order now/i);
    orderButtons.forEach((orderButton) => {
      expect(orderButton).toBeInTheDocument();
      fireEvent.click(orderButton);
    });
  });

//   test('renders text and images correctly', () => {
//     render(<Home />);
//     const slides = [
//       { alt: 'First slide alt text', text: 'Flavor Flavor Haven: Take-Away Bliss!' },
//       { alt: 'Second slide alt text', text: 'Begin your culinary journey at Flavor Haven with our carefully curated take-away menu.' },
//       { alt: 'Third slide alt text', text: 'Say goodbye to compromise and hello to a dining experience that fits your pace.' },
//     ];

//     slides.forEach((slide) => {
//       const slideElement = screen.getByAltText(slide.alt);
//       expect(slideElement).toBeInTheDocument();
//       expect(screen.getByText(new RegExp(slide.text, 'i'))).toBeInTheDocument();
//     });
  });
//});
