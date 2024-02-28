import abstract from '../assets/abstract1.mp4'

const Hero = (source_code_link) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
              <div className="overlay">
        <video src={abstract} autoPlay loop muted  />
      </div>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5`}
      >

        <div>
          <h1 className='lg:text-[50px] my-20 text-blue-200 z-10 capitalize italic  '>
            Expand The Horizon Of Reality
          </h1>
          <h2 className='lg:text-[20px] my-10 text-white-200 z-10 capitalize italic '>
          Trusted Enterprise Partner for creating advanced 3D visualization
          </h2>
          <div
              onClick={() => window.open("https://www.beebox3d.com/", "_blank")}
              className='w-30 h-20 rounded-full cursor-pointer'
            >
            <button
            type='Explore'
            className='bg-tertiary py-3 px-5 rounded-full outline-none w-fit text-white font-bold hover:bg-amber-400'
          >
            {"Explore in 3d"}
          </button>

            </div>

        </div>
      
      </div>
    </section>

  );
};

export default Hero;
