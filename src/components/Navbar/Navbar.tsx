import headerLogo from "../../assets/images/header-logo.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import { navLinks } from "../../constants";
import { hamburger } from "../../assets/icons";

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1  justify-center items-center flex gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li className="text-slate-gray text-lg leading-normal">
              {item.label}
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
