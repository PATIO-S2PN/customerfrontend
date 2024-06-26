import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import cart from '../Assets/cart.webp'
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import img from '../Assets/cheese burger.webp';
import { shoppingBackendUrl } from '../config';

export default function Cartnew() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]); 

  //calculate the total
  const subtotal = products.reduce((total, item) => {
    return total + (item.product.price * item.unit);
  }, 0);
  
  const [count, setCount] = useState(1); 

  //update acart items
  function increment(productId) {
    setCount(function (prevCount) {
      const newCount = prevCount + 1;
      updateQuantity(productId, newCount);
      return newCount;
    });
  }
  
  function decrement(productId) {
    setCount(function (prevCount) {
      const newCount = prevCount > 0 ? prevCount - 1 : 0;
      updateQuantity(productId, newCount);
      return newCount;
    });
  }
  
  function updateQuantity(productId, quantity) {
    const token = localStorage.getItem('token');
    axios.post(`${shoppingBackendUrl}/cart`, {
      product_id: productId,
      qty: quantity
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Cart updated:', response.data);
      // Update the products state with the new quantity for the updated product
      setProducts(products.map(item => 
        item.product._id === productId 
          ? { ...item, unit: quantity } 
          : item
      ));
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  //get the cart items
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    axios.get(`${shoppingBackendUrl}/cart`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
    
      if (Array.isArray(response.data.items)) {
        setProducts(response.data.items);
      } else {
        setProducts([]);
      }
    })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []); 

  //delete item

  function deleteItem(id, token) {
    axios({
      method: 'delete',
      url: `${shoppingBackendUrl}/cart/${id}`,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Item deleted:', response.data);
      const updatedProducts = products.filter(item => item.product._id !== id);
      setProducts(updatedProducts);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }


  return (
    
   <Transition.Root show={open} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={setOpen} static>
    <Transition.Child
      as={Fragment}
      enter="ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 " 
      style={{ backgroundImage: `url(${cart})`, backgroundSize: 'cover', backgroundPosition: 'left'}}
      onClick={() => setOpen(false)}
      >
      <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' 
      onClick={(e) => {
        e.stopPropagation();
        navigate("/");
      }} />

      </div>
    </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll shadow-xl bg-orange-50">
                    <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((item) => (
                            <li key={item._id} className="flex py-6">
                              <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                <img
                                    src={item.product.images && item.product.images[0] ? `${shoppingBackendUrl}/${item.product.images[0]}` : img} 
                                    className="object-cover object-center w-full h-full"
                                    alt={item.product.name}
                                /> 
                                {/* <img
                                  src={item.imageSrc} // Make sure the API response has this property
                                  alt={item.imageAlt} // Make sure the API response has this property
                                  className="object-cover object-center w-full h-full"
                                />  */}
                              </div>

                                  <div className="flex flex-col flex-1 ml-4">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={item.product.href}>{item.product.name}</a> 
                                        </h3>
                                        <p className="ml-4">{item.product.price}</p> 
                                      </div>
                                      {/* <p className="mt-1 text-sm text-gray-500">{item.color}</p> // Make sure the API response has this property */}
                                    </div>
                                    <div className="flex items-end justify-between flex-1 text-sm">
                                      <div className='flex flex-row gap-3'>
                                          <p className="text-gray-500">Qty </p> 
                                          <div className='flex flex-row gap-1'>
                                            <button onClick={() => decrement(item.product._id)} className='items-center justify-center w-4 h-4 bg-gray-300'>- </button>
                                            <p>{item.unit}</p>
                                            <button onClick={() => increment(item.product._id)} className='w-4 h-4 bg-gray-300'>+</button>
                                          </div>
                                          
                                      </div>
                                      
                                      <div className="flex">
                                        <button
                                          onClick={() => deleteItem(item.product._id, localStorage.getItem('token'))}
                                          type="button"
                                          className="font-medium text-orange-700 hover:text-orange-900"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="flex justify-center w-full mt-6 ">
                        <button
                          // href="/placeorder"
                          onClick = {() => navigate('/placeorder')}
                          className="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-orange-700 border border-transparent rounded-md shadow-sm hover:bg-orange-900"
                        >
                          Checkout
                        </button>
                      </div>
                      <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            onClick={() => navigate('/menuone')} 
                            className="font-medium text-orange-700 hover:text-orange-900"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
