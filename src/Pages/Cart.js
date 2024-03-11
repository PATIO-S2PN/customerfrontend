import React from 'react';

const Cart = () => {
  const handleClose = () => {
    // Implement logic to close the cart page
    console.log('Cart page closed');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
      <div className="bg-[#1E1E1E] p-6 shadow-md rounded-lg w-80 relative">
        {/* Close button */}
        <button
          className="absolute top-0 right-0 m-2 text-white"
          onClick={handleClose}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-6"
            fill="none"
            viewBox="5 0 24 2"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/* Cart content goes here */}
        <h1 className="text-xl text-white font-bold mb-4 border-b border-gray-400 pb-2">
          My Cart
        </h1>
        {/* Example items */}
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <p className="text-white">Mix Rice</p>
            <p className="text-[#c87d27]">Rs 1590.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-white">Beverage</p>
            <p className="text-[#c87d27]">Rs 1000.00</p>
          </div>
        </div>
        {/* Total cost */}
        <div className="mt-20 flex justify-between items-center border-gray-400 border-t pt-2">
          <p className="text-white">SubTotal</p>
          <p className="text-[#c87d27]">Rs 2590.00</p>
        </div>
        {/* Tracking */}
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <p className="text-white">Tracking</p>
            <p className="text-gray-400">Pending</p>
          </div>
        </div>
        {/* Total */}
        <div className="mb-2">
          <div className="flex justify-between items-center">
            <p className="text-white">Total</p>
            <p className="text-[#c87d27]">Rs 2590.00</p>
          </div>
        </div>
        {/* Checkout button */}
        <button className="text-white py-2 px-4 mt-4 w-full rounded-md bg-[#995618]">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart
