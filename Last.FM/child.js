function Loader() {}
Loader.prototype.XhrLoader$init = XhrLoader.prototype.init;
Loader.prototype.init = function() {
    this.XhrLoader$init();
}

Loader.prototype.load = function(url, cb) {
  XhrLoader.prototype.load.apply(this, arguments);
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if(typeof cb === 'function') cb(xhr.responseText);
    }
  }
  xhr.open("GET", url, true);
  xhr.send();
};
