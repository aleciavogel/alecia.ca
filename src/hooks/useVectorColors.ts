import { useStaticQuery, graphql } from "gatsby";
import colors from "tailwindcss/colors";
import { DefaultColor } from "../definitions/colors";
import { ISite } from "../definitions/blog";

interface ColorArgs {
  primary_color?: DefaultColor;
  accent_color?: DefaultColor;
}

const useVectorColors = ({ primary_color, accent_color }: ColorArgs) => {
  const data: { site: ISite } = useStaticQuery(graphql`
    query VectorColorsQuery {
      site {
        siteMetadata {
          vectorColors {
            alecia {
              hair
              skin
              shirt
              pants
            }
            phoebe {
              base
              highlight
              ears
            }
          }
        }
      }
    }
  `);

  const { alecia, phoebe } = data.site.siteMetadata?.vectorColors;

  return {
    alecia: {
      hair: {
        light: colors[alecia.hair][700],
        dark: colors[alecia.hair][800],
      },
      skin: {
        light: colors[alecia.skin][200],
        dark: colors[alecia.skin][400],
      },
      shirt: {
        light: colors[accent_color ?? alecia.shirt][400],
        dark: colors[accent_color ?? alecia.shirt][600],
      },
      pants: {
        light: colors[primary_color ?? alecia.pants][600],
        dark: colors[primary_color ?? alecia.pants][800],
      },
      socks: {
        light: colors[primary_color ?? alecia.pants][50],
        dark: colors[primary_color ?? alecia.pants][300],
      },
    },
    phoebe: {
      base: {
        light: colors[phoebe.base][500],
        dark: colors[phoebe.base][700],
      },
      highlight: {
        light: colors[phoebe.highlight][300],
        dark: colors[phoebe.highlight][500],
      },
      ears: {
        light: colors[phoebe.ears][200],
        dark: colors[phoebe.ears][400],
      },
    },
  };
};

export default useVectorColors;
