const databaseMovie = "https://api.themoviedb.org/3/search/movie?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query="

const databaseTv = "https://api.themoviedb.org/3/search/tv?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query="

var app = new Vue({
  el: '#app',
  data: {
    userInput: "",
    mediaMovie: [],
    mediaTv: []
  },

// Funzione che contiene chiamata API collegata all'inserimento di una query di ricerca nell'input
  methods: {
    search: function () {
      axios.get(databaseMovie + this.userInput).then(risposta => {
        let movies = risposta.data.results;
        this.mediaMovie = movies;
      });

// Chiamata API per le serie TV
      axios.get(databaseTv + this.userInput).then(risposta => {
        let serieTv = risposta.data.results;
        this.mediaTv = serieTv;
      });
    },
     rating: function (vote) {
             return Math.round(vote / 2);
           }
  }

});
