const Hero = () => {
  return (
    <div className="mb-190  text-white lg:flex ">
      {
        <div
          className="
      w-full h-[550px]  relative
      bg-[url('/assets/home/mobile/image-header.jpg')]
      sm:bg-[url('/assets/home/tablet/image-header.jpg')]
      lg:bg-[url('/assets/home/desktop/image-hero.jpg')]
      bg-cover bg-center bg-no-repeat
      lg:flex lg:justify-end lg:h-[600px] 
    "
        ></div>
      }

      <div className="absolute text-[15px] top-60 flex flex-col gap-[1.5rem] text-center items-center w-full px-16 md:px-[13rem] md:top-50 lg:w-[70%] ">
        <p className="text-[14px] opacity-70">NEW PRODUCT</p>
        <h2 className="text-[36px] font-semibold leading-9 md:text-[50px] md:leading-13 ">
          XX99 Mark II HeadphoneS
        </h2>
        <p className="md:text-[17px] opacity-70 lg:px-[1rem]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="bg-[#D87D4A] px-7 py-3">SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default Hero;

