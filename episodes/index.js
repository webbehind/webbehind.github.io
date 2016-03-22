var path = require("path")
var glob = require("glob")

// Create a list of all folders that have index.js files
var episodeList = glob.sync(
  path.join(__dirname, '**/index.js'),
  {ignore: __filename}
)

module.exports = episodeList.map( s => require(s))
