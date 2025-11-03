const AudioGear = () => {
    return (
      <div className="mb-20 flex flex-col gap-[1rem] px-8 lg:px-[8rem] lg:flex-row-reverse lg:items-center lg:gap-[5rem]">
        <div>
          <img
            src="\assets\shared\mobile\image-best-gear.jpg"
            alt="" className="rounded-xl md:hidden w-full"
          />   
          {/* --- tablet image ---- */}
          <img
            src="\assets\shared\tablet\image-best-gear.jpg" 
            alt=""
            className="rounded-xl hidden md:flex lg:hidden w-full"
          />
            {/* ----- desktop image ----- */}
            <img
            src="\assets\shared\desktop\image-best-gear.jpg"
            alt=""
            className="rounded-xl hidden lg:flex w-full"
          />
        </div>
        <div className="text-center mt-10 px-4 md:px-20 lg:px-0 lg:w-[540px] lg:mx-auto lg:text-left">
          <h1 className="text-[24px] font-semibold mb-6 md:text-[37px] lg:text-[40px] lg:leading-[44px]">     
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
          </h1>
          <p className="text-[15px] text-[#7D7D7D] md:text-[16px] lg:text-[18px] leading-[25px] md:leading-[26px] lg:leading-[28px]">
            Located at the heart of New York City, Audiophile is the premier store for high end
            headphones, earphones, speakers, and audio accessories. We
            have a large showroom and luxury demonstration rooms available for you to browse and
            experience a wide range of our products. Stop by our store to meet some of the
            fantastic people who make Audiophile the best place to buy your portable audio
            equipment.
          </p>
        </div>
      </div>
    );
}
 
export default AudioGear;