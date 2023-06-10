import useDarkMode from "use-dark-mode";

import DayIcon from "@/components/icons/DayIcon";
import NightIcon from "@/components/icons/NightIcon";

interface Props {
  hover: boolean;
}

export default function ThemeSettings({ hover }: Props) {
  const { toggle, value: isDark } = useDarkMode(undefined, { classNameDark: "dark" });
  const icon = isDark ? <NightIcon className="h-4" /> : <DayIcon className="h-5" />;

  if (hover) {
    return (
      <div className="mt-6 flex flex-col items-end justify-end">
        <div
          role="button"
          aria-label="Toggle dark mode"
          id="theme-toggle"
          className="theme-button pointer-events-auto"
          onClick={toggle}
        >
          {icon}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-end justify-end">
      <div className="theme-button">{icon}</div>
    </div>
  );
}
