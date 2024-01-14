import HeaderTitle from '../HeaderTitle/HeaderTitle'

import Img1 from '../../assets/biryani.png'
import Img2 from '../../assets/biryani2.png'
import Img3 from '../../assets/biryani3.png'



const ServicesData = [
  {
    id: 1,
    img: Img3,
    name: "Biryani",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam, ipsa fugiat autem quam in provident. Eos, quidem"
  },
  {
    id: 1,
    img: Img2,
    name: "Chiken kari",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam, ipsa fugiat autem quam in provident. Eos, quidem"
  },
  {
    id: 1,
    img: Img3,
    name: "Meal kari",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat aliquam, ipsa fugiat autem quam in provident. Eos, quidem"
  },
]

const Services = () => {
  return (
    <section className='py-20 bg-white dark:bg-gray-900 dark:text-white ' id='services'>
      <div className="container">

        {/* Title section */}
          <HeaderTitle subTitle='Our Services' title='Services' />
        
        {/* Cart section */}
        <div data-aos='zoom-in' data-aos-duration='500' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-5 place-items-center mt-28'>
          {ServicesData.map((data) => (
            <div key={data.id} className='bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[250px] rounded-2xl'>

              <div className='h-[100px]'>
                <img src={data.img} alt="" className='max-w-[200px] block  transform -translate-y-20 mx-auto group-hover:rotate-6 group-hover:scale-105 duration-300' />
              </div>

              <div className='text-center pb-4 px-4'>
                <h1 className='text-xl font-bold'>{data.name}</h1>
                <p className='line-clamp-2 text-gray-500 group-hover:text-white duration-300 text-sm'>{data.description}</p>
              </div>

            </div>
          ))}
          
        </div>

      </div>
    </section>
  )
}

export default Services