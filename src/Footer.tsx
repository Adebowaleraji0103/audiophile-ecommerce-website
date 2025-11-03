import NavbarLink from "./Navbar/Navlink";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-[2.2rem] px-[1.5rem] py-[3rem] bg-black text-white text-center text-[14px] md:text-left md:px-[2rem] lg:px-[8rem]">
      <ul className="flex flex-col gap-[2rem] lg:flex-row lg:justify-between">
        <li className="font-semibold text-[22px]">audiophile</li>
        <li className="flex flex-col gap-3 md:flex-row md:gap-[1.8rem]">
          {NavbarLink.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </li>
      </ul>
      <div className="flex flex-col gap-[2.5rem] text-[#7D7D7D] lg:w-[40%]">
        <p>
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <p>Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
