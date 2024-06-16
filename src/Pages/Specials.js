import React from 'react'
import food from '../Assets/burgers.png'
import ice from '../Assets/icecream.png'  
import rice from '../Assets/png.png' 

const Specials = () => {
  const foods = [
    {
      id: 1,
      name: 'Burger Delight',
      price: 1200,
      image: food,
    },
    {
      id: 2,
      name: 'Ice Cream Delight',
      price: 800,
      image: ice,
    },
    {
      id: 3,
      name: 'Mixed Rice Bowl',
      price: 1450,
      image: rice,
    },
    // More food items...
  ];

  return (
    <div className='flex items-center justify-center flex-col bg-[#101E21] md:h-auto'>
        <h1 className='m-6 text-4xl font-bold text-orange-200 font-roboto-Regular-400'>LuxeDine Special Menu</h1>
        <p className='mx-5 text-orange-50 font-roboto-Regular-400'>Experience the symphony of flavors with LuxeDine’s specials, where every bite is a celebration.</p>
        <p className='mx-5 text-orange-50 font-roboto-Regular-400'> Join us on this culinary journey and let your taste buds revel in the magic of our master chefs’ creations.</p>

        <div className='flex flex-col flex-wrap items-center justify-center gap-x-12 md:flex-row'
        data-aos='fade-down'
        data-aos-offset = '200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing = 'ease-in-out'>
            {foods.map((food) => (
              <div key={food.id} className='flex transition-all duration-500 transform flex-col items-center justify-center my-10 bg-transparent  border-[2px] border-orange-900 h-[400px] w-64 lg:w-72 lg:h-[500px] rounded-3xl hover:shadow-xl hover:scale-110'>
                <img alt='food' className='w-40 h-40 m-5 rounded-full' src={food.image}></img>
                <label className='text-2xl text-orange-400 font-roboto '>{food.name}</label>
                <label className='text-lg text-orange-200 font-roboto '>Rs. {food.price}</label>
                <button className='w-48 h-10 mt-3 font-bold text-black border-t border-orange-900 rounded-full font-roboto bg-orange-50 hover:bg-orange-300'>Order Now</button>
              </div>
            ))}
        </div>
    
    </div>

  )
}

export default Specials
