"use client";

import React, { createContext, useState, useCallback, useEffect } from "react";
import { getCookie, setCookie } from "cookies-next";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

interface Props {
  children: string | React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  let initialTheme = "dark";
  const initialCookie = getCookie("theme");
  const isNewUser = initialCookie !== "light" && initialCookie !== "dark";

  if (typeof window !== "undefined" && isNewUser) {
    initialTheme =
      window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  } else if (initialCookie === "light" || initialCookie === "dark") {
    initialTheme = initialCookie;
  }
  const [theme, setTheme] = useState<string>(initialTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCookie("theme", newTheme);
  }, [setTheme, theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const ThemeContextConsumer = ThemeContext.Consumer;
