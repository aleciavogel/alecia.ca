import { DefaultColor } from "../definitions/colors";

export const getLinkColor = (hover: boolean, primary_color?: DefaultColor, shade?: number) => {
  if (hover) {
    return "text-transparent";
  }

  if (primary_color) {
    if (shade) {
      return `text-${primary_color}-${shade} dark:text-${primary_color}-${shade - 200}`;
    }

    return `text-${primary_color}`;
  }

  return "text-white";
};
