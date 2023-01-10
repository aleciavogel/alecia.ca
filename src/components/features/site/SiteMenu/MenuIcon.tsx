import React, { FC } from "react";
import BrandIcon from "../../../icons/BrandIcon";
import useMenuControl from "./useMenuControl";

interface Props {
  hover?: boolean;
}

const MenuIcon: FC<Props> = ({ hover = false }) => {
  const { toggleMenu } = useMenuControl();
  const icon = <BrandIcon className="h-8 md:h-10 w-auto pointer-events-auto" />;

  if (hover) {
    return (
      <div id="site-menu-icon" role="button" onClick={toggleMenu}>
        {icon}
      </div>
    );
  }

  return icon;
};

export default MenuIcon;
