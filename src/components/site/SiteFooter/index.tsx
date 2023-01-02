import React, { FC } from "react";
import { Link } from "gatsby";

import AleciaSitSvg from "../../vectors/AleciaSitSvg";
import SocialLinks from "./SocialLinks";
import { DefaultColor } from "../../../definitions/colors";

interface Props {
  accent_color?: DefaultColor;
  primary_color?: DefaultColor;
}

const SiteFooter: FC<Props> = ({ accent_color = "pink", primary_color = "indigo" }) => {
  return (
    <footer id="site-footer">
      <div className="mb-4 mx-auto sm:flex sm:items-center justify-between max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
        <div className="relative after:site-footer-svg-bg-cover z-50 -mt-28 -mb-24 mr-8">
          <AleciaSitSvg
            className="block h-80"
          />
        </div>
        <div className="py-5 mr-12">
          <h2 className={`font-serif text-5xl mb-2`}>Alecia Vogel</h2>
          <p className="text-white leading-relaxed mb-3">
            is a <strong className="font-bold">full stack web developer</strong> and{" "}
            <strong className="font-bold">digital product designer</strong> living in downtown
            Edmonton.
          </p>
        </div>
        <div className="grid grid-cols-2 w-3/4 -mt-4">
          <nav className="text-white">
            <h2 className={`mb-3 font-bold text-xl`}>Get To Know Me</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <nav className="text-white">
            <h2 className="mb-3 font-bold text-xl">Take A Gander</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/blog">Blog Articles</Link>
              </li>
              <li>
                <Link to="/tutorials">Coding Tutorials</Link>
              </li>
              <li>
                <Link to="/virtual-interview">Talks & Presentations</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr className="my-6 border-gray-800 sm:mx-auto lg:my-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl" />
      <div className="w-full mx-auto flex grid grid-cols-3 gap-4 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl">
        <div></div>
        <p className="text-gray-600 text-sm text-center mt-2">
          &copy; {new Date().getFullYear()} Alecia Vogel. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default SiteFooter;
