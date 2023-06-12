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
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, [setTheme, theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setCookie("theme", theme);
  }, [setCookie, theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContextConsumer = ThemeContext.Consumer;
