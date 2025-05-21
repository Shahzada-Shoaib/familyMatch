import React from 'react'
import hand from '/icons/hand_icon.png'; // Adjust the path as necessary

function FormCompletionScreen() {
  return (
    <div className='text-center flex flex-col items-center justify-center'>
          <img className='w-72 h-72' src={hand} alt="" />
          <p className='text-3xl font-bold text-[#AE2456] my-8'>And Just Like that you're Ready</p>
          <p className='text-[#3D3D3D] leading-4 mb-14'>Before you start discovering other members, let’s help you get the most out of your FamilyMatch experience.</p>
     <button className='px-20 py-3 border-2 rounded-4xl text-white bg-[#AE2456]'>Continue</button>
    </div>
  )
}

export default FormCompletionScreen;