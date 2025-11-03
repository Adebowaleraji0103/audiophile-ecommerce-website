const Mobile = () => {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="flex gap-6 items-center">
        <img src="/assets/hamburger.svg" alt="hambugger" className="lg:hidden"/>
        <h3 className="font-semibold text-xl hidden md:flex lg:hidden">audiophile</h3>
      </div>
      <h3 className="font-semibold text-xl md:hidden">audiophile</h3>
      <div>
        <img src="/assets/carts.svg" alt="cart" className="lg:hidden"/>
      </div>
    </div>
  );
};

export default Mobile;
