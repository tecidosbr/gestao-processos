module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      "prepareCmd": "lerna version ${nextRelease.version} --no-git-tag-version --yes"
    }],
    ["@semantic-release/exec", {
      "prepareCmd": "npm version ${nextRelease.version} --git-tag-version=false --allow-same-version"
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
    ["@semantic-release/git", {
      "assets": ["CHANGELOG.md", "lerna.json", "package*.json", "packages/*/package*.json"],
    }],
    ["@semantic-release/github", {
      "assets": "release/*",
    }],
  ]
}
