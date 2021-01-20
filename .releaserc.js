module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      "publishCmd": "lerna version --conventional-commits"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "npx shx rm -rf dist && npx shx mkdir dist"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "npx lerna exec -- node ../../node_modules/npm-pack-all --output ../../dist/"
    }],
    "@semantic-release/git",
    ["@semantic-release/github", {
      "assets": "packages/*/*.tgz",
    }],
  ]
}