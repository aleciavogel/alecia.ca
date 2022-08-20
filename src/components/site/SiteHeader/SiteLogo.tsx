import React, { FC } from "react";
import { Link } from "gatsby";

import Logo from "../../vectors/Logo";
import { DefaultColor } from "../../../definitions/colors";

interface Props {
  hover: boolean;
  color?: DefaultColor;
}

const SiteLogo: FC<Props> = ({ hover, color = "indigo" }) => {
  if (hover) {
    return (
      <Link
        to="/"
        className={`pointer-events-auto text-transparent hover:text-${color}-300 transition-colors ease-in-out duration-300`}
      >
        <span className="sr-only">Alecia Vogel</span>
        <Logo />
      </Link>
    );
  }

  return (
    <div className="pointer-events-none text-current">
      <Logo />
    </div>
  );
};

export default SiteLogo;
