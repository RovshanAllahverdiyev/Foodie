import { useEffect } from 'react'
import AppStore from './components/AppStore/AppStore'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'

import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration:500,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App