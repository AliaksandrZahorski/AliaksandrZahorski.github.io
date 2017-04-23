function Loader() {}

Loader.prototype.load = function(url, cb) {
  console.log("loading data from remote server..." + arguments[0]);
}
