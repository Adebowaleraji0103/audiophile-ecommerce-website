const Hero = () => {
  return (
    <div className="relative text-white lg:flex lg:items-center lg:justify-between">
      {/* Background image */}
      <div
        className="
        w-full h-[550px]  
        bg-[url('/assets/home/mobile/image-header.jpg')]
        sm:bg-[url('/assets/home/tablet/image-header.jpg')]
        lg:bg-[url('/assets/home/desktop/image-hero.jpg')]
        bg-cover bg-center bg-no-repeat
        lg:h-[600px]
      "
      ></div>

      {/* Text content */}
      <div className="absolute top-60 left-0 w-full flex justify-center lg:justify-start">
        <div className="flex flex-col gap-[1.5rem] text-center items-center px-16 md:px-[13rem] lg:text-left lg:items-start lg:px-[8rem] lg:w-[600px]">
          <p className="text-[14px] opacity-70">NEW PRODUCT</p>
          <h2 className="text-[36px] font-semibold leading-9 md:text-[40px] md:leading-13 lg:text-[50px]">
            XX99 Mark II HeadphoneS
          </h2>
          <p className="md:text-[17px] opacity-70">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-[#D87D4A] px-7 py-3">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
