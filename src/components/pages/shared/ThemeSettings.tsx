"use client";
import { useTheme } from "next-themes";
import DayIcon from "@/components/images/icons/DayIcon";
import NightIcon from "@/components/images/icons/NightIcon";

interface Props {
  hover: boolean;
}

export default function ThemeSettings({ hover }: Props) {
  const { theme, setTheme } = useTheme();
  const icon = theme === "dark" ? <NightIcon className="h-4" /> : <DayIcon className="h-5" />;

  if (hover) {
    return (
      <div>
        <div
          role="button"
          aria-label="Toggle dark mode"
          id="theme-toggle"
          className="theme-button pointer-events-auto"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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