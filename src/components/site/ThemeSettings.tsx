"use client";

import useThemeContext from "@/hooks/useTheme";
import DayIcon from "@/components/icons/DayIcon";
import NightIcon from "@/components/icons/NightIcon";

interface Props {
  hover: boolean;
}

export default function ThemeSettings({ hover }: Props) {
  const { theme, toggleTheme } = useThemeContext();
  const icon = theme === "dark" ? <NightIcon className="h-4" /> : <DayIcon className="h-5" />;

  if (hover) {
    return (
      <div>
        <div
          role="button"
          aria-label="Toggle dark mode"
          id="theme-toggle"
          className="theme-button pointer-events-auto"
          onClick={toggleTheme}
        >
          {icon}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="theme-button">{icon}</div>
    </div>
  );
}
