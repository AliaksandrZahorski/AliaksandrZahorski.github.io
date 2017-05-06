var UrlBuilder = function() {
}

var query = {};
var format = ansverFormat.format;
var key = user.API_key;
var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=";

UrlBuilder.prototype = {  
  artistSearch: function(name) {
    paginationPage = paginationPage || 1;
    query.url = baseUrl + "artist.search&artist=" + name + "&api_key=" + key
    + "&limit=6" + "&page=" + paginationPage + "&format=" + format;
    return query;
  },
  getTopArtists: function() {
    query.url = baseUrl + "chart.getTopArtists" + "&api_key=" + key + "&format=" + format;
    return query;
  },
  artistInfo: function(name) {
    query.url = baseUrl + "artist.getinfo&artist=" + name + "&api_key=" + key + "&format=" + format;
    return query;
  },
  albumInfo: function(name, album) {
    query.url = baseUrl + "album.getinfo" + "&api_key=" + key + "&artist=" + name + "&album="
     + album + "&format=" + format;
    return query;
  },
  artistGetTopAlbums: function(name) {
    query.url = baseUrl + "artist.gettopalbums&artist=" + name + "&api_key=" + key + "&format=" + format
      + "&limit=6";
    return query;
  },
}
