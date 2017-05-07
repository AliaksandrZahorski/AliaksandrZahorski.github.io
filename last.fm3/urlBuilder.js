var UrlBuilder = function() {
}

var query = {};
var format = ansverFormat.format;
var key = user.API_key;
var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=";

UrlBuilder.prototype = {  
  artistSearch: function(name) {
    paginationPage = paginationPage || 1;
    var url = baseUrl + "artist.search&artist=" + name + "&api_key=" + key
    + "&limit=6" + "&page=" + paginationPage + "&format=" + format; 
    query.url = encodeURI(url);
    return query;
  },
  getTopArtists: function() {
    var url = baseUrl + "chart.getTopArtists" + "&api_key=" + key + "&format=" + format;
    query.url = encodeURI(url);
    return query;
  },
  artistInfo: function(name) {
    var url = baseUrl + "artist.getinfo&artist=" + name + "&api_key=" + key + "&format=" + format;
    query.url = encodeURI(url);
    return query;
  },
  albumInfo: function(name, album) {
    var url = baseUrl + "album.getinfo" + "&api_key=" + key + "&artist=" + name + "&album="
     + album + "&format=" + format;
    query.url = encodeURI(url);
    return query;
  },
  artistGetTopAlbums: function(name) {
    var url = baseUrl + "artist.gettopalbums&artist=" + name + "&api_key=" + key + "&format=" + format
      + "&limit=6";
    query.url = encodeURI(url);
    return query;
  },
}
