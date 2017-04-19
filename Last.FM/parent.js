function XhrLoader() {}
XhrLoader.prototype.init = function() {}

XhrLoader.prototype.load = function(url, cb) {
  console.log("loading data from remote server..." + arguments[0]);
}
