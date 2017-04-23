var baseUrl = "http://ws.audioscrobbler.com/2.0/?method=";
var val;

var loader = new XhrLoader();

var displayInfo = function(returnedData) {
  val = JSON.parse(returnedData);
  console.log(val);
}

var tailUrl = new TailUrl().artistSearch("михаил+круг").addApiKey(user.API_key).addFormat("json").toUrl();
loader.load(baseUrl + tailUrl, displayInfo);

var tailUrl = new TailUrl().getTopArtists().addApiKey(user.API_key).addFormat("json").toUrl();
loader.load(baseUrl + tailUrl, displayInfo);

var tailUrl = new TailUrl().artistInfo("михаил+круг").addApiKey(user.API_key).addFormat("json").toUrl();
loader.load(baseUrl + tailUrl, displayInfo);

var tailUrl = new TailUrl().albumInfo().addApiKey(user.API_key).artist("михаил+круг").album("Владимирский+Централ").addFormat("json").toUrl();
loader.load(baseUrl + tailUrl, displayInfo);
