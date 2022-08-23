import React, { createContext, FC, useState } from "react";

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
