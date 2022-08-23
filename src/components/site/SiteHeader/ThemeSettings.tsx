import React, { FC, useCallback, useMemo } from "react";

import DayIcon from "../../icons/DayIcon";
import NightIcon from "../../icons/NightIcon";
import useSettings from "../../features/settings/useSettings";
import { SiteTheme } from "../../../types/settings";

interface Props {
  hover: boolean;
}

const ThemeSettings: FC<Props> = ({ hover }) => {
  const {
    settings: { theme: currentTheme },
    saveSettings,
  } = useSettings();
  const isDark = useMemo(() => currentTheme === SiteTheme.DARK, [currentTheme]);
  const icon = isDark ? <DayIcon className="h-5" /> : <NightIcon className="h-4" />;

  const toggleTheme = useCallback(() => {
    saveSettings(isDark ? { theme: SiteTheme.LIGHT } : { theme: SiteTheme.DARK });
  }, [saveSettings, isDark]);

  if (hover) {
    return (
      <div className="mt-6 flex flex-col items-end justify-end">
        <div role="button" className="theme-button" onClick={toggleTheme}>
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
