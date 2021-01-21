const pkg = require("./package.json");

module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      "publishCmd": "lerna version ${nextRelease.version} --no-git-tag-version --yes"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "shx rm -rf release && shx mkdir release"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "lerna exec -- node ../../node_modules/npm-pack-all --output ../../release/"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "tar2zip release/*.tgz"
    }],
    "@semantic-release/git"
    ["@semantic-release/github", {
      "assets": "release/*",
    }],
  ]
}