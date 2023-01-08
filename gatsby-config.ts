import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alecia.ca`,
    siteUrl: `https://alecia.ca`,
    description: `Alecia Vogel is a full stack developer and digital product designer living in downtown Edmonton.`,
    author: {
      name: "Alecia Vogel",
      title: "Full Stack Developer",
      email: "hello@alecia.ca",
      summary:
        "Alecia Vogel is a full stack developer and digital product designer living in downtown Edmonton.",
    },
    social: {
      twitter: `aleciavogel`,
      dribbble: `aleciavogel`,
      linkedIn: `alecia-vogel`,
      github: `aleciavogel`,
    },
    vectorColors: {
      alecia: {
        hair: "yellow",
        skin: "rose",
        pants: "indigo",
        shirt: "pink",
      },
      phoebe: {
        base: "gray",
        highlight: "gray",
        ears: "pink",
      },
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Alecia Vogel Portfolio",
        short_name: "Alecia.ca",
        start_url: "/",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },

    // Assign pages for the blog
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/content/blog`,
      },
      __key: "blog",
    },

    // Customizing markdown output for the blog
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-external-links",
          "gatsby-remark-images",
          "gatsby-remark-numbered-footnotes",
          "gatsby-remark-embedder",
          {
            // Custom plugin can be found in `plugins/gatsby-plugin-social-banners`
            resolve: "gatsby-plugin-social-banners",
            options: {
              logoSvg: `${__dirname}/static/images/logo.svg`,
              siteName: "alecia.ca",
              destination: `${__dirname}/public/seo`,
              default: {
                author: "Alecia Vogel",
                description: "Full Stack Developer",
                avatar: `${__dirname}/static/images/alecia_author.png`,
              },
              fonts: {
                title: `${__dirname}/static/fonts/bitmap/eksell/eksell.fnt`,
                brand: `${__dirname}/static/fonts/bitmap/silka-bold/silka-bold.fnt`,
                author: `${__dirname}/static/fonts/bitmap/silka-bold-small/silka-bold-small.fnt`,
                job: `${__dirname}/static/fonts/bitmap/silka-small/silka-small.fnt`
              },
              custom: {},
            }
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {},
          },
        ],
      },
    },

    // CSS Dark Mode
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark',
      },
    },

    // For creating an RSS feed
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }: any) => {
              return allMdx.nodes.map((node: any) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    body
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Alecia Vogel's Dev Blog",
          },
        ],
      },
    },

    // Loading fonts for use in tailwind.config.js
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        mode: "async" /* Font loading mode */,
        enableListener: true /* Enable font loading listener to handle FOUT */,
        interval: 300 /* Font listener interval (in ms). Default is 300ms. Recommended: >=300ms */,
        timeout: 30000 /* Font listener timeout value (in ms). Default is 30s (30000ms). Listener will no longer check for loaded fonts after timeout, fonts will still be loaded and displayed, but without handling FOUT. */,

        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Silka", "Eksell Display Large", "Eksell Display Small"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "/fonts/css/all.css",
          },
        ],
      },
    },
  ],
};

export default config;
