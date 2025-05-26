import React from 'react';
import dp from '/images/profilePicture.jpg';
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';

function DpSection() {
  return (
    <div className='w-full max-w-3xl mx-auto rounded-lg '>
      <div className="w-full max-w-3xl mx-auto p-4 rounded-lg flex flex-wrap md:flex-nowrap justify-between items-start gap-4">

        {/* Left Side: Image + Info */}
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          <img
            src={dp}
            alt="profile pic"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover"
          />

          <div className="text-center sm:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl">John Doe</h1>
            <p className="text-sm text-gray-600">38, New York, USA</p>

            <div className="flex gap-2 mt-3 justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <HeartIcon className="h-6 w-6 text-red-500" />
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <ChatBubbleBottomCenterIcon className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: 3 Dots */}
        <div className="ml-auto sm:ml-0">
          <EllipsisHorizontalIcon className="h-6 w-6 text-gray-500" />
        </div>
      </div>
      <div>
        <p className='font-bold text-xl my-2'>
          Core Values
        </p>
        <div className='flex gap-2 justify-start'>
          <div className='flex border-gray-500 flex-col items-center justify-center border w-42 h-32 rounded-lg'>
            <HeartIcon className="h-18 w-18 text-red-500" />
            <label htmlFor="">Heart</label>
          </div>
          <div className='flex border-gray-500 flex-col items-center justify-center border w-42 h-32 rounded-lg'>
            <HeartIcon className="h-18 w-18 text-red-500" />
            <label htmlFor="">Communication</label>
          </div>
          <div className='flex border-gray-500 flex-col items-center justify-center border w-42 h-32 rounded-lg'>
            <HeartIcon className="h-18 w-18 text-red-500" />
            <label htmlFor="">Honesty</label>
          </div>
        </div>
      </div>
   </div>
  );
}

export default DpSection;
