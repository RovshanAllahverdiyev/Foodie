import AppStoreImage from '../../assets/app_store.png'
import PlayStoreImage from '../../assets/play_store.png'
import Gif from '../../assets/mobile_bike.gif'


const AppStore = () => {
  return (
    <section className='bg-gray-100 dark:bg-gray-800 py-10'>
      <div className='container grid grid-cols-1 sm:grid-cols-2 place-items-center gap-6 '>

        {/* Left section */}
        <div data-aos='fade-up'>
          <h1 className='text-3xl font-bold text-center text-gray-500'>Foodly is Available for Android and IOS</h1>

          <div className='flex justify-center items-center'>
            <img src={PlayStoreImage} alt="play store image" className='max-w-[150px] sm:max-w-[120px] md:max-w-[180px]' />
            <img src={AppStoreImage} alt="App store image" className='max-w-[150px] sm:max-w-[120px] md:max-w-[180px]' />
          </div>
        </div>

        {/* Right section */}
        <div>
          <img data-aos='zoom-in' src={Gif} alt="gif bike" className='w-[250px]' />
        </div>

      </div>
    </section>
  )
}

export default AppStore