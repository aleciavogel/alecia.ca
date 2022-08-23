import React, { FC, useEffect, useCallback } from "react";
import useMenuControl from "../../features/menu/useMenuControl";

const SiteMenu: FC = () => {
  const { toggleMenu } = useMenuControl();

  // Pressing the escape key should hide the menu
  const escapeMenu = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggleMenu();
      }
    },
    [toggleMenu],
  );

  useEffect(() => {
    document.addEventListener("keydown", escapeMenu, false);
    return () => document.removeEventListener("keydown", escapeMenu, false);
  }, [escapeMenu]);

  return <nav id="site-menu" role="menu"></nav>;
};

export default SiteMenu;
