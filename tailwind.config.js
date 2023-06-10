const tailwindColors = require("./node_modules/tailwindcss/colors");
const safelist = [];

// Skip these to avoid a load of deprecated warnings when tailwind starts up
const deprecated = ["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"];

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName)) {
    continue;
  }

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  const palette = tailwindColors[colorName];

  if (typeof palette === "object") {
    shades.forEach((shade) => {
      if (shade in palette) {
        safelist.push(`text-${colorName}-${shade}`);
        safelist.push(`child:text-${colorName}-${shade}`);
        safelist.push(`hover:text-${colorName}-${shade}`);
        safelist.push(`dark:hover:text-${colorName}-${shade}`);
        safelist.push(`dark:text-${colorName}-${shade}`);
        safelist.push(`bg-${colorName}-${shade}`);
        safelist.push(`hover:bg-${colorName}-${shade}`);
        safelist.push(`nextDiv:text-${colorName}-300`);
        safelist.push(`zigzag-${colorName}-400`);
        safelist.push(`zigzag-${colorName}-600`);
        safelist.push(`hover:zigzag-${colorName}-400`);
        safelist.push(`hover:zigzag-${colorName}-600`);
        safelist.push(`text-${colorName}`);
        safelist.push(`primary-${colorName}`);
        safelist.push(`accent-${colorName}`);
      }
    });
  }
}

safelist.push("page-content");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  safelist,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: [
        'var(--font-eksell-large), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      ],
      "serif-small": [
        'var(--font-eksell-small), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      ],
      "sans-serif": [
        'var(--font-silka), ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
    },
    extend: {
      colors: {
        "white-rgba": "rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("visibleChild", "& > :not([hidden]) ~ :not([hidden])");
      addVariant("activeLink", "&.active");
      addVariant("nextDiv", "& + div");
    },
  ],
};
