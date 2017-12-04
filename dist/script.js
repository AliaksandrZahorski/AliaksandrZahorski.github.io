(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navigation = function navigation(urlList) {
  var result = [];
  var logMapElements = function logMapElements(value, key, map) {
    result.push('\n      <li>\n      <a class="navigation" href="#" value="' + key + '" >' + value + '</a>\n    </li>');
  };
  urlList.forEach(logMapElements);
  return result.join(' ');
};

exports.default = navigation;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _script = require('./script');

var url = function url(name) {
  return 'https://newsapi.org/v2/top-headlines?sources=' + name + '\n  &apiKey=a17853ebbbad40ecadb0b6ca47fe356d';
};

var markup = function markup(articles) {
  return '\n  ' + articles.map(function (article) {
    return '<article>\n    <header>\n    <h1><a href=' + article.url + ' title=' + article.title + '>' + article.title + '</a></h1>\n    <img src=' + article.urlToImage + ' alt=' + article.title + ' />\n    <p>Published: <time>' + new Date(article.publishedAt).toLocaleTimeString() + '</time></p>\n    </header>\n    <p>' + article.description + '</p>\n    </article>';
  }).join(' ');
};

var render = function render() {
  document.querySelector("div").innerHTML = 'Processing...';
  var reqUrl = url(_script.currentUrl.name);
  return fetch(reqUrl).then(function (response) {
    return response.json();
  }).then(function (_ref) {
    var articles = _ref.articles;

    document.querySelector("div").innerHTML = markup(articles);
  }).catch(function (error) {
    return document.querySelector("div").innerHTML = 'Some happens! ' + error.message;
  });
};

exports.default = render;

},{"./script":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentUrl = undefined;

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _render = require('./render');

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var urlList = new Map();

urlList.set('1', 'bbc-news');
urlList.set('2', 'cnn');
urlList.set('3', 'rt');

var currentUrl = exports.currentUrl = { name: urlList.get('1') };

document.querySelector("ul").innerHTML = (0, _navigation2.default)(urlList);
(0, _render2.default)();

var getNews = function getNews(e) {
  var val = e.target.getAttribute('value');
  currentUrl.name = val ? urlList.get(val) : urlList.get('1');
  (0, _render2.default)();
};

var nav = document.getElementsByClassName("navigation");
for (var i = 0; i < nav.length; i++) {
  nav[i].addEventListener('click', function (event) {
    return getNews(event);
  });
}

},{"./navigation":1,"./render":2}]},{},[3]);
