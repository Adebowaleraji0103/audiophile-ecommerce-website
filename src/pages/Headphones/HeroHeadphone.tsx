const card = [
  {
    imageMobile: "/assets/shared/mobile/image-xx99-mark-two-headphones.jpg",
    imageTablet: "/assets/shared/tablet/image-xx99-mark-two-headphones.jpg",
    imageDesktop: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
    label: "NEW PRODUCT",
    name: "XX99 MARK II HEADPHONES",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    button: "SEE PRODUCT",
  },
];

const HeroHeadphone = () => {
  return (
    <main>
      <h1>HEADPHONES</h1>
      <div>
        {card.map((card, index) => (
          <div key={index}>
            <img src={card.imageMobile} alt="imageMobile" className="md:hidden"/>
            <img src={card.imageTablet} alt="imageTablet" className="hidden md:flex lg:hidden"/>
            <img src={card.imageDesktop} alt="imageDesktop" className="hidden lg:flex"/>
            <div>
              <p>{card.label}</p>
              <h2>{card.name}</h2>
                <p>{card.description}</p>
                <button>{card.button}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HeroHeadphone;
