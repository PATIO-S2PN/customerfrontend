import React from 'react'
import home01 from '../Assets/home01.jpg';
import home02 from '../Assets/home02.jpg';
import home03 from '../Assets/home03.jpg';
import home04 from '../Assets/home04.jpg';
import side01 from '../Assets/side01.jpg';
import side02 from '../Assets/side02.jpg';
import side03 from '../Assets/side03.jpg';


const Gallery = () => {
  return (
    <div>
      <section className="relative h-60 bg-fixed bg-cover p-16" style={{backgroundImage: "url('https://i.pinimg.com/originals/f5/e5/ca/f5e5cabca59e75fe4b54eed93bfa0b3c.jpg')"}}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl text-yellow-500 font-bold p-8">Luxdine Gallery</h1>
        </div>
      </section>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-4 p-6 bg-yellow-600">
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={home01} alt="Home01"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={side01} alt="Side01"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={home02} alt="Home02"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={side03} alt="Side03"

      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={home03} alt="Home03"

      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={side02} alt="Side02"

      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={home04} alt="Home04"

      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center "
        src={side02} alt="Side02"

      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={side03} alt="Side03"
      />
    </div>
  </div>
  <div class="grid gap-4">
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={side03} alt="Side03"
      />
    </div>
    <div>
      <img
        class="h-auto max-w-full rounded-lg object-cover object-center"
        src={side01} alt="Side01"
      />
    </div>
  </div>
</div>

    </div>
  )
}

export default Gallery
