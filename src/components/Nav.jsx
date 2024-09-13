import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* /// */}
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={30} />
        </a>
        {/* /// */}
        <ul className="flex-1 flex  justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((values) => (
            <li key={values.label}>
              <a
                href={values.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {values.label}
              </a>
            </li>
          ))}
        </ul>
        {/* 1024px la entha element hidden aaidanum */}
        <button className="bg-red-400 text-white font-palanquin font-semibold py-2 px-5 rounded-xl max-lg:hidden">
          Sign In/Explore
        </button>
        {/* 1024px ku vanthuchu na.. entha element block aaidanum */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="icon" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
