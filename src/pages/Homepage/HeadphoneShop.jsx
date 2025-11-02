const cardDetails = [
  {
    img: "/assets/cart/headphone (2).png",
    name: "HEADPHONES",
    id: "SHOP",
  },
  {
    img: "/assets/cart/headphone (1).png",
    name: "SPEAKERS",
    id: "SHOP",
  },
  {
    img: "/assets/cart/headphone (3).png",
    name: "EARPHONES",
    id: "SHOP",
  },
];

const HeadphoneShop = () => {
  return (
    <div>
      <div className="mb-20 px-10 flex flex-col gap-16 pt-12 items-center md:flex-row md:justify-center md:gap-10">
        {cardDetails.map((card, index) => (
          <div
            key={index}
            className="relative bg-[#f1f1f1] w-[300px] h-[160px] rounded-lg flex flex-col items-center justify-end pb-6 hover:scale-105 transition-transform"
          >
            {/* Floating image */}
            <img
              src={card.img}
              alt={card.name}
              className="absolute -top-14 w-[120px]"
            />

            {/* Text content */}
            <div className="flex flex-col items-center text-center mt-6">
              <h2 className="font-semibold tracking-wider text-[15px]">
                {card.name}
              </h2>
              <div className="flex items-center gap-2 mt-2 cursor-pointer hover:text-[#D87D4A] transition">
                <p className="text-sm opacity-70">{card.id}</p>
                <span className="text-[#D87D4A] font-bold text-lg">›</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphoneShop;
