module.exports = {
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      "publishCmd": "lerna exec -- npm version ${nextRelease.version} --git-tag-version=false --allow-same-version"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "npm version ${nextRelease.version} --git-tag-version=false --allow-same-version"
    }],
    ["@semantic-release/exec", {
      "publishCmd": "git add ."
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