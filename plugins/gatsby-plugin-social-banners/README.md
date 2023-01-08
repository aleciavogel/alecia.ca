# gatsby-plugin-social-banners

This is a custom plugin I've written to suit my blog's needs. It updates the colors, author avatar,
logo, etc, depending on what has been predefined in a blog post's frontmatter configuration.

I use the [tailwindcss color palette](https://tailwindcss.com/docs/customizing-colors).

## Initial configuration

Since this package is currently unpublished, you will need to copy this directory's files into
your own gatsby site's `/plugins` directory.

Add it to your `gatsby-plugin-mdx` plugins in the `gatsby-config.js` file, like so:

```javascript
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
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
        ],
      },
    },
```

### gatsby-node.js Configuration

To automatically create a field with the banner path in it, add the following to your site's
`gatsby-node.js` file.

The logic below only generates a banner if your blog post doesn't have a `banner` property
set already.

```javascript
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    
    if (node.internal.type === `Mdx`) {
        createNodeField({
          name: `banner`,
          node,
          // Modify this line so that the default path matches the `destination` option you
          // set in `gatsby-config.js`
          value: node.frontmatter.banner ?? path.join("/seo", node.path, "/social-banner.jpg"),
        });
    }
};
```

## Blog Post Configuration

To your blog posts, you will need to assign `primary_color`, `accent_color`, and a `title` value for
your frontmatter. The colors need to be the name of a color from the 
[tailwindcss color palette](https://tailwindcss.com/docs/customizing-colors) (banner doesn't work with custom colors 
at this time). For instance, `indigo`.

## Fonts

I use [jimp](https://github.com/oliver-moran/jimp) to add text to my banners. It only accepts `.fnt` files.

You can use a site like [CloudConvert](https://cloudconvert.com/woff2-to-ttf) to convert `.woff2`
files to `.ttf` files, followed by converting the `.ttf` files to `.fnt` (bitmap) font files
with [TTF2FNT](https://ttf2fnt.com/).

Sadly, you won't be able to dynamically change the color and size of the text after you've
generated the `.fnt` file (not without customizing the plugin yourself, that is).

It will take a bit of experimentation to find the font-sizes that work the best for you. I didn't
document the sizes that I used as I went :(

## Customize positioning & sizing

Refer to [gatsby-node.js](./gatsby-node.js) for the full schema of options you can use to
tailor the banner to your liking.