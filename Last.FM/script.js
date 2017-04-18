var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=";
var format = "&format=json";
var val;

var displayInfo = function(returnedData) {
  val = JSON.parse(returnedData);
  console.log(val);
}

var tailUrl = "artist.search&artist=михаил+круг&api_key="
            + user.API_key + format;
load(baseUrl + tailUrl, displayInfo);

var tailUrl = "chart.getTopArtists&api_key="
            + user.API_key + format;
load(baseUrl + tailUrl, displayInfo);

var tailUrl = "artist.getinfo&artist=михаил+круг&api_key="
            + user.API_key + format;
load(baseUrl + tailUrl, displayInfo);

var tailUrl = "album.getinfo&api_key="
            + user.API_key + "&artist=михаил+круг"
            + "&album=Владимирский+Централ" + format;
load(baseUrl + tailUrl, displayInfo);
