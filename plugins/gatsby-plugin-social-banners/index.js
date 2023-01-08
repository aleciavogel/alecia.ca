const { generateBanner } = require("./src/social-banner");


module.exports = async ({ markdownNode, reporter, graphql }, pluginOptions) => {
  console.log("Graphql?", graphql);
  if (!markdownNode.frontmatter?.banner) {
    // If no custom banner is defined, generate one
    await generateBanner(markdownNode, reporter, pluginOptions);
  }
}