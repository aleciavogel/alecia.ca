/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const {
  WIDTH,
  HEIGHT,
  PADDING,
  BRAND_FONT_SIZE,
  BORDER_WIDTH
} = require("./src/constants");

exports.onPreInit = ({ reporter }) => reporter.info("Loaded gatsby-plugin-social-banners");

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    siteName: Joi.string()
      .description("Site name to appear at the top of the social banner")
      .required(),
    logoSvg: Joi.string()
      .description("Path to svg image of logo used in top left corner")
      .required(),
    default: Joi.object({
      author: Joi.string()
        .description("Default author when one is not defined by a blog post")
        .required(),
      description: Joi.string()
        .description("Default description of the author when one is not defined by a blog post")
        .required(),
      avatar: Joi.string()
        .description("Default image to use for the author avatar when one is not defined by the blog post")
        .required(),
    }).required(),
    destination: Joi.string()
      .description("Filepath to a directory you will store the social banners within")
      .required(),
    fonts: Joi.object({
      title: Joi.string()
        .description("Path to bitmap font for the blog title")
        .required(),
      brand: Joi.string()
        .description("Path to bitmap font for the name of the site")
        .required(),
      author: Joi.string()
        .description("Path to bitmap font for the author name")
        .required(),
      job: Joi.string()
        .description("Path to bitmap font for the author's job title")
        .required(),
    }).required(),
    custom: Joi.object({
      width: Joi.number()
        .integer()
        .min(10)
        .default(WIDTH)
        .description("Width of the social banner image"),
      height: Joi.number()
        .integer()
        .min(10)
        .default(HEIGHT)
        .description("Height of the social banner image"),
      padding: Joi.number()
        .integer()
        .min(0)
        .default(PADDING)
        .description("Default padding of the social banner image"),
      titleBar: Joi.object({
        size: Joi.number()
          .integer()
          .min(10)
          .description("Height of the title bar (it will span the entire width of the card)")
      }),
      logo: Joi.object({
        width: Joi.number()
          .integer()
          .min(10)
          .description("Width of the logo image"),
        height: Joi.number()
          .integer()
          .min(10)
          .description("Height of the logo image"),
        x: Joi.number()
          .integer()
          .min(0)
          .description("The logo's distance from the left edge of the banner"),
        y: Joi.number()
          .integer()
          .min(0)
          .description("Logo's distance from the top of the card"),
      }),
      postTitle: Joi.object({
        x: Joi.number()
          .integer()
          .min(0)
          .description("Blog title's distance from the left edge of the card"),
        y: Joi.number()
          .integer()
          .min(0)
          .description("Blog title's distance from the top of the card"),
      }),
      brand: Joi.object({
        fontSize: Joi.number()
          .integer()
          .min(10)
          .default(BRAND_FONT_SIZE)
          .description("Site name's font size"),
        x: Joi.number()
          .integer()
          .min(0)
          .description("Site name's distance from the left of the card"),
        y: Joi.number()
          .integer()
          .min(0)
          .description("Site name's distance from the top of the card"),
      }),
      avatar: Joi.object({
        size: Joi.number()
          .integer()
          .min(10)
          .description("Width and height of the author avatar (including border width)"),
        borderWidth: Joi.number()
          .integer()
          .min(0)
          .default(BORDER_WIDTH)
          .description("The width of the border around the author avatar"),
        x: Joi.number()
          .integer()
          .min(0)
          .description("The avatar's distance from the left side of the banner"),
        y: Joi.number()
          .integer()
          .min(0)
          .description("The avatar's distance from the top of the banner"),
      }),
      author: Joi.object({
        x: Joi.number()
          .integer()
          .min(0)
          .description("The distance from the left side of the banner to the author's name"),
        y: Joi.number()
          .integer()
          .min(0)
          .description("The distance from the top of the banner to the author's name"),
      }),
      job: Joi.object({
        x: Joi.number()
          .integer()
          .min(0)
          .description("The distance from the left side of the banner to the author's job title"),
        y: Joi.number()
          .integer()
          .min(0)
          .description("The distance from the top of the banner to the author's job title"),
      })
    })
  });
}

exports.onPostBuild = ({ reporter }) => reporter.success("Finished generating social banners")