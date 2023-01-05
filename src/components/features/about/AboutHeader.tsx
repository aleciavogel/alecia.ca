import React, { FC } from "react";
import AleciaCouch from "../../vectors/AleciaCouchSvg";

const AboutHeader: FC = () => {
  return (
    <header className={`about-header`}>
      <div data-scroll data-scroll-speed="2" className={`about-header-wrapper`}>
        <h1>About Alecia</h1>
        <p className="text-white-rgba">
          Coding since the age of 8, I've been passionate about creating delightful and intuitive digital experiences
          for over two decades.
        </p>
      </div>
      <AleciaCouch />
    </header>
  );
}

export default AboutHeader;
