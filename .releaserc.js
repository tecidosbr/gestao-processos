const pkg = require("./package.json");

module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      "prepareCmd": "lerna version ${nextRelease.version} --no-git-tag-version --yes"
    }],
    ["@semantic-release/exec", {
      "prepareCmd": "shx rm -rf release && shx mkdir release"
    }],
    ["@semantic-release/exec", {
      "prepareCmd": "lerna exec -- node ../../node_modules/npm-pack-all --output ../../release/"
    }],
    ["@semantic-release/exec", {
      "prepareCmd": "tar2zip release/*.tgz"
    }],
    "@semantic-release/git",
    ["@semantic-release/github", {
      "assets": "release/*",
    }],
  ]
}