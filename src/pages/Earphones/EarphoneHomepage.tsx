import AudioGear from "../Homepage/AudioGear";
import HeadphoneShop from "../Homepage/HeadphoneShop";

const card = [
  {
    imageMobile: "/assets/product-yx1-earphones/mobile/image-product.jpg",
    imageTablet: "/assets/product-yx1-earphones/tablet/image-product.jpg",
    imageDesktop: "/assets/product-yx1-earphones/desktop/image-product.jpg",
    label: "NEW PRODUCT",
    name: "YX1 WIRELESS EARPHONES",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setupsTailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    button: "SEE PRODUCT",
  },
];

const Speaker = () => {
  return (
    <main className="flex flex-col gap-[3rem]">
      <div>
        <h1 className="bg-black text-white text-[24px] font-semibold text-center py-6 mb-[2rem]">
          EARPHONES
        </h1>
        <div className="px-[1.4rem] flex flex-col gap-[3rem] lg:gap-[4rem] ">
          {card.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-[1.4rem] lg:flex-row lg:justify-between lg:gap-[3rem] lg:px-[4rem]
              "
            >
              <img
                src={card.imageMobile}
                alt="imageMobile"
                className="hidden md:flex lg:hidden rounded-xl"
              />
              <img
                src={card.imageTablet}
                alt="imageTablet"
                className="flex md:hidden rounded-xl"
              />
              <img
                src={card.imageDesktop}
                alt="imageDesktop"
                className="hidden lg:flex h-[450px] rounded-xl"
              />
              <div className="flex flex-col gap-[1rem] justify-center items-center text-center px-4 lg:text-start  lg:items-start lg:w-[680px] ">
                <p className="text-[#D87D4A]">{card.label}</p>
                <h2 className="text-[28px] font-semibold">{card.name}</h2>
                <p className="opacity-50">{card.description}</p>
                <button className="bg-[#D87D4A] px-4 py-2 text-white">
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HeadphoneShop />
      <AudioGear />
    </main>
  );
};

export default Speaker;
