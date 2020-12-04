const databaseMovie = "https://api.themoviedb.org/3/search/movie?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query="

const databaseTv = "https://api.themoviedb.org/3/search/tv?api_key=0b739e8a0353e6df48b40dbc54ebd08e&query="

const apikey = "0b739e8a0353e6df48b40dbc54ebd08e"

var app = new Vue({
  el: '#app',
  data: {
    userInput: "",
    mediaMovie: [],
    mediaTv: [],
    locandina: "https://image.tmdb.org/t/p/w185",
    flag: "https://www.countryflags.io/",
    spec: "/flat/24.png",
    en: "https://www.countryflags.io/gb/flat/24.png",
    ja: "https://www.countryflags.io/jp/flat/24.png",

  },

// Funzione che contiene chiamata API collegata all'inserimento di una query di ricerca nell'input
  methods: {
    search: function () {
      axios.get(databaseMovie + this.userInput).then(risposta => {
        let movies = risposta.data.results;
        this.mediaMovie = movies;
      });
      this.userInput = "";


// Chiamata API per le serie TV
      axios.get(databaseTv + this.userInput).then(risposta => {
        let serieTv = risposta.data.results;
        this.mediaTv = serieTv;
      });
      this.userInput = "";
    },

// Funzione per portare il voto in un range da 1 a 5 e arrotondarlo per eccesso
     rating: function (vote) {
             return Math.round(vote / 2);
           }
   }

});
