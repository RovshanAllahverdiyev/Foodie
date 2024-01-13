import AppStore from './components/AppStore/AppStore'
import Banner from './components/Banner/Banner'
import CoverBanner from './components/CoverBanner/CoverBanner'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <CoverBanner />
      <AppStore />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App