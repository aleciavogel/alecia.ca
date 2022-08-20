import React, { FC } from "react";

import DayIcon from "../../icons/DayIcon";
import NightIcon from "../../icons/NightIcon";
import ThemeButton from "./ThemeButton";
import { DefaultColor } from "../../../definitions/colors";

interface Props {
  primary_color: DefaultColor;
  accent_color: DefaultColor;
  shade?: number;
  hover: boolean;
}

const ThemeSettings: FC<Props> = ({ hover, ...rest }) => {
  return (
    <div className="flex flex-col items-end justify-end">
      <ThemeButton theme="light" hover={hover} className="mb-4" {...rest}>
        <DayIcon className="h-5" />
      </ThemeButton>

      <ThemeButton theme="dark" hover={hover} {...rest}>
        <NightIcon className="h-4" />
      </ThemeButton>
    </div>
  );
};

export default ThemeSettings;
