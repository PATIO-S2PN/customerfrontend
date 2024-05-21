import React from 'react'
import home01 from '../Assets/home01.jpg';
import home02 from '../Assets/home02.jpg';
import home03 from '../Assets/home03.jpg';
import home04 from '../Assets/home04.jpg';
import side01 from '../Assets/side01.jpg';
import side02 from '../Assets/side02.jpg';
import side03 from '../Assets/side03.jpg';
import gallery from '../Assets/gallery.jpg';

const Gallery = () => {
  return (
    <div className='h-auto'>
      <section className="relative p-16 bg-fixed bg-cover h-60" style={{backgroundImage: `url(${gallery})`}}>
        <div className="container mx-auto text-center">
          <h1 className="p-8 text-5xl font-bold text-yellow-500">Luxdine Gallery</h1>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-4 bg-orange-50">
  <div className="grid gap-4">
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={home01} alt="Home01"
      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg "
        src={side01} alt="Side01"
      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={home02} alt="Home02"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={side03} alt="Side03"

      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={home03} alt="Home03"

      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg "
        src={side02} alt="Side02"

      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={home04} alt="Home04"

      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg "
        src={side02} alt="Side02"

      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={side03} alt="Side03"
      />
    </div>
  </div>
  <div className="grid gap-4">
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={side03} alt="Side03"
      />
    </div>
    <div>
      <img
        className="object-cover object-center h-auto max-w-full rounded-lg"
        src={side01} alt="Side01"
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default Gallery
