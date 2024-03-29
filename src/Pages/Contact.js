import React from 'react';
import location from '../Assets/location.png'



const Contact = () => {
  return (
    <div className="relative min-h-screen bg-fixed bg-cover" style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <div className="container mx-auto py-20">
          <h1 className="text-4xl text-yellow-500 text-center font-bold mb-8">Contact Us</h1>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 bg-gray-800 bg-opacity-50 px-8 py-6 rounded-lg mb-4 lg:mr-4">
              <h2 className="text-xl text-yellow-500 font-bold mb-4">Contact Details</h2>
              <div className=' text-white'>
              <h2 className="text-xl font-semibold mb-2">Get in Touch with Luxdine</h2>
                <p className="mb-4">We'd love to hear from you. Contact us using the information below:</p>              
                    <div className='text-center '>
                      <p className='p-3'>123 Main Street, Galle, Sri Lanka</p>
                      <p className='p-3'> +1234567890</p>
                      <p className='p-3'>luxdinerestaurant@gmail.com</p>

                    </div>
                    
              </div>
                             
            </div>
            <div className="lg:w-1/2 bg-gray-800 bg-opacity-50 px-8 py-6 rounded-lg mb-4 lg:ml-4">
              <h2 className="text-xl text-yellow-500 font-bold mb-4">Sent a Message</h2>
              <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">Name</label>
              <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"></textarea>
            </div>
            <button type="submit" className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-400 transition duration-300">Send</button>
          </form>



            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-600 relative text-center">
  <h1 className="text-3xl text-white font-bold pt-5">You can find us</h1>
  <div className="container mx-auto py-5">
    <img src={location} alt="Location Map" />
  </div>
</div>

    </div>
  );
};

export default Contact;
