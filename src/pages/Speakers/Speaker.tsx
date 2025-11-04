import AudioGear from "../Homepage/AudioGear";
import HeadphoneShop from "../Homepage/HeadphoneShop";
import products from "../../Data/product";
import { Link } from "react-router-dom";
// const card = [
//   {
//     imageMobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
//     imageTablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
//     imageDesktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
//     label: "NEW PRODUCT",
//     name: "ZX9 SPEAKER",
//     description:
//       "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
//     button: "SEE PRODUCT",
//   },
//   {
//     imageMobile: "/assets/shared/mobile/image-zx7-speaker.jpg",
//     imageTablet: "/assets/shared/tablet/image-zx7-speaker.jpg",
//     imageDesktop: "/assets/shared/desktop/image-zx7-speaker.jpg",
//     // label: "NEW PRODUCT",
//     name: "ZX7 SPEAKER",
//     description:
//       "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
//     button: "SEE PRODUCT",
//   },
// ];

const Speaker = () => {
  const speakersfilter = products.filter((product => product.category === "speakers"));

  return (
    <main className="flex flex-col gap-[3rem]">
      <div>
        <h1 className="bg-black text-white text-[24px] font-semibold text-center py-6 mb-[2rem]">
          SPEAKERS
        </h1>
        <div className="px-[1.4rem] flex flex-col gap-[3rem] lg:gap-[4rem] ">
          {speakersfilter.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-[1.4rem] lg:flex-row lg:justify-between lg:gap-[3rem] lg:px-[4rem]
              "
            >
              <img
                src={product.imageMobile}
                alt="imageMobile"
                className="hidden md:flex lg:hidden rounded-xl"
              />
              <img
                src={product.imageTablet}
                alt="imageTablet"
                className="flex md:hidden rounded-xl"
              />
              <img
                src={product.imageDesktop}
                alt="imageDesktop"
                className="hidden lg:flex h-[450px] rounded-xl"
              />
              <div className="flex flex-col gap-[1rem] justify-center items-center text-center px-4 lg:text-start  lg:items-start lg:w-[700px] ">
                <p className="text-[#D87D4A]">{product.label}</p>
                <h2 className="text-[28px] font-semibold">{product.name}</h2>
                <p className="opacity-50">{product.description}</p>
                <Link to={`/product/${product.id}`}>
                  <button className="bg-[#D87D4A] px-4 py-2 text-white">
                    SEE PRODUCT
                  </button>
                </Link>
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
