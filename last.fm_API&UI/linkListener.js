function addEvent(element, evnt, funct){
  if (element.attachEvent)
   return element.attachEvent('on'+evnt, funct);
  else
   return element.addEventListener(evnt, funct, false);
}

addEvent(document.getElementById('topArtist'),
    'click',
    function () {
      controller("chart.getTopArtists");
    }
);

addEvent(
    document.getElementById('artist'),
    'click',
    function () {
      controller("artist.getinfo");
    }
);

addEvent(
    document.getElementById('album'),
    'click',
    function () {
      controller("album.getinfo");
    }
);

addEvent(
    document.getElementById('search'),
    'click',
    function () {
      controller("artist.search");
    }
);
