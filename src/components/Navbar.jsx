import { NavLink } from "react-router-dom";
import Logo from "./Icons/Logo";
import ButtonIcon from "./Buttons/ButtonIcon";
import Hamburger from "./Icons/Hamburger";
import Cart from "./Icons/Cart";

const Navbar = () => {
  return (
    <nav className="bg-dark text-white py-4">
      <div className="custom-container flex justify-between items-center py-4 border-b border-veryLightGray">
        <div className="md:hidden">
          <ButtonIcon>
            <Hamburger />
          </ButtonIcon>
        </div>

        <div className="md:hidden lg:block">
          <Logo />
        </div>

        {/* Tablet View */}
        <div className="hidden gap-x-12 md:flex lg:hidden">
          <ButtonIcon>
            <Hamburger />
          </ButtonIcon>

          <Logo />
        </div>

        <ul className="hidden gap-x-4 lg:flex">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-subtitle uppercase text-accent"
                  : "text-subtitle uppercase"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-subtitle uppercase text-accent"
                  : "text-subtitle uppercase"
              }
              to="/headphones"
            >
              Headphones
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-subtitle uppercase text-accent"
                  : "text-subtitle uppercase"
              }
              to="/speakers"
            >
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-subtitle uppercase text-accent"
                  : "text-subtitle uppercase"
              }
              to="/earphones"
            >
              Earphones
            </NavLink>
          </li>
        </ul>

        <ButtonIcon>
          <Cart />
        </ButtonIcon>
      </div>
    </nav>
  );
};

export default Navbar;
