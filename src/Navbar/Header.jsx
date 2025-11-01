import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <div className="bg-black py-5 px-7">
      <Mobile />
      <Desktop/>
    </div>
  );
};

export default Header;
