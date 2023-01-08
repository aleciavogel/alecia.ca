const path = require("path");
const jimp = require("jimp");
const colors = require("tailwindcss/colors");

const {
  verifyFiles,
  renderLogo,
  renderCircle,
  generateSizing
} = require("./helpers");

/**
 * Generate the social banner file and return the destination file path
 * @param node - Node containing frontmatter and field data for blog post
 * @param reporter - Console logger provided by gatsby
 * @param pluginOptions - Options that the user entered in gatsby-config.js in the project
 * @returns {Promise<string>} - Destination of the social banner that was generated
 */
exports.generateBanner = async (node, reporter, pluginOptions) => {
  const { primary_color, accent_color, title } = node.frontmatter;
  const dest = path.join(pluginOptions.destination, node.path, "social-banner.jpg");
  const sizing = generateSizing(pluginOptions);
  const logo = await renderLogo(accent_color, pluginOptions, sizing);
  const circle = await renderCircle(accent_color, sizing);

  const errorHandler = (err) => {
    if (err) throw err;
  }
  const files = verifyFiles(reporter, pluginOptions);

  return Promise.all([
    jimp.read(files.avatar),
    jimp.loadFont(files.titleFont),
    jimp.loadFont(files.brandFont),
    jimp.loadFont(files.authorFont),
    jimp.loadFont(files.jobFont),
  ]).then(([
             avatar,
             title_font,
             brand_font,
             author_font,
             job_font
           ]) => {
    let banner = new jimp(
      sizing.width,
      sizing.height,
      colors[primary_color][700],
      errorHandler
    )

    /* Create url box at the top */
    let rectangle = new jimp(
      sizing.width,
      sizing.titleBar.size,
      colors[accent_color][400],
      errorHandler
    );

    /* Add site name */
    rectangle.print(
      brand_font,
      sizing.brand.x,
      sizing.brand.y,
      pluginOptions.siteName
    );
    banner.composite(rectangle, 0, 0);

    /* Add SVG shapes into the banner */
    banner.composite(logo, sizing.logo.x, sizing.logo.y);
    banner.composite(circle, sizing.avatar.x, sizing.avatar.y);

    /* Add author image */
    avatar?.resize(sizing.avatar.img.size, sizing.avatar.img.size);
    banner.composite(avatar, sizing.avatar.img.x, sizing.avatar.img.y);

    /* Add blog title text */
    banner.print(
      title_font,
      sizing.postTitle.x,
      sizing.postTitle.y,
      title,
      sizing.width - sizing.padding * 4
    );

    /* Add author's name & title */
    banner.print(
      author_font,
      sizing.authorName.x,
      sizing.authorName.y,
      pluginOptions.default.author // TODO: retrieve from blog post
    );
    banner.print(
      job_font,
      sizing.authorJob.x,
      sizing.authorJob.y,
      pluginOptions.default.description // TODO: retrieve from blog post
    );

    banner.write(dest);
    return dest;
  });
}