import AudioGear from "../Homepage/AudioGear";
import HeadphoneShop from "../Homepage/HeadphoneShop";

const card = [
  {
    imageMobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
    imageTablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
    imageDesktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
    id: "xx99-mark-two",
    label: "NEW PRODUCT",
    name: "XX99 MARK II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    button: "SEE PRODUCT",
  },
  {
    imageMobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
    imageTablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
    imageDesktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    id: "xx99-mark-one",
    // label: "NEW PRODUCT",
    name: "XX99 MARK I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    button: "SEE PRODUCT",
  },
  {
    imageMobile: "/assets/shared/mobile/image-xx59-headphones.jpg",
    imageTablet: "/assets/shared/tablet/image-xx59-headphones.jpg",
    imageDesktop: "/assets/shared/desktop/image-xx59-headphones.jpg",
    id: "xx99-mark-three",
    // label: "NEW PRODUCT",
    name: "XX59 MARK II HEADPHONES",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    button: "SEE PRODUCT",
  },
];

const HeroHeadphone = () => {
  return (
    <main className="flex flex-col gap-[3rem]">
      <div>
        <h1 className="bg-black text-white text-[24px] font-semibold text-center py-6 mb-[2rem]">
          HEADPHONES
        </h1>
        <div className="px-[1.4rem] flex flex-col gap-[2rem] lg:gap-[4rem] ">
          {card.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-[2.4rem] lg:flex-row lg:justify-between lg:gap-[3rem] lg:px-[4rem]"
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
              <div className="flex flex-col gap-[1rem] justify-center items-center text-center px-4 lg:text-start  lg:items-start lg:w-[700px] ">
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
      <AudioGear/>
    </main>
  );
};

export default HeroHeadphone;
