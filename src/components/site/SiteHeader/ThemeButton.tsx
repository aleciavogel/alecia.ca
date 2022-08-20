import React, { FC } from "react";
import { getLinkColor } from "../../../utils/colors";
import { DefaultColor } from "../../../definitions/colors";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

interface Props {
  primary_color: DefaultColor;
  accent_color: DefaultColor;
  theme: string;
  shade?: number;
  hover: boolean;
  iconClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

const ThemeButton: FC<Props> = ({
  className,
  hover,
  primary_color,
  shade,
  children,
  theme: targetTheme,
}) => {
  const current_color = getLinkColor(hover, primary_color, shade);
  const button_styles = `cursor-pointer pointer-events-auto ${current_color}`;
  const hover_styles = `hover:text-${primary_color}-${shade} transition-colors ease-in-out duration-300 `;

  if (hover) {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }: any) => (
          <div
            role="button"
            onClick={() => toggleTheme(targetTheme === "dark" ? "dark" : "light")}
            className={`theme-button ${button_styles} ${hover_styles} ${className ?? ""} ${
              targetTheme === theme ? "active" : ""
            }`}
          >
            {children}
          </div>
        )}
      </ThemeToggler>
    );
  }

  return (
    <div
      className={`theme-button theme-button-under pointer-events-none ${className ?? ""} ${
        targetTheme === "dark" ? "theme-button-dark" : "theme-button-light"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeButton;
