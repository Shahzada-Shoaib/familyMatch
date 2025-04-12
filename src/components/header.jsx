import React from 'react'

function Header() {
  return (
    
    <>
    <div className='container flex justify-between  py-8'>
              <div className='text-5xl text-white'> <span className='text-5xl text-white font-bold' >Family</span> Match</div>
        <div className='flex gap-2'>
            <div>
                      <button className='border-2 px-8 py-1 rounded-3xl text-white hover:opacity-80'>MEMBER LOGIN</button>
            </div>
            <div>
                      <button className='border-[#CD185B] px-8 py-1 rounded-3xl bg-[#CD185B] text-white hover:opacity-80'>REGISTER</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Header;