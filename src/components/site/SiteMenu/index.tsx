import React, { FC, useEffect, useCallback } from "react";
import useMenuControl from "../../features/menu/useMenuControl";
import CloseButton from "./CloseButton";
import MenuIllustration from "./MenuIllustration";

const SiteMenu: FC = () => {
  const { toggleMenu } = useMenuControl();

  // Pressing the escape key hides the menu
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

  return (
    <nav data-scroll data-scroll-sticky data-scroll-target="#site-wrapper" id="site-menu" role="menu" >
      <CloseButton onClose={toggleMenu} />

      <MenuIllustration />
    </nav>
  );
};

export default SiteMenu;
