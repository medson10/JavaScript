module.exports = function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  var decoded = decodeURIComponent(path);
  decoded = "." + decoded.replace(/(\/|\\)\.\.(\/|\\|$)/g, "/");
  return decoded;
}
