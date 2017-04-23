var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=";
var val;

var loader = new XhrLoader();

var displayInfo = function(returnedData) {
  val = JSON.parse(returnedData);
  console.log(val);
}

var tailUrl = new TailUrl();
var url = baseUrl + tailUrl.artistSearch("михаил+круг");

loader.load(url, displayInfo);


url = baseUrl + tailUrl.getTopArtists();
loader.load(url, displayInfo);

url = baseUrl + tailUrl.artistInfo("михаил+круг");
loader.load(url, displayInfo);

url = baseUrl + tailUrl.albumInfo("михаил+круг", "Владимирский+Централ");
loader.load(url, displayInfo);
