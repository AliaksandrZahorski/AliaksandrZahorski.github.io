function TailUrl() { 
  var obj = {
        value: '',
        artistSearch: function (name) {
          this.value += "artist.search&artist=" + name;
          return this;
        },
        artist: function (name) {
          this.value += "&artist=" + name;
          return this;
        },
        artistInfo: function (name) {
          this.value += "artist.getinfo&artist=" + name;
          return this;
        },
        album: function (name) {
          this.value += "&album=" + name;
          return this;
        },
        albumInfo: function () {
          this.value += "album.getinfo";
          return this;
        },
        getTopArtists: function () {
          this.value += "chart.getTopArtists&api_key=";
          return this;
        },
        addApiKey: function (apiKey) {
          this.value += "&api_key=" + apiKey;
          return this;
        },
        addFormat: function (format) {
          this.value += "&format=" + format;
          return this;
        },


        toUrl:function () {
          return(this.value);
        }
      };
  return obj;
}
