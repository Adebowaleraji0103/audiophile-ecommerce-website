import AudioGear from "../Homepage/AudioGear";
import HeadphoneShop from "../Homepage/HeadphoneShop";

const card = [
  {
    imageMobile: "/assets/shared/mobile/image-zx9-speaker.jpg",
    imageTablet: "/assets/shared/tablet/image-zx9-speaker.jpg",
    imageDesktop: "/assets/shared/desktop/image-zx9-speaker.jpg",
    label: "NEW PRODUCT",
    name: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    button: "SEE PRODUCT",
  },
  {
    imageMobile: "/assets/shared/mobile/image-xx99-mark-one-headphones.jpg",
    imageTablet: "/assets/shared/tablet/image-xx99-mark-one-headphones.jpg",
    imageDesktop: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
    // label: "NEW PRODUCT",
    name: "XX99 MARK I HEADPHONES",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    button: "SEE PRODUCT",
  },
];

const Speaker = () => {
  return (
    <main className="flex flex-col gap-[3rem]">
      <div>
        <h1 className="bg-black text-white text-[24px] font-semibold text-center py-6 mb-[2rem]">
          SPEAKERS
        </h1>
      </div>
      <HeadphoneShop />
      <AudioGear />
    </main>
  );
};

export default Speaker;
