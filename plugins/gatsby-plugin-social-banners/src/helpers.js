const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const jimp = require("jimp");
const colors = require("tailwindcss/colors");

const { WIDTH, HEIGHT, PADDING, BORDER_WIDTH, BRAND_FONT_SIZE } = require("./constants");

exports.renderLogo = async (fill_color, pluginOptions, sizing) => {
  /* Update fill color of logo to match theme of this article */
  const logoWidth = sizing.logo.width;
  const logoHeight = sizing.logo.height;
  const $ = cheerio.load(fs.readFileSync(pluginOptions.logoSvg));
  const logoColor = "white";
  $("path").css("fill", logoColor);

  /* Convert SVG to PNG so that it can be read by Jimp */
  const svg = $("body").html();
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  /* Read PNG and resize */
  return jimp.read(png).then((img) => img?.resize(logoWidth, logoHeight));
};

exports.renderCircle = async (fill_color, sizing) => {
  const circleSize = sizing.avatar.size;

  /* Update fill color of circle to match theme of this article */
  const $ = cheerio.load(fs.readFileSync(path.join(__dirname, "assets/circle.svg")));
  const circleColor = colors[fill_color][400]; // colors[fill_color][300];
  $("circle").css("fill", circleColor);

  /* Convert SVG to PNG so that it can be read by Jimp */
  const svg = $("body").html();
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  /* Read PNG and resize */
  return jimp.read(png).then((img) => img?.resize(circleSize, circleSize));
};

exports.verifyFiles = (reporter, pluginOptions) => {
  const filePaths = {
    avatar: pluginOptions.default.avatar, // TODO: get avatar from blog post
    logoSvg: pluginOptions.logoSvg,
    titleFont: pluginOptions.fonts?.title,
    brandFont: pluginOptions.fonts?.brand,
    authorFont: pluginOptions.fonts?.author,
    jobFont: pluginOptions.fonts?.job,
  };

  Object.keys(filePaths).forEach((key, index) => {
    if (!fs.existsSync(filePaths[key])) {
      reporter.panic(`
The path passed to gatsby-plugin-social-banners does not exist on your file system:
${filePaths[key]}
Please pick a path to an existing directory.
    `);
    }
  });

  return filePaths;
};

exports.generateSizing = (pluginOptions) => {
  const {
    width = WIDTH,
    height = HEIGHT,
    padding = PADDING,
    ...options
  } = pluginOptions.custom ?? {};

  const rectangleSize = options.titleBar?.size ?? height / 5;
  const titleBar = {
    size: rectangleSize,
  };

  const logoWidth = options.logo?.width ?? height / 8;
  const logo = {
    width: logoWidth,
    height: options.logo?.height ?? logoWidth,
    x: options.logo?.x ?? padding,
    y: options.logo?.y ?? (titleBar.size - logoWidth) / 2,
  };

  const postTitle = {
    x: options.postTitle?.x ?? padding,
    y: options.postTitle?.y ?? padding + height / 5,
  };

  const brandFontSize = options.brand?.fontSize ?? BRAND_FONT_SIZE;
  const brand = {
    fontSize: brandFontSize,
    x: options.brand?.x ?? padding * 2 + logoWidth - 10,
    y: options.brand?.y ?? (rectangleSize - brandFontSize) / 2,
  };

  const { borderWidth = BORDER_WIDTH } = options.avatar ?? {};
  const circleSize = options.avatar?.size ?? rectangleSize;
  const circleX = options.avatar?.x ?? padding;
  const circleY = options.avatar?.y ?? height - padding - circleSize;
  const avatar = {
    size: circleSize,
    borderWidth,
    x: circleX,
    y: circleY,
    img: {
      size: circleSize - borderWidth * 2,
      x: circleX + borderWidth,
      y: circleY + borderWidth,
    },
  };

  const authorName = {
    x: options.author?.x ?? avatar.img.x + avatar.img.size + padding,
    y: options.author?.y ?? avatar.img.y + 5,
  };

  const authorJob = {
    x: options.job?.x ?? authorName.x - 3,
    y: options.job?.y ?? authorName.y + 60,
  };

  return {
    width,
    height,
    padding,
    titleBar,
    logo,
    postTitle,
    brand,
    avatar,
    authorName,
    authorJob,
  };
};
