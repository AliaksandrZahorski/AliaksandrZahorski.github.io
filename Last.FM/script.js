var val;
var url = new UrlBuilder();
var loader = new XhrLoader();

var displayInfo = function(returnedData) {
  val = JSON.parse(returnedData);
  console.log(val);
}

loader.load(url.artistSearch("михаил+круг"), displayInfo);
loader.load(url.getTopArtists(), displayInfo);
loader.load(url.artistInfo("михаил+круг"), displayInfo);
loader.load(url.albumInfo("михаил+круг", "Владимирский+Централ"), displayInfo);
