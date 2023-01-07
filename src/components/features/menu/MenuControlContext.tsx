import React, { createContext, FC, useState, useCallback, useEffect } from "react";
import {useLocomotiveScroll} from "react-locomotive-scroll";

type MenuControlContextType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const MenuControlContext = createContext<MenuControlContextType>({
  menuOpen: false,
  toggleMenu: () => {},
});

interface Props {
  children: string | React.ReactNode;
}

export const MenuControlProvider: FC<Props> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { scroll } = useLocomotiveScroll();

  const toggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [scroll, menuOpen]);

  useEffect(() => {
    if (scroll === null) {
      return;
    }
    
    if (menuOpen) {
      scroll.stop();
    } else {
      scroll.start();
    }
  }, [scroll, menuOpen])

  return (
    <MenuControlContext.Provider
      value={{
        menuOpen,
        toggleMenu,
      }}
    >
      {children}
    </MenuControlContext.Provider>
  );
};

export const MenuControlConsumer = MenuControlContext.Consumer;

export default MenuControlContext;
