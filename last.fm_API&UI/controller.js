var query;
var artistName;
var paginationPage = 1;

function controller(command) {
  
  var urlBuilder = new UrlBuilder();
  var loader = new XhrLoader();

  switch(command) {
    case "chart.getTopArtists":
        query = urlBuilder.getTopArtists();
        loader.load(query, displayInfo);
        break;
    case "artist.getinfo":
        query = urlBuilder.artistInfo("Sting");
        loader.load(query, displayInfo);
        break;
    case "album.getinfo":
        query = urlBuilder.albumInfo("Sting", "Ten Summoner's Tales");
        loader.load(query, displayInfo);
        break;
    case "search":
        displayInfo('""', "search");
        break;
    case "artist.search":
        query = urlBuilder.artistSearch(artistName);
        loader.load(query, displayInfo);
        break;
    case "artist.gettopalbums":
        query = urlBuilder.artistGetTopAlbums("Sting");
        loader.load(query, displayInfo);
        break;
    default:
        displayInfo('""', "unknown command");
        break;
    }
}

var displayInfo = function(returnedData, command) {
  var content = JSON.parse(returnedData);
  var dynamic_content = viewBuilder(content, command);
  content = null;
  command = null;
}

function viewBuilder(content, command) {
  switch(command) {
    case "chart.getTopArtists":
        hide("search_box");
        hide("text_box");
        hide("info_box");
        hide("image_box");
        hide("track_box");
        hide("pagination_box");

        for(var i = 0; i < content.artists.artist.length; i++) {
          var DOM_img = document.createElement("img");
          DOM_img.src = content.artists.artist[i].image['3']['#text'];
          image_box.appendChild(DOM_img);
        }
        break;
    case "artist.getinfo":
        hide("search_box");
        hide("text_box");
        hide("info_box");
        hide("image_box");
        hide("track_box");
        hide("pagination_box");
        
        var htmlText = "";
        
        htmlText += '<img src="' + content.artist.image['2']['#text'] + '" alt="' 
          + content.artist.name + '" id="artist_img">';
        htmlText += content.artist.bio.summary;
        document.getElementById('info_box').innerHTML = htmlText;

        controller("artist.gettopalbums");

        break;
    case "album.getinfo":
        hide("search_box");
        hide("text_box");
        hide("info_box");
        hide("image_box");
        hide("track_box");
        hide("pagination_box");

        var htmlText = '';
        
        htmlText += '<img src="' + content.album.image['2']['#text'] + '" alt="' 
          + content.album.name + '" id="artist_img">';
        htmlText += '<p>Artist: ' + content.album.artist + '</p>';
        document.getElementById('info_box').innerHTML = htmlText;

        var para = document.createElement("div");
        para.setAttribute('id', 'album_name');
        var node = document.createTextNode(content.album.name);
        para.appendChild(node);
        text_box.appendChild(para);

        var para = document.createElement("div");
        para.setAttribute('id', 'album_likes');
        var node = document.createTextNode(getLikes());
        para.appendChild(node);
        text_box.appendChild(para);

        var htmlText = '<p>Tracks</p>';
        document.getElementById('track_box').innerHTML = htmlText;
        for(var i = 0; i < content.album.tracks.track.length; i++) {
          var createA = document.createElement('a');
          var createAText = document.createTextNode(content.album.tracks.track[i].name);
          createA.setAttribute('href', content.album.tracks.track[i].url);
          createA.appendChild(createAText);
          track_box.appendChild(createA);
        }

        break;
    case "search":
        hide("search_box");
        hide("text_box");
        hide("info_box");
        hide("image_box");
        hide("track_box");
        hide("pagination_box");

        var inputSearch = document.createElement('div');
        inputSearch.setAttribute('id', 'searchBorder');
        search_box.appendChild(inputSearch);

        var inputArtistName = document.createElement('input');
        inputArtistName.type = 'text';
        inputArtistName.setAttribute('id', 'searchInput');

        var searchButton = document.createElement('button');
        searchButton.setAttribute('id', 'searchButton');
        searchButton.innerHTML = 'Find';
        searchButton.addEventListener('click', function() {
          artistName = document.getElementById('searchInput').value;
          controller("artist.search");
        }, false);

        inputSearch.appendChild(inputArtistName);
        inputSearch.appendChild(searchButton);

        break;
    case "artist.search":
        hide("search_box");
        hide("text_box");
        hide("info_box");
        hide("image_box");
        hide("track_box");
        hide("pagination_box");
        
        for(var i = 0; i < content.results.artistmatches.artist.length; i++) {
          var DOM_img = document.createElement("img");
          DOM_img.src = content.results.artistmatches.artist[i].image['3']['#text'];
          image_box.appendChild(DOM_img);
        }

        for(var i = 0; i < 5; i++) {
          var createA = [];
          createA[i] = document.createElement('a');
          var createAText = document.createTextNode(i+1);
          createA[i].setAttribute('href', '#');
          if (i + 1 == paginationPage) {
            createA[i].setAttribute("id", "active");  
          }
          
          createA[i].appendChild(createAText);
          pagination_box.appendChild(createA[i]);

          createA[i].addEventListener('click', set_handler(i), false);

        }

        break;
    case "artist.gettopalbums":
        hide("track_box");
        while (image_box.firstChild) {
          image_box.removeChild(image_box.firstChild);
        }
        for(var i = 0; i < content.topalbums.album.length; i++) {
          var DOM_img = document.createElement("img");
          DOM_img.src = content.topalbums.album[i].image['3']['#text'];
          image_box.appendChild(DOM_img);
        }
        break;
    default:
        displayInfo(null, "unknown command");
        break;
    }
}

function hide(id) {
  document.getElementById(id).innerHTML = '';
}

function set_handler(i){
  return function (e) {
    paginationPage = i + 1;
    controller("artist.search");
  };
}

function getLikes() {
  return "Likes: " + Math.floor(Math.random() * (1 + 10));
}
