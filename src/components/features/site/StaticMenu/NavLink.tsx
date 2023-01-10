import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  to: string;
  srOnly?: boolean;
  children?: React.ReactNode | string;
}

const NavLink: FC<Props> = ({ to, children, srOnly = false }) => {
  return (
    <li
      className={`${srOnly ? "sr-only " : ""}grow-0 pointer-events-auto font-sans-serif relative`}
    >
      <Link
        className={
          "text-white-rgba hover:text-white text-base pointer-events-auto relative transition-color duration-300 ease-in-out nextDiv:text-transparent"
        }
        partiallyActive={true}
        getProps={({ isCurrent, isPartiallyCurrent }) =>
          isCurrent || isPartiallyCurrent ? { className: "active" } : {}
        }
        to={to}
      >
        {children}
      </Link>
      <div className="absolute top-full left-0 [font-size:10px] w-full text-center">&#11042;</div>
    </li>
  );
};

export default NavLink;
