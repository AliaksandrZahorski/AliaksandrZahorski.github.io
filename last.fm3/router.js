var routes = {};
var artistName;
var paginationPage = 1;
var urlBuilder = new UrlBuilder();
var viewBuilder = new ViewBuilder();
var loader = new XhrLoader();

function route (path, controller) {
  routes[path] = {controller: controller};
}

function router () {
  var url = location.hash.slice(1) || '/';
  var route = routes[url];
  if (route.controller) {
    route.controller();
  }
}

route('/', function () {
});
route('/topArtist', function () {
  var query = urlBuilder.getTopArtists();
  loader.load(query, viewBuilder.topArtists);
});
route('/artist', function () {
  var query = urlBuilder.artistInfo("Sting");
  loader.load(query, viewBuilder.artist);

  var query2 = urlBuilder.artistGetTopAlbums("Sting");
  loader.load(query2, viewBuilder.artistTopAlbums);
});
route('/album', function () {
  query = urlBuilder.albumInfo("Sting", "Ten Summoner's Tales");
  loader.load(query, viewBuilder.album);
});
route('/search', function () {
  viewBuilder.search();
});
route('/search_results', function () {
  query = urlBuilder.artistSearch(artistName);
  loader.load(query, viewBuilder.searchResults);
});

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
