import { div } from 'framer-motion/client'
import React from 'react'

function ProfileHeader() {
  return (
      <div className='bg-[#9334EB] py-4'>
        <div className='flex justify-between px-8' >
            <div className='font-bold text-2xl text-white'>FamilyMatch</div>
              <div className='flex gap-4 text-[#F2F2F2]'>
                <p>Home</p>
                <p>Messages</p>
                <p>Settings</p>
            </div>

        </div>
    </div>
  )
}

export default ProfileHeader