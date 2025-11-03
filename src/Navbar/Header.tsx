import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Header = () => {
  return (
    <div className="bg-[#1a1a1a] text-[14px] font-semibold pb-5 border-b border-b-zinc-700 py-5 ">
      <Mobile />
      <Desktop />
    </div>
  );
};

export default Header;
