var UrlBuilder = function() {
}

var format = ansverFormat.format;
var key = user.API_key;
var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=";

UrlBuilder.prototype = {  
  artistSearch: function(name) {
    return baseUrl + "artist.search&artist=" + name + "&api_key=" + key + "&format=" + format;
  },
  getTopArtists: function() {
    return baseUrl + "chart.getTopArtists" + "&api_key=" + key + "&format=" + format;
  },
  artistInfo: function(name) {
    return baseUrl + "artist.getinfo&artist=" + name + "&api_key=" + key + "&format=" + format;
  },
  albumInfo: function(name, album) {
    return baseUrl + "album.getinfo" + "&api_key=" + key + "&artist=" + name + "&album="
     + album + "&format=" + format;
  },
}
