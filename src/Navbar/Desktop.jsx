import NavbarLink from "./Navlink";

const Desktop = () => {
  return (
    <div className="text-white">
      <h3 className="font-semibold text-xl ">audiophile</h3>

      <ul>
        {NavbarLink.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <img src="/assets/carts.svg" alt="cart" />
    </div>
  );
};

export default Desktop;
