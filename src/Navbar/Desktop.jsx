import NavbarLink from "./Navlink";

const Desktop = () => {
  return (
    <div className="px-[6rem] ">
      <div className="text-white justify-between items-center   hidden lg:flex">
        <h3 className="font-semibold text-xl ">audiophile</h3>

        <ul className="flex gap-15">
          {NavbarLink.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <img src="/assets/carts.svg" alt="cart" />
      </div>
    </div>
  );
};

export default Desktop;
