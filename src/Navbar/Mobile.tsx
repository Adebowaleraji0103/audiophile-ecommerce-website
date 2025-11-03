import NavbarLink from "./Navlink";
import { useState } from "react";

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<div className="relative flex justify-between items-center text-white px-7">
  <div className="flex gap-6 items-center">
    <button onClick={() => setIsOpen(!isOpen)}>
      <img
        src="/assets/hamburger.svg"
        alt="hamburger"
        className="lg:hidden relative z-50"
      />
    </button>

    {isOpen && (
      <ul className="bg-black font-semibold flex flex-col gap-[2rem] w-full h-screen px-5 py-[2rem] absolute top-11 left-0 z-40 lg:hidden">
        {NavbarLink.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    )}

    <h3 className="font-semibold text-xl hidden md:flex lg:hidden">
      audiophile
    </h3>
  </div>

  <h3 className="font-semibold text-xl md:hidden">audiophile</h3>

  <div>
    <img src="/assets/carts.svg" alt="cart" className="lg:hidden" />
  </div>
</div>
  )}

export default Mobile;
