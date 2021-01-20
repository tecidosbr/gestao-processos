module.exports = {
  extends: "semantic-release-monorepo",
  plugins: [
    "@semantic-release/commit-analyzer",
    // ["semantic-release-lerna", { generateNotes: true }],
    "@semantic-release/changelog",
    // ["@semantic-release/exec", { "publishCmd": "npm run pack" }],
    "@semantic-release/git",
    ["@semantic-release/github", { assets: "dist/*.tgz" }],
  ],
};
