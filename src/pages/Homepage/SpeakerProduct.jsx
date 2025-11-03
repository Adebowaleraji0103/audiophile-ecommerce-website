const SpeakerProduct = () => {
  return (
    <div className="mb-1200 px-10 flex flex-col gap-[3rem] lg:px-[11rem]">
      <div className="bg-[#D87D4A] flex flex-col gap-7 items-center justify-center text-white py-[2rem] px-10 rounded-xl lg:justify-between lg:pt-[6rem] lg:px-[10rem] lg:flex-row lg:relative ">
        <div>
          {/* -----Mobile Image---- */}
          <img
            src="\assets\home\mobile\image-speaker-zx9.png"
            alt=""
            className="lg:size-[18rem] md:hidden "
          />
          {/* -----Tablet Image---- */}
          <img
            src="\assets\home\tablet\image-speaker-zx9.png"
            alt=""
            className="hidden size-[15rem] md:flex lg:hidden "
          />
          {/* -----Desktop Image---- */}
          <img
            src="\assets\home\desktop\image-speaker-zx9.png"
            alt=""
            className="hidden size-[20rem] lg:flex lg:absolute lg:bottom-[-6px] "
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-[1.2rem] lg:justify-start lg:items-start lg:text-start lg:w-[40%] lg:mb-14">
          <h1 className="text-[36px] px-[1rem] lg:px-0 ">ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black text-white w-fit px-4 py-3">
            SEE PRODUCT
          </button>
        </div>
      </div>

      {/* ------------------Table Speaker Section ------------------ */}
      <section>
        {/* ---- image div ---- */}
        <div className="relative">
          {/* ---- mobile image ---- */}
          <img
            src="\assets\home\mobile\image-speaker-zx7.jpg"
            alt=""
            className="md:hidden rounded-xl"
          />
          {/* --------- tablet image ----- */}
          <img
            src="\assets\home\tablet\image-speaker-zx7.jpg"
            alt=""
            className="hidden md:flex lg:hidden rounded-xl"
          />
          {/* --------- desktop image ----- */}
          <img
            src="\assets\home\desktop\image-speaker-zx7.jpg"
            alt=""
            className="hidden lg:flex rounded-xl"
          />

          <div className="absolute flex flex-col gap-6 justify-center items-center top-1/3 left-5 md:left-8 lg:left-14">
            <h1 className="text-[26px] font-semibold md:text-[28px] lg:text-[32px]">
              ZX7 SPEAKER
            </h1>
            <button className="border px-3 py-2 text-[13px] md:text-[16px]">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </section>

      {/* ------------------ Earphone Section ------------------ */}
      <section className="flex flex-col gap-[1rem] md:flex-row md:justify-between md:gap-[1rem] ">
        <div>
          <img
            src="\assets\home\mobile\image-earphones-yx1.jpg"
            alt=""
            className="rounded-xl md:hidden"
          />
          {/* ----- tablet image ----- */}
          <img
            src="\assets\home\tablet\image-earphones-yx1.jpg"
            alt=""
            className="rounded-xl hidden md:flex lg:hidden"
          />
          {/* ----- desktop image ----- */}
          <img
            src="\assets\home\desktop\image-earphones-yx1.jpg"
            alt=""
            className="rounded-xl hidden lg:flex"
          />
        </div>
        <div className="rounded-xl flex flex-col gap-[1.5rem] text-center items-center justify-center bg-[#F1F1F1] h-[200px] md:h-[320px] lg:w-[540px]">
          <h1 className="text-[26px] font-semibold md:text-[28px] lg:text-[32px]">
            YX1 EARPHONES
          </h1>
          <button className="border px-3 py-2 text-[13px] md:text-[16px">
            SEE PRODUCT
          </button>
        </div>
      </section>
    </div>
  );
};

export default SpeakerProduct;
