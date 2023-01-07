const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const jimp = require('jimp');
const sharp = require('sharp');
const colors = require('tailwindcss/colors');

const WIDTH = 1200;
const HEIGHT = 630;
const PADDING = 40;

const RECTANGLE_SIZE = HEIGHT / 5;

const LOGO_SIZE = HEIGHT / 8;
const LOGO_Y = (RECTANGLE_SIZE - LOGO_SIZE) / 2;

const TITLE_Y = PADDING + (HEIGHT / 5);

const BRAND_X = (PADDING * 2) + LOGO_SIZE - 10;
const BRAND_FONT_SIZE = 60;
const BRAND_Y = (RECTANGLE_SIZE - BRAND_FONT_SIZE) / 2;

const CIRCLE_SIZE = HEIGHT / 5;
const CIRCLE_Y = HEIGHT - PADDING - CIRCLE_SIZE;
const BORDER_WIDTH = 6;
const AVATAR_SIZE = CIRCLE_SIZE - (BORDER_WIDTH * 2);
const AVATAR_X = PADDING + BORDER_WIDTH;
const AVATAR_Y = CIRCLE_Y + BORDER_WIDTH;
const AUTHOR_X = AVATAR_X + AVATAR_SIZE + PADDING;
const AUTHOR_Y = AVATAR_Y + 5;
const JOB_X = AUTHOR_X;
const JOB_Y = AUTHOR_Y + 70;

const renderLogo = async (fill_color) => {
  /* Update fill color of logo to match theme of this article */
  const $ = cheerio.load(fs.readFileSync(path.join(__dirname, "assets/logo.svg")));
  const logoColor = "white";
  $('path').css("fill", logoColor);

  /* Convert SVG to PNG so that it can be read by Jimp */
  const svg = $('body').html();
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  /* Read PNG and resize */
  return jimp.read(png).then((img) => img?.resize(LOGO_SIZE, LOGO_SIZE));
}

const renderCircle = async (fill_color) => {
  /* Update fill color of circle to match theme of this article */
  const $ = cheerio.load(fs.readFileSync(path.join(__dirname, "assets/circle.svg")));
  const circleColor = colors[fill_color][400]; // colors[fill_color][300];
  $('circle').css("fill", circleColor);

  /* Convert SVG to PNG so that it can be read by Jimp */
  const svg = $('body').html();
  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  /* Read PNG and resize */
  return jimp.read(png).then((img) => img?.resize(CIRCLE_SIZE, CIRCLE_SIZE));
}

module.exports = async ({ markdownNode }) => {
  const {
    frontmatter,
    fields
  } = markdownNode;
  const { primary_color, accent_color, title } = frontmatter;
  const dest = path.join('./public/page-data/blog', fields.slug, 'social-banner.jpg');
  const logo = await renderLogo(accent_color);
  const circle = await renderCircle(accent_color);

  Promise.all([
    jimp.read(path.join(__dirname, 'assets/alecia_author.png')),
    jimp.loadFont(path.join(__dirname, 'assets/fonts/eksell/eksell.fnt')),
    jimp.loadFont(path.join(__dirname, 'assets/fonts/silka-bold/silka-bold.fnt')),
    jimp.loadFont(path.join(__dirname, 'assets/fonts/silka-bold-small/silka-bold-small.fnt')),
    jimp.loadFont(path.join(__dirname, 'assets/fonts/silka-small/silka-small.fnt')),
  ]).then(([
    avatar,
    title_font,
    brand_font,
    author_font,
    author_title_font
  ]) => {
    let banner = new jimp(WIDTH, HEIGHT, colors[primary_color][700], (err) => {
      if (err) throw err
    })

    /* Create url box at the top */
    let rectangle = new jimp(WIDTH, RECTANGLE_SIZE, colors[accent_color][400], (err) => {
      if (err) throw err
    });
    rectangle.print(brand_font, BRAND_X, BRAND_Y, "alecia.ca", WIDTH - PADDING * 4);
    banner.composite(rectangle, 0, 0);

    /* Add SVG shapes into the banner */
    banner.composite(logo, PADDING, LOGO_Y);
    banner.composite(circle, PADDING, CIRCLE_Y);

    /* Add author image */
    avatar?.resize(AVATAR_SIZE, AVATAR_SIZE);
    banner.composite(avatar, AVATAR_X, AVATAR_Y);

    /* Add blog title text */
    banner.print(title_font, PADDING, TITLE_Y, title, WIDTH - PADDING * 4);

    /* Add author's name & title */
    banner.print(author_font, AUTHOR_X, AUTHOR_Y, "Alecia Vogel");
    banner.print(author_title_font, AUTHOR_X, JOB_Y, "Full Stack Developer");

    return banner.write(dest);
  });
};