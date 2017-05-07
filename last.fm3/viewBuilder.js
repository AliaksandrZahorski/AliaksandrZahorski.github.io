var ViewBuilder = function() {
}

ViewBuilder.prototype = {  
  artist: function(returnedData) {
    var content = JSON.parse(returnedData);

    hide("search_box");
    hide("text_box");
    hide("info_box");
    hide("track_box");
    hide("pagination_box");

    var DOM_img = document.createElement("img");
    DOM_img.src = content.artist.image['2']['#text']
    DOM_img.setAttribute("id", "artist_img");
    info_box.appendChild(DOM_img);

    var DOM_text = document.createElement("div");
    var bio = content.artist.bio.summary.replace(/<a href=(.*)/,'');
    DOM_text.textContent = bio;
    info_box.appendChild(DOM_text);
  },
  artistTopAlbums: function(returnedData) {
    var content = JSON.parse(returnedData);

    hide("image_box");

    for(var i = 0; i < content.topalbums.album.length; i++) {
      var DOM_img = document.createElement("img");
      DOM_img.src = content.topalbums.album[i].image['3']['#text'];
      image_box.appendChild(DOM_img);
    }
  },
  topArtists: function(returnedData) {
    var content = JSON.parse(returnedData);

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
  },
  album: function(returnedData) {
    var content = JSON.parse(returnedData);

    hide("search_box");
    hide("text_box");
    hide("info_box");
    hide("image_box");
    hide("track_box");
    hide("pagination_box");

    var DOM_img = document.createElement("img");
    DOM_img.src = content.album.image['2']['#text'];
    DOM_img.setAttribute("id", "artist_img");
    info_box.appendChild(DOM_img);

    var DOM_text = document.createElement("div");
    var artistName = content.album.artist;
    DOM_text.textContent = 'Artist: ' + artistName;
    info_box.appendChild(DOM_text);

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
  },
  search: function(returnedData) {
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
      location.href='#/search_results';
    }, false);

    inputSearch.appendChild(inputArtistName);
    inputSearch.appendChild(searchButton);
  },
  searchResults: function(returnedData) {
    var content = JSON.parse(returnedData);

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
      createA[i].setAttribute('href', '#/search_results');
      if (i + 1 == paginationPage) {
        createA[i].setAttribute("id", "active");  
      }
      
      createA[i].appendChild(createAText);
      pagination_box.appendChild(createA[i]);

      createA[i].addEventListener('click', set_handler(i), false);
    }
  },
}


function hide(id) {
  document.getElementById(id).innerHTML = '';
}

function set_handler(i){
  return function (e) {
    paginationPage = i + 1;
    console.log(i+1);
    router();
  };
}

function getLikes() {
  return "Likes: " + Math.floor(Math.random() * (1 + 10));
}
