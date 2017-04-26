var val;
var url = new UrlBuilder();
var loader = new XhrLoader();

var displayInfo = function(returnedData) {
  val = JSON.parse(returnedData);
  console.log(val);
}

function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}

addEvent(
    document.getElementById('topArtist'),
    'click',
    function () {
      loader.load(url.getTopArtists(), displayInfo);
      document.getElementById('dynamic_content').innerHTML = 'topArtist';
    }
);

addEvent(
    document.getElementById('artist'),
    'click',
    function () {
      loader.load(url.artistInfo("михаил+круг"), displayInfo);
      document.getElementById('dynamic_content').innerHTML = 'artist';
    }
);

addEvent(
    document.getElementById('album'),
    'click',
    function () {
      loader.load(url.albumInfo("михаил+круг", "Владимирский+Централ"), displayInfo);
      document.getElementById('dynamic_content').innerHTML = 'album';
    }
);

addEvent(
    document.getElementById('search'),
    'click',
    function () {
      loader.load(url.artistSearch("михаил+круг"), displayInfo);
      document.getElementById('dynamic_content').innerHTML = 'search';
    }
);
