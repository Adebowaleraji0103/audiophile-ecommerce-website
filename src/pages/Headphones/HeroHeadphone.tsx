import AudioGear from "../Homepage/AudioGear";
import HeadphoneShop from "../Homepage/HeadphoneShop";
import { Link } from "react-router-dom";
import products from "../../Data/product";



// const products = [
//   {
//     imageMobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
//     imageTablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
//     imageDesktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
//     label: "NEW PRODUCT",
//     name: "XX99 MARK II HEADPHONES",
//     description:
//       "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
//     id: "xx99-mark-two",
//     price: 2999,
//     features: `Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for ease of use and a stylish aluminum frame.`,
//     includes: [
//       { quantity: 1, item: "Headphone Unit" },
//       { quantity: 2, item: "Replacement Earcups" },
//       { quantity: 1, item: "User Manual" },
//       { quantity: 1, item: "3.5mm 5m Audio Cable" },
//       { quantity: 1, item: "Travel Bag" },
//     ],
//     button: "SEE PRODUCT",
//   },
//   {
//     imageMobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
//     imageTablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
//     imageDesktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
//     name: "XX99 MARK I HEADPHONES",
//     description:
//       "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
//     id: "xx99-mark-one",
//     price: 1750,
//     features: `As the first model in the XX99 series, the Mark I headphones demonstrate Audiophile's commitment to delivering high-fidelity audio. Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for ease of use and a stylish aluminum frame.`,
//     includes: [
//       { quantity: 1, item: "Headphone Unit" },
//       { quantity: 2, item: "Replacement Earcups" },
//       { quantity: 1, item: "User Manual" },
//       { quantity: 1, item: "3.5mm 5m Audio Cable" },
//     ],
//     button: "SEE PRODUCT",
//   },
//   {
//     imageMobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
//     imageTablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
//     imageDesktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
//     // label: "NEW PRODUCT",
//     name: "XX59 MARK II HEADPHONES",
//     description:
//     "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
//     id: "xx99-mark-three",
//     price: 899,
//     features: `These headphones have been created from durable, high-quality materials tough enough to withstand daily use. Its compact design folds easily for transport and storage, while the earcups swivel to provide a better fit and improved comfort for extended listening sessions.`,
//     includes: [ 
//       { quantity: 1, item: "Headphone Unit" },
//       { quantity: 2, item: "Replacement Earcups" },
//       { quantity: 1, item: "User Manual" },
//       { quantity: 1, item: "3.5mm 5m Audio Cable" },
//     ],
//     button: "SEE PRODUCT",
//   },
// ];

const HeroHeadphone = () => {
  // only show headphone products
  const headphone = products.filter(
    (product) => product.category === "headphones"
  );
  return (
    <main className="flex flex-col gap-[3rem]">
      <div>
        <h1 className="bg-black text-white text-[24px] font-semibold text-center py-6 mb-[2rem]">
          HEADPHONES
        </h1>
        <div className="px-[1.4rem] flex flex-col gap-[2rem] lg:gap-[4rem] ">
          {headphone.map((product, index) => (
            <div
              key={index}
              className="flex flex-col gap-[2.4rem] lg:flex-row lg:justify-between lg:gap-[3rem] lg:px-[4rem]"
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
                    {product.button}
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

export default HeroHeadphone;
