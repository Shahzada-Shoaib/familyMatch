import React from 'react'
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import FamilySection from '../components/familySection';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
    <HeroSection/>
    <AboutUsSection/>
    <FamilySection/>
          <div className="container flex flex-col items-center text-center space-y-4 mb-20">
              <p className='font-bold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure doloribus deserunt ipsam at nisi dignissimos<br />
                  dicta voluptates quibusdam, pariatur, rem debitis laboriosam assumenda <br />
                  ducimus odio magni vero doloremque eligendi.
              </p>
              <button className="border px-5 py-3 rounded-3xl bg-[#CD185B] font-bold text-white">
                  Click here to find your Family's Match! &rarr;
              </button>
          </div>
    <Footer/>
    </>
  )
}

export default HomePage;