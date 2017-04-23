function XhrLoader() {}
XhrLoader.prototype = Object.create(Loader.prototype);

XhrLoader.prototype.load = function(url, cb) {
  Loader.prototype.load.apply(this, arguments);
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200 && typeof cb === 'function') {
      cb(xhr.responseText);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
};
