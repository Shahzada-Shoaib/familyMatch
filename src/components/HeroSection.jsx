import React from 'react'
import photo from '../../src/photo1.jpg'
import video from '../video.mp4'
import Header from './header';

function HeroSection() {
    return (
        // <div
        //     className='h-[100vh] bg-cover bg-center '
        //     style={{ backgroundImage: `url(${photo})` }}
        // >
        //     <Header/>
        //     {/* You can add content inside the div */}
        //     <div className="min-h-screen flex items-center leading-8">
        //         <div className="container  pl-4">
        //             <h1 className="text-5xl text-white text-left font-bold">
        //                 Let's find the perfect<br />
        //                 family for yours
        //             </h1>
        //             <div className="text-left mt-4">
        //                 <button className="border-2 px-8 py-2 rounded-3xl bg-[#CD185B] text-white hover:border-[#CD185B]">GET STARTED</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>



        
        <div className="relative w-full h-screen overflow-hidden ">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                // src="https://www.w3schools.com/html/mov_bbb.mp4"
                src={video}
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#1a2a3a]/60 z-10" />

            {/* Overlay Content */}
            <div className="relative z-10">
                <div>
                    <Header />
                    {/* You can add content inside the div */}
                    <div className="min-h-screen flex items-center leading-8">
                        <div className="container  pl-4">
                            <h1 className="text-2xl md:text-5xl text-white text-left font-bold">
                                Let's Find The Perfect<br />
                                Family For Yours
                            </h1>
                            <div className="text-left mt-4">
                                <button className="border-2 px-8 py-2 rounded-3xl bg-[#CD185B] text-white hover:border-[#CD185B]">GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroSection;
