function controller(command) {
  
  var query;
  var urlBuilder = new UrlBuilder();
  var loader = new XhrLoader();

  switch(command) {
    case "chart.getTopArtists":
        query = urlBuilder.getTopArtists();
        loader.load(query, displayInfo);
        break;
    case "artist.getinfo":
        query = urlBuilder.artistInfo("михаил+круг");
        loader.load(query, displayInfo);
        break;
    case "album.getinfo":
        query = urlBuilder.albumInfo("михаил+круг", "Владимирский+Централ");
        loader.load(query, displayInfo);
        break;
    case "artist.search":
        query = urlBuilder.artistSearch("михаил+круг");
        loader.load(query, displayInfo);
        break;
    default:
        displayInfo(null, "unknown command");
        break;
    }
}

var val;

var displayInfo = function(returnedData, command) {
  val = JSON.parse(returnedData);
  document.getElementById('dynamic_content').innerHTML = command;
  console.log(val);
}