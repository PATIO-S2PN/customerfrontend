import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../Pages/Cartnew';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mocking ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;

describe('Cartnew Component', () => {
  const mockNavigate = useNavigate();

  // test('display products in cart', () => {
  //   const products = [
  //     {
  //       id: 1,
  //       name: 'Throwback Hip Bag',
  //       href: '#',
  //       color: 'Salmon',
  //       price: '$90.00',
  //       quantity: 1,
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
  //       imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  //     },
  //     {
  //       id: 2,
  //       name: 'Medium Stuff Satchel',
  //       href: '#',
  //       color: 'Blue',
  //       price: '$32.00',
  //       quantity: 1,
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
  //       imageAlt:
  //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  //     },
  //     {
  //       id: 3,
  //       name: 'Medium Stuff Satchel',
  //       href: '#',
  //       color: 'Blue',
  //       price: '$32.00',
  //       quantity: 1,
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
  //       imageAlt:
  //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  //     },
  //     {
  //       id: 4,
  //       name: 'Medium Stuff Satchel',
  //       href: '#',
  //       color: 'Blue',
  //       price: '$32.00',
  //       quantity: 1,
  //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
  //       imageAlt:
  //         'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  //     },
  //   ];

  //   render(
  //     <MemoryRouter>
  //       <Cart />
  //     </MemoryRouter>
  //   );

  //   products.forEach((product) => {
  //     expect(screen.getByText(product.name)).toBeInTheDocument();
  //     expect(screen.getByText(product.price)).toBeInTheDocument();
  //     expect(screen.getByText(`Qty ${product.quantity}`)).toBeInTheDocument();
  //   });
  // });

  test('renders cart modal', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText('Shopping cart')).toBeInTheDocument();
  });

  test('close cart modal', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /close panel/i }));
    expect(screen.queryByText('Shopping cart')).not.toBeInTheDocument();
  });

  test('display subtotal amount', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    expect(screen.getByText('$262.00')).toBeInTheDocument();
  });

  test('navigate to checkout', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Checkout'));
    expect(screen.getByRole('link', { name: /checkout/i }).closest('a')).toHaveAttribute('href', '/placeorder');
  });

  test('continue shopping', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/continue shopping/i));
    expect(screen.queryByText('Shopping cart')).not.toBeInTheDocument();
  });
});
