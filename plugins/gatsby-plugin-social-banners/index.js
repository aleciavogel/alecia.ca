const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const jimp = require('jimp');
const sharp = require('sharp');
const colors = require('tailwindcss/colors')

const renderLogo = async (fill_color) => {
  const $ = cheerio.load(fs.readFileSync(path.join(__dirname, "assets/logo.svg")));
  $('path').css("fill", colors[fill_color][400]);
  const svg = $('body').html();

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return jimp.read(png).then((img) => img?.resize(50, 50));
}

module.exports = async ({ markdownNode }) => {
  const {
    frontmatter,
    fields
  } = markdownNode;
  const { primary_color, accent_color } = frontmatter;
  const dest = path.join('./public/page-data/blog', fields.slug, 'social-banner.jpg');
  const logo = await renderLogo(accent_color);

  const WIDTH = 1200;
  const HEIGHT = 630;
  // const PADDING = 40;

  const banner = new jimp(WIDTH, HEIGHT, colors[primary_color][600], (err) => {
    if (err) throw err
  })

  banner.composite(logo, 100, 100).write(dest);


};