import React, { FC } from "react";
import useDarkMode from "use-dark-mode";

import DayIcon from "../../icons/DayIcon";
import NightIcon from "../../icons/NightIcon";

interface Props {
  hover: boolean;
}

const ThemeSettings: FC<Props> = ({ hover }) => {
  const { toggle, value: isDark } = useDarkMode(undefined, { classNameDark: 'dark' });
  const icon = isDark ? <NightIcon className="h-4" /> : <DayIcon className="h-5" />;

  if (hover) {
    return (
      <div className="mt-6 flex flex-col items-end justify-end">
        <div role="button" className="theme-button" onClick={toggle}>
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
};

export default ThemeSettings;
