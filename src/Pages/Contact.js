import React from 'react';
import location from '../Assets/location.webp'



const Contact = () => {
  return (
    <div className="relative bg-fixed bg-cover min-h-auto" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <div className="container py-20 mx-auto">
          <h1 className="mb-8 text-4xl font-bold text-center text-yellow-500">Contact Us</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="px-8 py-6 mb-4 bg-gray-800 bg-opacity-50 rounded-lg lg:w-1/2 lg:mr-4">
              <h2 className="mb-4 text-xl font-bold text-yellow-500">Contact Details</h2>
              <div className='text-white '>
              <h2 className="mb-2 text-xl font-semibold">Get in Touch with Luxdine</h2>
                <p className="mb-4">We'd love to hear from you. Contact us using the information below:</p>              
                    <div className='text-center '>
                      <p className='p-3'>123 Main Street, Galle, Sri Lanka</p>
                      <p className='p-3'> +1234567890</p>
                      <p className='p-3'>luxdinerestaurant@gmail.com</p>

                    </div>
                    
              </div>
                             
            </div>
            <div className="px-8 py-6 mb-4 bg-gray-800 bg-opacity-50 rounded-lg lg:w-1/2 lg:ml-4">
              <h2 className="mb-4 text-xl font-bold text-yellow-500">Send a Message</h2>
              <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-400"></textarea>
            </div>
            <button type="submit" className="px-4 py-2 text-white transition duration-300 bg-yellow-600 rounded-md hover:bg-yellow-400">Send</button>
          </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center bg-orange-50">
  <h1 className="pt-5 text-3xl font-bold text-orange-400">You can find us</h1>
  <div className="container py-5 mx-auto">
    <img src={location} alt="Location Map" />
  </div>
</div>

    </div>
  );
};

export default Contact;
