module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      "publishCmd": "lerna version --conventional-commits --yes"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "shx rm -rf dist && shx mkdir dist"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "lerna exec -- node ../../node_modules/npm-pack-all --output ../../dist/"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "tar2zip dist/*.tgz"
    }],
    "@semantic-release/git",
    ["@semantic-release/github", {
      "assets": "dist/*",
    }],
  ]
}