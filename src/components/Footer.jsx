import { NavLink } from "react-router-dom";
import Logo from "./Icons/Logo";
import Facebook from "./Icons/Facebook"
import Twitter from "./Icons/Twitter";
import Instagram from "./Icons/Instagram"

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="custom-container py-6 flex flex-col  gap-6">
        <nav className="flex flex-col gap-6 self-center md:self-start lg:flex-row lg:w-full lg:justify-between">
          <Logo />
          <ul className="text-center flex flex-col gap-4 md:flex-row">
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
        </nav>
        <p className="text-body opacity-50 text-center md:text-left lg:w-1/2">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="flex flex-col gap-y-6 self-center md:flex-row md:self-start md:justify-between md:w-full lg:flex-col-reverse">
          <p className="text-body opacity-50">
            Copyright 2021. All Rights Reserved.
          </p>
          <div className="self-center flex items-center gap-x-6 lg:self-end">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
