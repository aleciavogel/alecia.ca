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
      <Link id="site-brand" to="/">
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
