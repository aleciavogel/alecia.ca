const path = require('path');
const jimp = require('jimp');
const colors = require('tailwindcss/colors')

module.exports = ({ markdownNode }) => {
  const {
    frontmatter,
    fields
  } = markdownNode;
  const { primary_color } = frontmatter;
  const output = path.join('./public/seo', fields.slug, 'social-banner.jpg');

  const WIDTH = 1200;
  const HEIGHT = 630;
  // const PADDING = 40;

  const banner = new jimp(WIDTH, HEIGHT, colors[primary_color][600], (err) => {
    if (err) throw err
  })

  banner.write(output);

  console.log(output, primary_color, colors[primary_color][600]);


};