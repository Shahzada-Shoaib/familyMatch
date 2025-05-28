import Header from './header';
import video from '/video.mp4'

function HeroSection() {
 

  return (


    <div className="relative w-full h-screen overflow-hidden ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
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
          <div className="flex items-center min-h-screen leading-8">
            <div className="container pl-4">
              <h1 className="text-2xl font-bold text-left text-white md:text-5xl">
                Let's Find The Perfect<br />
                Family For Yours
              </h1>
              <div className="mt-4 text-left">
                <button className="border-2 px-10 font-bold py-1 rounded-3xl bg-[#CD185B] text-white hover:border-[#CD185B]">GET STARTED</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default HeroSection;
