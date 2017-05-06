function XhrLoader() {}

XhrLoader.prototype.load = function(query, cb) {
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
  xhr.open("GET", query.url, true);
  xhr.send();
};
