import React from 'react'
import footerIMG from '../footerIMG.png'
import googleLogo from '../googleLogo.png'
import logo from '../logo.svg'
import instaLogo from '../instaLogo.png'
import linkedin from '../linkedin.jpg'

function Footer() {
  return (

    //   <div
    //       className="h-[400px] bg-cover bg-center text-white p-8"
    //       style={{ backgroundImage: `url(${footerIMG})` }}
    //   >
    //       This is Footer
    //   </div>
    <div className='border'>
        <div className='container pb-4'>
              <h1 className='font-bold text-2xl'>Quick Links</h1>
              <div className='md:flex gap-44 leading-8'>
                  <div>
                      <p>Number 1</p>
                      <p>Number 2</p>
                      <p>Number 3</p>
                      <p>Number 4</p>
                  </div>
                  <div>
                      <p>Number 1</p>
                      <p>Number 2</p>
                      <p>Number 3</p>
                      <p>Number 4</p>
                  </div>
                  <div>
                      <p>Number 1</p>
                  </div>
                  <div>
                      <p>Number 1</p>
                      <p>Number 2</p>
                      <div className='flex gap-2'>
                          <img className='w-8' src={googleLogo} alt="image" />
                          <img className='w-8' src={linkedin} alt="image" />
                          <img className='w-8' src={instaLogo} alt="image" />

                      </div>
                     
                  </div>
        </div>

            
        </div>
        <img src={footerIMG} alt="" />
          <div className='w-full h-10 bg-[#98E405] flex justify-center items-center text-white'> 
            <p>
            All Rights are Reserved</p>
             </div>
    </div>

  )
}

export default Footer