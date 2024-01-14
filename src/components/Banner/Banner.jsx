import Img1 from '../../assets/biryani5.png'

import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'

const Banner = () => {
  return (
    <section className=' py-10 sm:py-12 bg-white dark:bg-gray-900 dark:text-white ' id='about'>
    
      <div  className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 '>

          {/* Image Section */}
          <div>
          <img data-aos='zoom-in' src={Img1} alt="banner image" className='max-w-[430px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' />
          </div>

          {/* Text Section */}
          <div className='flex flex-col justify-center gap-6 text-center sm:text-left '>
            <h1 data-aos='fade-up' className='text-3xl font-bold text-secondary'>About Us</h1>
            <p data-aos='fade-up' className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora necessitatibus quasi.
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, cumque quasi! Alias, ipsa quidem, obcaecati dolorum excepturi illo, sequi consequuntur error eligendi explicabo incidunt doloremque?
            </p>

            <div data-aos='fade-up' data-aos-delay='300' className='flex gap-4 justify-center sm:justify-normal'>
              <GrSecure className='text-4xl w-16 h-16 p-5  bg-violet-100 dark:bg-violet-400 rounded-full dark:text-white  shadow-sm' />
              <IoFastFood className='text-4xl w-16 h-16 p-5  bg-orange-100 dark:bg-orange-400 rounded-full dark:text-white  shadow-sm' />
              <GiFoodTruck className='text-4xl w-16 h-16 p-5  bg-green-100 dark:bg-green-400 rounded-full dark:text-white shadow-sm' />
            </div>

            <div data-aos='fade-up' data-aos-delay='500' >
            <button className='bg-gradient-to-r from-secondary to-primary px-4 py-2 rounded-full hover:scale-105 text-white'>
              Ordern Now
            </button>

            </div>
          </div>

        </div>
      </div>

     
      
    </section>
  )
}

export default Banner