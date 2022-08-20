import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alecia.ca`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",

        /* Enable font loading listener to handle FOUT */
        enableListener: true,

        /* Font listener interval (in ms). Default is 300ms. Recommended: >=300ms */
        interval: 300,

        /* Font listener timeout value (in ms). Default is 30s (30000ms). Listener will no longer check for loaded fonts after timeout, fonts will still be loaded and displayed, but without handling FOUT. */
        timeout: 30000,

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Silka", "Eksell Display Large"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/css/all.css",
          },
        ],
      },
    },
  ],
};

export default config;
