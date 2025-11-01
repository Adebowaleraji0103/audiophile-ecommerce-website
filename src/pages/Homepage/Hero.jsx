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
        <p className="text-[14px] text-[#FFFFFF] opacity-70">NEW PRODUCT</p>
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

// const Hero = () => {
//   return (
//     <div className="w-full lg:flex lg:min-h-[600px] bg-black">

//       {/* ✅ Text Block */}
//       <div className="
//         absolute inset-0 flex flex-col gap-6 items-center justify-center
//         text-white text-center px-8
//         lg:static lg:w-1/2 lg:text-left lg:items-start lg:justify-center lg:pl-40
//       ">
//         <p className="text-[14px] tracking-[8px] opacity-70 ">NEW PRODUCT</p>

//         <h2 className="text-[36px] lg:text-[56px] font-semibold leading-tight uppercase">
//           XX99 Mark II <br /> Headphones
//         </h2>

//         <p className="opacity-80 max-w-sm">
//           Experience natural, lifelike audio and exceptional build quality made
//           for the passionate music enthusiast.
//         </p>

//         <button className="bg-[#D87D4A] hover:bg-[#fbaf85] transition px-7 py-3 tracking-wider">
//           SEE PRODUCT
//         </button>
//       </div>

//       {/* ✅ Image */}
//       <div
//         className="
//           w-full h-[600px]
//           bg-[url('/assets/home/mobile/image-header.jpg')]
//           sm:bg-[url('/assets/home/tablet/image-header.jpg')]
//           lg:bg-[url('/assets/home/desktop/image-header.jpg')]
//           bg-cover bg-center bg-no-repeat
//           lg:w-1/2
//         "
//       ></div>
//     </div>
//   );
// };

// export default Hero;
