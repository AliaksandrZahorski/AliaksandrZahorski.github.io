var TailUrl = function() {
}

var format = "json";
var key = user.API_key;

TailUrl.prototype = {  
  artistSearch: function(name) {
    return "artist.search&artist=" + name + "&api_key=" + key + "&format=" + format;
  },
  getTopArtists: function() {
    return "chart.getTopArtists" + "&api_key=" + key + "&format=" + format;
  },
  artistInfo: function(name) {
    return "artist.getinfo&artist=" + name + "&api_key=" + key + "&format=" + format;
  },
  albumInfo: function(name, album) {
    return "album.getinfo" + "&api_key=" + key + "&artist=" + name + "&album="
     + album + "&format=" + format;
  },
}



