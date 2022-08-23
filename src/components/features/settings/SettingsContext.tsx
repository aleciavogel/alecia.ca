import React, { FC, createContext, useEffect, useState } from "react";
import { SiteTheme } from "../../../types/settings";

const initialSettings = {
  theme: SiteTheme.LIGHT,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem("settings");

    if (storedData) {
      settings = JSON.parse(storedData);
    } else {
      settings = {
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? SiteTheme.DARK
          : SiteTheme.LIGHT,
      };
    }
  } catch (err) {
    // Error will be thrown if stored data is not a stringified JSON
    console.error(err);
  }

  return settings;
};

export const storeSettings = (settings: Settings) => {
  window.localStorage.setItem("settings", JSON.stringify(settings));
};

type SettingsContextType = {
  settings: Settings;
  saveSettings: (value: Settings) => void;
};

const SettingsContext = createContext<SettingsContextType>({
  settings: initialSettings,
  saveSettings: () => {},
});

interface Props {
  children: string | React.ReactNode;
}

export const SettingsProvider: FC<Props> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(initialSettings);

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings(restoredSettings);
    }
  }, []);

  const saveSettings = (updatedSettings: Partial<Settings>) => {
    const newSettings: Settings = { ...settings, ...updatedSettings };
    setSettings(newSettings);
    storeSettings(newSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      <div className={settings.theme}>{children}</div>
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
