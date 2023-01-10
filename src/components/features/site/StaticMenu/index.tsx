import React, { FC } from "react";
import NavLink from "./NavLink";

const StaticMenu: FC = () => (
  <nav
    aria-label="Main"
    className="static-menu absolute top-0 left-0 z-10 py-4 w-full pointer-events-none md:py-6"
  >
    <ul className="space-x-10 text-base h-10 flex justify-center items-center">
      <NavLink to="/" srOnly={true}>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/speaking">Speaking</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  </nav>
);

export default StaticMenu;
