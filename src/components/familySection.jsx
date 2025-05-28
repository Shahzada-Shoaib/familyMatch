import React from 'react'
import photo from '/images/picture.jpg'
import photo3 from '/images/picture2.jpg';
import whiteCircle from '/whiteCircle.png';
import downarrow from '/downarrow.png';
import topImg from '/topImg.png';

function familySection() {
  return (
      <div className='container  relative min-h-[1050px] overflow-hidden'>
          <div className=' flex flex-col items-center text-center space-y-4 mt-32'>
              <h1 className='text-3xl font-bold text-[#4E94B6]'> Binging Compatible families together</h1>
              <p className='font-bold'>Let us Macth your family with others like yours,<br />
                  or Different Than Yours!</p>
          </div>
          <div>
              <div className='flex justify-center mt-10'>
                  <h1 className='text-2xl font-bold text-[#4E94B6]'>HOW IT WORKS</h1>
              </div>

          </div>


          <div className="relative w-full flex justify-center">
              {/* Second Div (Background / Bottom) */}
              <div className="w-full absolute top-4">
                  <div className="relative flex justify-center items-center h-[600px]">
                      {/* Left Circle */}
                      <div className="absolute left-[220px] top-60 -translate-y-1/2">
                          <img
                              src={photo}
                              className="w-[250px] h-[250px] rounded-full object-cover border-4 border-[#3095C8]"
                              alt="Left Circle"
                          />
                      </div>

                      {/* Center Circle */}
                      <div>
                          <img
                              src={whiteCircle}
                              className="w-[420px] h-[420px]"
                              alt="Center Circle"
                          />
                      </div>

                      {/* Right Circle */}
                      <div className="absolute right-[220px] top-60 -translate-y-1/2">
                          <img
                              src={photo}
                              className="w-[250px] h-[250px] rounded-full object-cover border-4 border-[#3095C8]"
                              alt="Right Circle"
                          />
                      </div>
                  </div>
              </div>



              {/* First Div (Overlapping Top) */}
              <div className="absolute top-[0px] left-1/2 -translate-x-1/2">
                  <div className=' flex gap-32  justify-center'>
                      <div className=' w-6 pt-12'>
                          <img src={downarrow} alt="" />
                      </div>
                      <div className='w-40' >
                          <img src={topImg} alt="" />
                      </div>
                      <div className='w-6 pt-12'>
                          <img src={downarrow} alt="" />
                      </div>
                  </div>
              </div>


              <img
                  src={photo3}
                  alt="Custom Shaped"
                  className=" absolute top-[450px] w-[700px] h-[220px] border-4 border-[#3095C8] object-cover"
                  style={{ borderRadius: '30% 30% 30% 30% / 30% 30% 30% 30%' }}
              />

          </div>
      </div>
  )
}

export default familySection;